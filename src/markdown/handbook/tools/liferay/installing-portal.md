---
title: 'Installing Portal'
description: 'Installing, running, and updating Liferay Portal'
order: 1
publish: true
---

If you are a product designer working in a Liferay DXP related project this guide might be helpful for you and your daily work.

## Getting ready

### Install Brew

Make sure you have brew installed in your machine. For that type in your terminal

```bash
brew -v
```

Otherwise follow [Homebrew guide](https://brew.sh/)

### Install Gradle

Make sure you have brew installed in your machine. For that type in your terminal

    `gradle -v`

Otherwise

```bash
brew install gradle
```

## Install Portal

Open your terminal and go to the place in your machine where you want to have the code. There type

```bash
git clone https://github.com/liferay/liferay-portal
```

Once there go inside the created folder

`cd liferay-porta`l

Then you need to create a database:

_Note: you need to [install mysql](https://dev.mysql.com/doc/refman/5.6/en/osx-installation-pkg.html) first if you haven’t before _

`echo "create database lportal" | mysql -u roo`t

## Running Portal

Just type

```bash
	../bundles/tomcat-9.0.17/bin/catalina.sh run
```

## Update Portal

_Note: you will need to install **ant → `brew install ant`**_

I personally run these 2 commands every morning when I arrive to the office to get the latest changes in the repo.

```bash
git pull
ant all
```

_Note: This might take 25 mins_

After running these 2 command you will need to run portal as explained before.

_Yayyyy!!!_

👏👏👏👏👏
