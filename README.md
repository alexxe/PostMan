# PostMan

### Prerequisites

- git
- nodejs
- IDE: Visual studio code
- docker
- docker-compose
- database access: [Azure Data Studio](https://docs.microsoft.com/de-de/sql/azure-data-studio/download?view=sql-server-2017) can be used

### Visual studio code plugins

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
- OPTIONAL: [Cobalt2 Theme Official](https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css)
- [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils)
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [GraphQL for VSCode](https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode)
- [GraphQL](https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets)
- [Scope Info](https://marketplace.visualstudio.com/items?itemName=siegebell.scope-info)
- [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
- [VS Live Share](https://marketplace.visualstudio.com/items?itemName=ms-vsliveshare.vsliveshare)

## Installation

- make sure all prerequisites are installed including the VS Code plugins
- install the hasura cli globally [Instructions](https://docs.hasura.io/1.0/graphql/manual/hasura-cli/install-hasura-cli.html)
- clone this repo
- run `npm install` to install dependencies
- run `npm run docker` to start the required infrastructure
- run `npm start` to start the service
- run `hasura migrate apply` to apply the latest migrations
- run `hasura console` to open the hasura console
- optional apply init data 'hasura.seed.graphql' with hasura console
