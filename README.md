# Liferay.Design.com

This is the repository for the Liferay.Design site.

Mockups
https://liferay.invisionapp.com/d/main#/projects/prototypes/12822327

# Setup

```
npm install
npm run dev
```

Then visit the url shown in your cli (should look like: http://localhost:8080/).


# Bundling all the files

Build client files during development.
```
npm run build:dev
```

Build client files for production.
```
npm run build
```

# Serving the files

Run server for production.
```
npm run start
```

## Optional Plugins to install for your code editor:

### Prettier (formatter primarily for JS files)
> Prettier is an opinionated code formatter. https://prettier.io/playground/
* User Guide: https://github.com/prettier/prettier
* VS Code Editor Plugin: https://github.com/prettier/prettier-vscode
* Vim Plugin: https://github.com/prettier/vim-prettier
* Sublime: https://packagecontrol.io/packages/JsPrettier

### ESlint (linter)
> Eslint is a pluggable linting utility for JavaScript and JSX
* User Guide: https://eslint.org/docs/user-guide/getting-started#configuration
* VS Code Editor Plugin: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* Vim Plugin: https://github.com/vim-syntastic/syntastic/tree/master/syntax_checkers/javascript
* Sublime: https://github.com/roadhump/SublimeLinter-eslint

### EditorConfig (formatter)
> EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs
* Info: http://editorconfig.org/
* VS Code Editor plugin: https://github.com/editorconfig/editorconfig-vscode
* Vim plugin: https://github.com/editorconfig/editorconfig-vim
* Sublime: https://github.com/sindresorhus/editorconfig-sublime
