---
title: "Icons"
description: "Icon is a visual metaphor representing a concept that lies behind the idea and/or action."
order: 52
---

### Liferay icon library

Liferay has its own icon library created for the porpuses of the projects that use Lexicon.

<!-- <ul class="lexicon-icon-list list-unstyled">
{foreach $icon in $page.icons}
	<li>
		<svg class="lexicon-icon lexicon-icon-{$icon}">
			<use xlink:href="/vendor/lexicon/icons.svg#{$icon}" />
		</svg>
		<span>{$icon}</span>
	</li>
{/foreach}
</ul> -->

#### Language flags

People tend to have pretty strong opinions on whether flags should be used as a visual cue for indicating a language, mainly because in many parts of the world, the flag may have cultural and geographic meanings that we might not be aware of, or the flag itself isn't fully accurate to the dialects spoken in that region.

While we understand that reasoning, we've found that the times they are actually needed (when a user is not familiar with the currently displayed language) somewhat eliminates using other mechanisms, such as the name of the language (since the current language could be in an entirely different character set). Given this, there is often at least some familiarity with the identity of a country that speaks a shared language.

<!-- <ul class="lexicon-icon-list list-unstyled">
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

[Font Awesome](http://fontawesome.io/) and [Glyphicons](http://glyphicons.com/) are good alternatives in case you don't want to use Lexicon icon library.

### Usage

Icons can be used only when the metaphor is direct and clear. In case there is not a good icon to represent the concept you want to transmit, it will probably better to use words. Icons must be reserved to broad accepted visual ideas.

#### Why do we use SVG?

SVG gives us and you a greater amount of freedom in styling the icons, as well as a higher level of fidelity and clarity in the icons. Font icons, while fairly simple, also suffer some drawbacks, mainly with sub-pixel aliasing that cause the quality to not be as high as we would like. Also SVG allows for multi-color icons.

#### Help icon

Help icon is used in lexicon together with tooltips or popovers. As an example, it gives a better visual clue to users to reach an explanation about a field in a form.