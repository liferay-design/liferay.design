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

# Liferay.Design

[![Netlify Status](https://api.netlify.com/api/v1/badges/b2922843-0ae6-4361-bdb2-6e26329da68a/deploy-status)](https://app.netlify.com/sites/happy-jackson-1b6bb8/deploys)

## About

The online presence of Liferay's Design Teams!

Designed in [Figma](https://figma.com), built with [Gatsby](https://gatsbyjs.org), powered by [Netlify](https://Netlify.com).

<br />
<br />

## 👾 Getting started

### If you don't have a dev environment

Skip down to [Starting Phresh](#starting-phresh) for a step-by-step guide.

<br />

### Quick Start

1. **Install Dependencies**

    - open Terminal and type:

    ```sh
    npm install
    ```

    - hit Enter, then do the same for the command below

1. **Start up the dev server**

    ```sh
    npm run dev
    ```

1. Open up your [favorite browser](https://opera.com), type `localhost:7777` into the nav bar, and watch your work magically appear!

1. See the [Contributing Guidelines](/blob/master/CONTRIBUTING.md) for what to do after you make some improvements!

<br />
<br />

## ⛩ Structure

### 🌳 Branches

#### Master

Work and submit pull requests from the `master` branch.

#### Dev

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

1. **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.

3. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4. **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).

7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9. **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

<br />
<br />

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

<br />
<br />

## Starting Phresh

This is written for people who generally try to avoid the terminal &mdash; it can be scary, but Liferay.Design is a lot like Zelda (you don't have to go alone 🥁)!

Any of the [designers here](https://github.com/orgs/liferay-design/people) can help you, or at least point you to someone who can.

Set aside about 45 &mdash; 60 min to get set up.

<br />
<br />

### Step 1: Create a Github Account _(3 min)_

1. [Set up a personal account](https://github.com/join)
1. Choose the "free" plan
1. Tailor your experience &mdash; if you'd like, this can be helpful

### Step 2: Familiarize yourself with Git and Github _(20 min)_

1. Read [Hello World](https://guides.github.com/activities/hello-world/) and complete the tutorial. _(10 min)_
    - If you really, really, really aren't interested in this "technical" stuff, then this tutorial covers everything you'll need to create your bio page.
1. Read [Chris' post on Git Commit Messages](https://chris.beams.io/posts/git-commit/) &mdash; this will help you avoid Paul-like commit messages.
1. Read the [Git Handbook](https://guides.github.com/introduction/git-handbook/) _(10 min)_ for a good overview on the theory behind Git and GitHub.
    - **_NB_** This is important and helpful information to understand at a high level because Liferay uses Git.
1. Check out the [GitHub's resources](https://try.github.io/), and the [team's Trello cards](https://trello.com/b/500Ghgdu/development) on Git.

### Step 3: Let's git it started™ _(20 min)_

1. Congratulate Paul on that amazing section title 👆
1. Visit our [Phresh-N-Clean](https://github.com/liferay-design/phresh-n-clean) guide &mdash; this whole thing is pretty helpful for setting up your computer in a way that it can quickly and easily be reformatted and restored will help your computer stay faster, better, longer. (So you can `work it`.)
1. Complete steps [1](https://github.com/liferay-design/phresh-n-clean#1-homebrew-link), [2](https://github.com/liferay-design/phresh-n-clean#2-node--npm-link), [4](https://github.com/liferay-design/phresh-n-clean#4-homebrew-cask-link), and [6](https://github.com/liferay-design/phresh-n-clean#6-git--github-link) of the [Set Up](https://github.com/liferay-design/phresh-n-clean#set-up) portion
1. Install a code editor — [Sublime Text](https://www.sublimetext.com/) or [VSCode](https://code.visualstudio.com/).
    - `brew cask install sublime-text` or `brew cask isntall visual-studio-code`

### Step 4: The Clone Wars _(2 min)_

1. Pat yourself on the back, you're almost done &mdash; the last thing to do is get a local copy (code on your computer) of the site repository (repo for short).
1. Orient yourself
    1. Open your Terminal and type `ls` and hit Enter &mdash; this command will list the files and folders of the current directory (folder)
    1. Type `open .` and hit Enter &mdash; this will open up Finder to the current directory.
    1. Type `mkdir github` and hit Enter &mdash; now look at your Finder, you should now see a new folder labeled 'github' in your Home directory (`~/`)
    1. Type `cd github` and hit Enter &mdash; you've now navigated to the github folder in your Terminal!
    - _Note that this is our suggested method for organizing your repos, feel free to organize differently._
1. Now that your Terminal is open to your github folder, it's time to clone the repo! <img src="https://github.com/liferay-design/liferay.design/blob/dev/static/images/documentation/clone-repo.png@2x.png?raw=true" style="width:400px; float: right;"/>
1. Copy the url to your clipboard (there's a handy little button 📋)
1. Type `git clone`, paste the repo url and hit Enter &mdash; cloning should take about 10 seconds.
1. Now you need to navigate to the folder &mdash; type `cd life` and hit Tab, it should autocomplete to `liferay.design` &mdash; if it does, hit enter, if not, finish typing it out
1. Take your fingers off the keyboard, and give yourself a hand, you're now ready to [begin development](#quick-start)!

<br />
<br />

### Notes

1. **Pushing work to any of the branches will automagically build the site**

1. You can check the progress of current and past builds by checking our [Netlify Deploys page](https://app.netlify.com/sites/happy-jackson-1b6bb8/deploys).
