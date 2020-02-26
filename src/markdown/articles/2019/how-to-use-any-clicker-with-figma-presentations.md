---
author: 'Abel Hancock'
date: '2019-03-27T17:12:33.962Z'
title: 'How To Use Any Clicker With Figma Presentations (mac)'
featuredImage: '/images/articles/figma-clicker/cover.png'
publish: true
---

Hey friends. No time for chit-chat today. You are trying present slides in Figma and your clicker isn't... clicking. Good news, this is an easy fix!

_If you're more of a visual learner, [skip straight to the video](#video-demo)._

## Here's how this is gonna go down

We are going to use Karabiner - Elements to hijack the incoming keystrokes from your clicker and translate them to `←left arrow` and `right arrow→` to toggle Figma slides.

You will need:

-   **A Mac with Figma** (works with or without the app installed)

-   **A Clicker** (we use the [Logitech R400](https://www.amazon.com/dp/B002GHBUTK/ref=cm_sw_r_tw_dp_U_x_avbNCb1GHC3EJ))

-   [**Karabiner - Elements**](https://pqrs.org/osx/karabiner/) (free)

## Step 1: Setup your Figma presentation/prototype

If you need help setting up a prototype in Figma checkout their [documentation](https://help.figma.com/category/87-prototyping)

_Tip: If no prototype is setup slides will play from TOP TO BOTTOM, LEFT TO RIGHT_

![figma prototype example](/images/articles/figma-clicker/figma-presentation-prototype.png)
_figma prototype example_

## Step 2: Download and install the [Karabiner-Elements](https://pqrs.org/osx/karabiner/)

Karabiner installs both their _Elements_ and _Event Viewer_ apps by default. In this case, we will only be using _Karabiner - Elements_ to map the clicker keys.

![karabiner website screenshot](/images/articles/figma-clicker/download-karabiner-app.png)
_karabiner website_

## Step 3: Map the keys of your clicker to `left_arrow` and `right_arrow`

This is where the magic happens! Open Karabiner - Elements and:

1. **Select** your device from the "Target Device:" dropdown

2. **Determine** what keys your clicker is... well... clicking. If you have trouble with this the _Karabiner - Event Viewer_ app comes in handy to show what keys are being triggered

-   _Tip: Logitech R400 arrow keystrokes are `page_up` and `page_down`_

3. **Map** the clicker key (From key) to the corresponding arrow direction (To key)

(optional) Choose an arbitrary clicker key to map to "r" for restarting your presentation

![karabiner settings for logitech r400](/images/articles/figma-clicker/karabiner-settings.png)
_karabiner settings for logitech r400_

## That's it!

You should be all ready to use your clicker or remote with a Figma presentation.

## <a id="video-demo"></a>Video Demo

<div style="width:140%;height:550px;margin-left:-20%;position:relative;"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZxW90GjLr7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

If you run into problems or have questions hit me up on [twitter](https://twitter.com/abelfhancock)
