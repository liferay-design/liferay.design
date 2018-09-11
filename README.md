# Liferay.Design

## About
The online presence of Liferay's Design Teams! Designed in Figma, built with Gatsby.

## 👾 Getting started

### If you don't have a dev environment

The bare minimum you'll need is [npm](https://www.npmjs.com/get-npm) (which means you'll also need [Node](https://nodejs.org/en/) 😬 ), but before you start doing any of that &mdash; treat-yo-self to increased productivity by using some of the stuff [we've cobbled together](https://github.com/liferay-design/phresh-n-clean).

### Quick Start

1. **Install Dependencies**

   ```sh
   npm install
   ```

1. **Start up the dev server**

   ```sh
   npm run dev
   ```

1. Go to `localhost:7777` and watch your work magically appear!

1. **Pushing work to the upstream dev branch will automagically build the site**

1. Once build is complete visit [the dev site to see it](https://liferaydesign-liferaydotdesign-dev.wedeploy.io).

   If you're in the WeDeploy project, you can view build status on the [logs page](https://console.wedeploy.com/projects/liferaydotdesign-dev/services/liferaydesign/logs).

## ⛩ Structure

### 🌳 Branches

#### Master

Currently live on [liferay.design](https://liferay.design), it's compiled from the dev branch by Travis CI and then WeDeployed. Don't work on Master, as your pull request won't get accepted 😬. 

#### Dev

Work and submit pull requests from the `dev` branch.

#### vN

We save "versions" of the site as branches &mdash; v1 (for example) was the first ever version of the site.

TODO: deploy old versions on subdomains.

---

### 📂 Folders

#### Deploy

This contains the scripts that make the site magically appear when new work gets pulled into the repo &mdash; real developers made this for us, and we generally don't touch it.

#### src

This is where the site lives &mdash; there's a readme file in there that will give you more information about it.

#### static/images 

This is where we store all the... you guessed it, images! There's probably a better way to do this, so please help us out.

---

## 💁 What do all these files do?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── wedeploy.json

  1.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

  2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.

  3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

  4.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

  5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

  6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).

  7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

  8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

  9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

  10.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).

  11.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

  12.  **`README.md`**: A text file containing useful reference information about your project.

  13.  **`wedeploy.json`**: [WeDeploy](https://wedeploy.com/) takes care of deploying and hosting our site! It's pretty great. The ~3 lines of code basically 1. tell which project we're working on, 2. what kind of thing we're doing (in this case, hosting files), and 3. which files to serve. Amazing.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.