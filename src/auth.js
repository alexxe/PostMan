const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const PassportLocal = require('passport-local');
const LocalStrategy = PassportLocal.Strategy;
const secret = 'your_jwt_secret';

passport.use(
  new LocalStrategy(async function (username, password, next) {
    const where = {
      _and: {
        name: {
          _eq: username
        }
      },
      password: {
        _eq: password
      }
    };
    const [user] = await db.query.user({
        where
      },
      `{
      id
        
      }`
    );
    return next(null, user);
  })
);

/* POST login. */
router.post('/login', function (req, res, next) {
  passport.authenticate(
    'local', {
      session: false
    },
    (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info ? info.message : 'Login failed',
          user: user
        });
      }

      req.login(
        user, {
          session: false
        },
        err => {
          if (err) {
            res.send(err);
          }

          const token = jwt.sign(user, secret);

          return res.json({
            user,
            token
          });
        }
      );
    }
  )(req, res, next);
});

passport.use(
  new JWTStrategy({
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret
    },
    function (jwtPayload, cb) {
      return cb(null, jwtPayload);
    }
  )
);

module.exports = function (db) {
  this.db = db;
  return router;
};