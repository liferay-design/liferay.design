---
title: 'Installing Portal'
description: 'Installing, running, and updating Liferay Portal'
order: 1
publish: true
---

If you are a product designer working in a Liferay DXP related project this guide might be helpful for you and your daily work.

## Getting ready

_Note: We usually use [zsh](https://ohmyz.sh/) as terminal interface._

As a first step, open your terminal.


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

_Recommendation: /Users/your_username/Documents/Liferay_

```bash
git clone https://github.com/liferay/liferay-portal
```

**Install Java**

Download it from [Oracle](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)

**Configure Java in your machine**

Open a new terminal tab and go to your user folder.

```bash
cd /Users/your_username
```

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


```bash
cd /Users/your_username/Documents/Liferay/liferay-portal
```

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
../bundles/tomcat-9.0.53/bin/catalina.sh run
```

*Note: Adjust 'tomcat-9.0.53' to the version number in bundles folder*

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


# Using aliases

## Configuring

Alias let allow us to write our custom commands so we don't have to remember everything. You just need to write them in your .zshrc file.

Go to

```bash
cd /Users/your_username
```

Edit .zshrc file

```bash
pico .zshrc
```

Paste all this inside

```bash
# Go to portal
function portal {
  cd /Users/your_username/Documents/Liferay/liferay-portal
}

# Cleans bundles
function portal-bundle-clean {
  rm -rf ../bundles/data ../bundles/osgi/state
}

# Cleans bundles (to run Asset Libraries) and runs portal
function portal-run {
  portal-bundle-clean &&
  ../bundles/tomcat-9.0.53/bin/catalina.sh run
}

# Updating Portal
function portal-update {
  git pull && ant all
}
```

Now, restart your terminal.

## Excuting

Go to portal:

```bash
portal
```
Update your portal, if needed:

```bash
portal-uptate
```

Run portal:

```bash
portal-run
```

# My portal is failing and it doesn't run

Make sure there are no other java processes running in the same port.

```bash
pkill java
```

Sometimes it might not work due to a bad update or databases problems.

```bash
git clean -fdx
```

```bash
portal-update
```
