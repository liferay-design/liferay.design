---
author: 'Abel Hancock'
authorLink: '/team/hancock-abel'
date: '2019-03-27T17:12:33.962Z'
title: 'How To Use Any Clicker With Figma Presentations (mac)'
description: '3 Min Read'
featuredImage: '/images/posts/figma-clicker/cover.png'
avatar: '/images/headshots/hancock-abel.jpg'
---
Hey friends. No time for chit-chat today. You are trying present slides in Figma and your clicker isn't... clicking. Good news, this is an easy fix!

([Watch the video](/videos/figma-clicker.mp4))

## Here's how this is gonna go down

We are going to use Karabiner - Elements to hijack the incoming keystrokes from your clicker and translate them to ` ←left arrow` and `right arrow→` to toggle Figma slides.

You will need:

* **A Mac with Figma** (works with or without the app installed)

* **A Clicker** (we use the [Logitech R400](https://www.amazon.com/dp/B002GHBUTK/ref=cm_sw_r_tw_dp_U_x_avbNCb1GHC3EJ))

* [**Karabiner - Elements**](https://pqrs.org/osx/karabiner/) (free)

## Step 1: Setup your Figma presentation/prototype

If you need help setting up a prototype in Figma checkout their [documentation](https://help.figma.com/category/87-prototyping)

*Tip: If no prototype is setup slides will play from TOP TO BOTTOM, LEFT TO RIGHT* 

![figma prototype example](/images/posts/figma-clicker/figma-presentation-prototype.png)
_figma prototype example_

## Step 2: Download and install the [Karabiner-Elements](https://pqrs.org/osx/karabiner/)

Karabiner installs both their *Elements* and *Event Viewer* apps by default. In this case we will only be using *Karabiner - Elements* to map the clicker keys.

![karabiner website screenshot](/images/posts/figma-clicker/download-karabiner-app.png)
_karabiner website_


## Step 3: Map the keys of your clicker to `left_arrow` and `right_arrow`

This is where the magic happens! Open Karabiner - Elements and:

1. **Select** your device from the "Target Device:" dropdown

2. **Determine** what keys your clicker is... well... clicking. If you have trouble with this the *Karabiner - Event Viewer* app comes in handy to show what keys are being triggered

- *Tip: Logitech R400 arrow keystokes are `page_up` and `page_down`*


3. **Map** the clicker key (From key) to the corosponding arrow direction (To key)

(optional) Choose an arbitrary clicker key to map to "r" for restarting your presentation

![karabiner settings for logitech r400](/images/posts/figma-clicker/karabiner-settings.png)
_karabiner settings for logitech r400_

## That's it!

You should be all ready to use your clicker or remote with a Figma presentation.

Checkout the [video demo](/videos/figma-clicker.mp4)

If you run into problems or have questions hit me up on [twitter](https://twitter.com/abelfhancock)