# Liferay.Design

[![Netlify Status](https://api.netlify.com/api/v1/badges/b2922843-0ae6-4361-bdb2-6e26329da68a/deploy-status)](https://app.netlify.com/sites/happy-jackson-1b6bb8/deploys)

## About

The online presence of Liferay's Design Teams!

Designed in [Figma](https://figma.com), built with [Gatsby](https://gatsbyjs.org), powered by [Netlify](https://Netlify.com).

<br />
<br />

## Table of Contents

-   [Liferay.Design](#liferaydesign)
    -   [About](#about)
    -   [👾 Getting started](#-getting-started)
        -   [If you don't have a dev environment](#if-you-dont-have-a-dev-environment)
        -   [Quick Start](#quick-start)
    -   [⛩ Structure](#-structure)
        -   [🌳 Branches](#-branches)
            -   [Master](#master)
            -   [Dev](#dev)
            -   [vN](#vn)
        -   [📂 Folders](#-folders)
            -   [Deploy](#deploy)
            -   [src](#src)
                -   [components](#components)
                -   [markdown](#markdown)
                    -   [Using React Components Within a Markdown file](#using-react-components-within-a-markdown-file)
                -   [pages](#pages)
                -   [theme](#theme)
                -   [utils](#utils)
            -   [static/images](#staticimages)
    -   [💁 What do all these files do?](#-what-do-all-these-files-do)
    -   [🎓 Learning Gatsby](#-learning-gatsby)
    -   [Starting Phresh](#starting-phresh)
        -   [Step 1: Create a Github Account _(3 min)_](#step-1-create-a-github-account-3-min)
        -   [Step 2: Familiarize yourself with Git and Github _(20 min)_](#step-2-familiarize-yourself-with-git-and-github-20-min)
        -   [Step 3: Let's git it started™ _(20 min)_](#step-3-lets-git-it-started%E2%84%A2-20-min)
        -   [Step 4: The Clone Wars _(2 min)_](#step-4-the-clone-wars-2-min)
        -   [Notes](#notes)

## 👾 Getting started

### If you don't have a dev environment

Skip down to [Starting Phresh](#starting-phresh) for a step-by-step guide.

<br />

### Quick Start

**Warning**: This project only works with Node v12 (we could run v14, but we need 12 to install dependencies). You can use [NVM](https://github.com/nvm-sh/nvm) to install Node v12.14.1 by `nvm install v12.14.1`, then you can follow these steps:

1. **Install Dependencies**

    - open Terminal and type:

    ```bash
    npm install
    ```

    - hit Enter, then do the same for the command below

1. **Start up the dev server**

    ```bash
    npm run dev
    ```

1. Your [favorite browser](https://opera.com) should open automatically showing the site at `http://0.0.0.0:localhost:7777`!

    - It will also be accessible on your network at `your.local.ip:7777` — usually this will be something like `192.168.1.160:7777` — the command line prompt will specify your address.
    - _This makes mobile development easier, since you can check the site out on any device that's on your network._

1. See the [Contributing Guidelines](/CONTRIBUTING.md) for what to do after you make some improvements!

_N.B. Our site requires API keys to be fully built — while we're working on making it easy for anyone to contribute to, there are some technical limitations that we've run into. As a result, either you won't be able to build the site locally or some sections of the site will be missing. This should not affect your ability to make edits to content. Please reach out to [Paul Hanaoka](https://liferay.slack.com/team/U32FWRXDY) if you need keys._

<br />
<br />

## ⛩ Structure

### 🌳 Branches

#### Master

Work and submit pull requests from the `master` branch.

#### Dev

_Note: The `Dev` branch is no longer being actively used — the use-case for it is no longer necessary thanks to [Netlify's Deploy Previews](https://app.netlify.com/sites/happy-jackson-1b6bb8/deploys?filter=deploy+previews)._

Currently live on [dev.liferay.design](https://dev.liferay.design). This is our pre-production environment, best not to send pull requests to it unless there's a special scenario.

#### Production

Currently live on [liferay.design](https://liferay.design), don't work on Production as your pull request typically won't get accepted.

#### vN

We save "versions" of the site as branches &mdash; v1 (for example) was the first ever version of the site.

TODO: deploy old versions on subdomains.

---

### 📂 Folders

#### Deploy

This contains the scripts that make the site magically appear when new work gets pulled into the repo &mdash; real developers made this for us, and we generally don't touch it.

#### src

The src folder is where all the code is that gets compiled into a `public` folder which gets rendered onto the interwebs at [our domain](https://liferay.design). We roughly follow [atomic design](http://atomicdesign.bradfrost.com) principles.

##### components

Where all of our react components live &mdash; atoms, molecules, organisms, templates, and theme.

##### markdown

This is where 98.3% of the site content lives &mdash; [markdown](https://www.markdownguide.org) is a lot easier to write than html 🤓.

###### Using React Components Within a Markdown file

> This is new experimental territory to render react components in md files, so you will propbably run into some quirks!

1. Rename the file extension from `.md` to `.mdx`
2. If you have markup in the file, you will now have to make it React friendly (change `class` to `className` and `style=""` to `style={{}}`)
3. Import the component as normal and use it as normal :)

```js
---
title: 'Markdown File Title'
---

<div className="aspect-ratio card-item-first" style={{background: "url('/images/logos/liferay-logo.png') center/cover"}}>
  <Icon name="keyboardArrowDown" />
</div>
```

-   Notes: - For `.mdx` file syntax highlighting you can download the "Mdx" extension and follow their instructions - Don't put an extra line break between markup as it will think it will print out the literal markup for some reason

##### pages

Surprise surprise, this is where the code for the main pages of [liferay.design](https://liferay.design) lives.

##### theme

Stylesheets and other theme-related files.

##### utils

`generateIcons.js` will take any svg in the `static / images / icons` folder and add it to the `icons` component.

#### static/images

This is where we store all the... you guessed it, images! There's probably a better way to do this, so please help us out.

---

<br />
<br />

## 💁 What do all these files do?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .env.development
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md

1. **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.
1. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.
1. **`.env.development`**: This is where we keep tokens, API keys, and other secret stuff that is needed to build certain areas of the site. For the time being, please reach out to [Paul](mailto:paul.hanaoka@liferay.com) and he will share any keys with you manually.
1. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for. You most likely won't need to edit it.
1. **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.
1. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
1. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).
1. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
1. **`LICENSE`**: Gatsby is licensed under the MIT license.
1. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).
1. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
1. **`README.md`**: A text file containing useful reference information about your project.

<br />
<br />

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

<br />
<br />

## Starting Phresh

_See our [GitHub Setup Guide](https://liferay.design/handbook/tools/github)_

### Notes

1. **Pushing work to any of the branches will automagically build the site**

1. You can check the progress of current and past builds by checking our [Netlify Deploys page](https://app.netlify.com/sites/happy-jackson-1b6bb8/deploys).
