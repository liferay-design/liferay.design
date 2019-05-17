# Contributing to this site

We definitely appreciate contributions in any form &mdash; QA, [submitting issues](https://github.com/liferay-design/liferay.design/issues), providing feedback, code, design, etc.

If you're part of the Liferay team in Figma, there's a Liferay.Design project &mdash; you can see where we're at and contribute comments, designs, etc there.

If you'd like to help manage deployments, please [request to join our Netlify team](mailto:paul.hanaoka@liferay.com?subject=I'd%20like%20to%20join%20the%20Netlify%20team%20for%20Liferay.Design!&body=Pretty%20please!%20%0A%0A%5Badd%20some%20reasons%5D)!

A good place to start is our [Issues page](https://github.com/liferay-design/liferay.design/issues)!

## How To:

1.  Fork the repo.
1.  Clone your fork on your computer (local).
1.  Commit any changes to your local, then push to your origin.
1.  Create a pull request to upstream.

_(If "local", "origin", and "upstream" are greek to you, [see this top answer on Stack Overflow.](https://stackoverflow.com/questions/9257533/what-is-the-difference-between-origin-and-upstream-on-github))_

**Important Notes**

1. All work should be done on the `master` branch (or you can create your own branch and request to merge it with the `master` branch.

1. We always `Rebase & Merge` pull requests so that the commit history is kept as clean as possible — to that end, be sure to follow the best practices outlined below to avoid merge conflicts in your PRs.

## Best Practices

### 1. Before starting any new work

If you don't have a pull-request in review, so that you are using the freshest code, pull the latest from upstream:

```
 git pull upstream master
```

If you're prompted to do a merge commit (you probably will be), hit `:wq` to close the merge comment, and then do a hard reset so that your local matches what is upstream:

```
  git reset --hard upstream/master
```

### 2. Before your pull-request is merged

Continue to push your commits up to your origin — they will automatically get added to your open pull-request.

### 3. After your pull-request is merged

Be sure to follow step #1 — pull fresh from upstream and do a hard reset (shortcut: `git pull upstream master && git reset --hard upstream/master`) — this ensures that your next pull-request will only include new commits.

If you don't pull from upstream after your PR gets merged; you will get errors because the commit hashes change one they are merged into upstream.

## Pushing to Production

If you have `write` permissions to the repo, once you ensure the site works using Netlify's deploy previews, you can push to production.

1. Ensure what you have locally is even with what is on upstream/master: `git pull upstream master && git reset --hard upstream/master`
1. Rename your local `master` branch to `production`: `git branch -m production`
1. Use the force, and push your local `production` branch to upstream: `git push upstream production --force`

That's it! In 2-4 minutes, the site will be built, deployed, and all updates will be reflected live on [liferay.design](https://liferay.design).

## Troubleshooting Git

### Merge Conflicts

This can happen for a myriad of reasons — but essentially it boils down to your local repo not being in-line with what is upstream. This is usually because:

1. Someone else's work was merged before you had a chance to send a PR.

1. You sent a PR, it was merged, but you didn't pull and reset your local repo to match upstream.

Don't worry — it's no big deal. There are two quick ways to solve it:

#### 1. Stash & Cherry Pick

If you have a lot of commits, or enough code that it would be a pain to copy/paste — stashing and then cherry picking your work is a good idea.

1. Create a temporary branch: (`git checkout -b temp-branch`)
1. Pull & reset to match upstream (`git pull upstream master && git reset --hard upstream/master`)
1. From the temp-branch, check the log to see which commits you want to cherry pick (`git log`)
1. Go back to the master branch (which is even with upstream since you reset it in step 2) and pick the commits you want (`git cherry-pick commit-sha`) _Note: 'commit-sha' being what you see in step 3_

_Note: See [Atlassian's 'Git Cherry Pick' tutorial](https://www.atlassian.com/git/tutorials/cherry-pick) for a more in-depth explanation on picking cherries._

#### 2. Copy, Reset, and Paste

If option 1 sounds like way too much work — or if you tried it and it didn't work — then you can always:

1. `ctrl+c` your work
1. Pull & reset to match upstream (`git pull upstream master && git reset --hard upstream/master`)
1. `ctrl+v`

## Treat Yoself

A few aliases that will make your life easier. If you think 'Alias' is just an overrated Jennifer Garner show, check out [this blog post](https://davidwalsh.name/alias-bash) for more information and kick your workflow into hyperspeed.

### Start Fresh From Upstream

Use this after your PR is merged or if you haven't done any recent development on the site.

```
 alias gstart="git pull upstream master && git reset --hard upstream/master"
```

### Rename Your Current Branch and Push to Production

```
 alias pushprod="git branch -m production && git push upstream production --force"
```

### Rename Your Current Branch and Reset to Upstream/Master

```
 alias reset="git branch -m master && git pull upstream master && git reset --hard upstream/master"
```

### Reset Your Dev Environment

Try this first if you run into any errors when trying to start local development:

```
 alias reinstall="rm -rf node_modules && npm install"
```

`rm -rf node_modules` will delete your `node_modules` folder, and `npm install` will install everything. This will fix 96% of the errors you encounter.
