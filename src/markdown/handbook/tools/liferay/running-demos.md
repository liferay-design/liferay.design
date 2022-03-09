---
title: 'Running Demos'
description: 'Running Liferay Portal demos on your local machine'
order: 3
publish: true
---

_If you are a product designer working in a Liferay DXP related project this guide might be helpful for you and your daily work._

_This guide assumes that you have already the repo downloaded in your machine. It also assumes that you are in `liferay-portal` folder. If you are not, please [read this guide](.././installing-portal)._

## Running demos to feed your portal with data

_Note: this requires [Gradle](.././installing-portal#install-gradle)._

Demos are divided per application and all of them can be found inside `modules/apps.` This folder contains many things but the important elements for us are these:

-   `adaptive-media/adaptive-media-demo`
-   `analytics/analytics-client-osgi-demo`
-   `blogs/blogs-demo`
-   `fragment/fragment-demo`
-   `journal/journal-demo`
-   `message-boards/message-boards-demo`
-   `segments/segments-demo`
-   `sharing/sharing-demo`
-   `users-admin/users-admin-demo`

You don’t need to run all demos. Just run the ones you need to have data in Portal to play with. For that, go inside the desired demo.

Example from `liferay-portal` folder

```bash
cd modules/apps/journal/journal-demo
```

Once there run

```bash
gradle deploy
```

If you don’t have gradlew configured in your bash you will need to run something like:

```bash
/Users/victorvalle/liferay/liferay-portal/gradlew deploy
```

**Run each demo as many times as you want to generate more data.**

_Yayyyy!!!_

_ 👏👏👏👏👏_
