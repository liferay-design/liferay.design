---
title: 'Link'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/link.html'
docLink: 'https://docs.google.com/document/d/1GM05mJm4je62mn8pmOhzNzeo6IezD2q1GF7AX5z7S-Q/edit?usp=sharing'
description: 'Also known as a hyperlink, a link is a clickable (text or image) element used for navigation purposes.'
order: 282
draft: false
---

![single link example, text not surrounded](/images/lexicon/LinkSingle.jpg)

### Usage

-   Only use links for navigation. A link must not trigger another kind of action.
-   Do not use a link to trigger an action that could trigger a button. If you want to trigger a button, use a [button link](../buttons) instead.

### Types

#### Inline Link

Use an inline link when you need a link to flow naturally with a sentence or paragraph.

![inline link example in a paragraph](/images/lexicon/LinkInline.jpg)

Attributes:

-   Color: primary blue
-   Font weight: inherit
-   Hover: primary blue hover color + underline

#### Single Link

A single link is used for stand-alone hyperlinks. They can be text or an image.

![single link example, text not surrounded](/images/lexicon/LinkSingle.jpg)

Attributes:

-   Primary Text Link
    _ Color: primary blue
    _ Font weight: semi bold \* Hover: primary blue darken 5% color + underline
-   Secondary Text Link
    _ Color: secondary gray
    _ Font weight: semibold \* Hover: primary gray color + underline
-   Image \* No styling

#### Title Link

A title link is used for list item titles, such as Dataset Display (stacked list, table, or cards), asset title, blog entry teaser title, etc.

Example 1:

![title link example in a table](/images/lexicon/LinkTitleTable.jpg)

Example 2:

![title link example in a list](/images/lexicon/LinkTitleList.jpg)

Example 3:

![title link example in an asset](/images/lexicon/LinkTitleAsset.jpg)

Attributes:

-   Color: inherit
-   Font weight: inherit
-   Hover: underline

The image below demonstrates all the available implementations:

![link example in asset context with several pointers on hover](/images/lexicon/LinkExampleInContext.jpg)

#### External Link

Use external links to point to (target) external resources that are available on domains other than the current domain (source). Lexicon indicates this behavior with a tooltip.

![external link with tooltip on hover action](/images/lexicon/LinkExternalTooltip.jpg)

For accessibility purposes, we also provide an icon to illustrate this behavior. This icon is visually hidden by default and only accessible on focus or when using assistive technologies such as screen readers.

![external link with external link icon on focus action](/images/lexicon/LinkExternalFocus.jpg)
