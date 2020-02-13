---
title: 'Icons'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/icon.html'
description: 'Icons are a visual representation of an idea and/or action.'
order: 279
draft: false
---

### Usage

An icon by itself doesn't have a meaning, therefore it must be always associalted to a label, an action, or something similar. The icon itself helps to communicate an idea but the meaning must be given by the label. The icon is just a visual aid. Please choose carefully the icon and the associated label so together they have a powerful and not misleading meaning.

Using an icon to communicate a concept is not always easy. If you are in this situation consider just using text.

### Size usage for designers

Use a 16px box for icons of 16px.

![Icon 16px box 16px](/images/lexicon/Icon16.jpg)

### Size usage for developers

-   Lexicon icons have no size.
-   The size of the icon is established by its container.
-   The default container size is 16px.
-   The available icons to use are in the Lexicon Icon Library. Don't mix these icons with icons from outside this library. If Lexicon doesn't provide the icons you need, switch icon libraries completely.

### Liferay icon library

Liferay has its own icon library created for the purposes of the projects that use Lexicon.

<!--
<ul class="lexicon-icon-list list-unstyled">
{foreach $icon in $page.icons}
	<li>
		<svg class="lexicon-icon lexicon-icon-{$icon}">
			<use xlink:href="/vendor/lexicon/icons.svg#{$icon}" />
		</svg>
		<span>{$icon}</span>
	</li>
{/foreach}
</ul> -->

Please, follow this [guide](https://gist.github.com/natecavanaugh/b9546c4215e5d5ef88a1b9d6ae2041a3#lexicon-icon-design-guidelines) to create icons for Lexicon.

#### Language flags

People tend to have pretty strong opinions on whether flags should be used as a visual cue for indicating a language. This is because in many parts of the world the flag may have cultural and geographic meanings that we might not be aware of, or the flag itself may not be fully accurate to the dialects spoken in that region.

While we understand this reasoning, we've found that when a user is not familiar with the currently displayed language, flags somewhat eliminate the use of other mechanisms, such as the name of the language (since the current language could be in an entirely different character set). Given this, there is often at least some familiarity with the identity of a country that speaks a shared language.

<!--
<ul class="lexicon-icon-list list-unstyled">
{foreach $flag in $page.flags}
	<li>
		<svg class="lexicon-icon lexicon-icon-{$flag}">
			<use xlink:href="/vendor/lexicon/icons.svg#{$flag}" />
		</svg>
		<span>{$page.flagData[$flag]} ({$flag})</span>
	</li>
{/foreach}
</ul> -->

#### Other icon libraries

[Font Awesome](http://fontawesome.io/) and [Glyphicons](http://glyphicons.com/) are good alternatives if you don't want to use Lexicon's icon library.
