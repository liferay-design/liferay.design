---
title: 'Installing Portal'
description: 'Installing, running, and updating Liferay Portal'
order: 1
publish: true
---

If you are a product designer working in a Liferay DXP related project this guide might be helpful for you and your daily work.

## Getting ready

We usually use [zsh](https://ohmyz.sh/) as terminal interface


**Install brew**

```bash
brew install gradle
```

**Install ant**

```bash
brew install ant
```

**Clone Liferay Portal**

Create a folder wherever you want, navigate to it through terminal and clone the repo there:

```bash
git clone https://github.com/liferay/liferay-portal
```

**Install Java**

Download it from [Oracle](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)

**Configure Java in your machine**

You can use pico or any other terminal text editor.

```bash
pico .zshrc
```

Paste this inside:

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_261.jdk/Contents/Home
export ANT_OPTS="-Xms4096m -Xmx4096m -XX:MaxPermSize=512m -Dorg.gradle.workers.max=11"
```

*Note: Adjust 'jdk1.8.0_261' to the version number you have just downloaded*

## Updating Portal

Everyday to update your portal you have to do the following from *liferay-portal* folder

**Clean bundles**

```bash
rm -rf ../bundles/data ../bundles/osgi/state
```

**Get the news**

```bash
git pull
```

**Build them**

```bash
ant all
```

## Running Portal

You just need to run this from *liferay-portal* folder

```bash
../bundles/tomcat-9.0.33/bin/catalina.sh run
```

*Note: Adjust 'tomcat-9.0.33' to the version number in bundles folder*

PD: another day I can show you all the alias I have to run this quickly

## Useful commands

Changing to DXP version

```bash
ant setup-profile-dxp
```

Changing to Portal version

```bash
ant setup-profile-portal
```

After any of them you might need to get the bundle snapshot

```bash
ant snapshot-bundle
```

