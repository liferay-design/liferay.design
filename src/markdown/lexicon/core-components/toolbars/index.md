---
title: 'Toolbar'
description: 'A toolbar is a set of actions related to a specific context that are grouped into a horizontal bar.'
order: 361
draft: false
---

### Usage

A toolbar organizes actions into a horizontal bar that is responsive. Its height changes to accommodate the height of the elements it contains. The toolbar always maintains the vertical alignment.

You only need to define the number of blocks or containers that you want to have in your toolbar, and place the elements inside it. These blocks or containers can be one of two different types:

-   Field: used to make tight groups for items such as action icons
-   Content: Fills the remaining space unused by fields as much as possible. If the toolbar contains multiple content blocks, the available space is equally divided for each content block.

### Layout

Below are some example layouts that combine fields and contents:

Example 1: Three consecutive fields

![toolbar layout example with three fields](/images/lexicon/ToolbarLayout1.jpg)

Example 2: Three consecutive contents

![toolbar layout example with three contents](/images/lexicon/ToolbarLayout2.jpg)

Example 3: Field - Content - Field

![toolbar layout example with field - content - field](/images/lexicon/ToolbarLayout3.jpg)

The examples below show how these layouts are used for a management toolbar:

![toolbar layout example with field - content - field](/images/lexicon/ToolbarLayoutExample1.jpg)

![toolbar layout example with field - content - field](/images/lexicon/ToolbarLayoutExample3.jpg)

### Attributes

The horizontal distance between elements is always 16px. This changes to 8px on mobile devices.

![toolbar layout example with field - content - field](/images/lexicon/ToolbarLayoutMetricsHor.jpg)

The minimum vertical distance between elements is 16px. The search field is an exception to this rule. We want the search field, which has a height of 40px, to have more emphasis. In this case, the toolbar's top and bottom margins are 12px.

![toolbar layout example with field - content - field](/images/lexicon/ToolbarLayoutMetricsVert.jpg)
