---
title: "Popovers and Tooltips"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/popovers.html"
description: "Popovers and Tooltips are patterns used to show helpful information in two different ways."
layout: "guide"
order: 1
---
## Popovers

![four different popovers with the arrow to the left, or right or top or down](/lexicon/images/Popover.jpg) 

### Usage

Popovers are used together with the question mark icon to communicate to the user that there is useful information for them to read. Popovers contain helpful information such as an explanation of a context.

![help icon](/lexicon/images/PopoverFromIcon.jpg)

#### Dos and Don'ts

For readability, keep a distance of 8px between text and the icon.

<div class="row">
	<div class="dodont col-lg">
        <img class="do" src="/lexicon/images/PopoverTitleIconDo.jpg" alt="keep 8 pixels between title and help icon">
        <p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/lexicon/images/PopoverTitleIconDont.jpg" alt="do not place it nearer than 8 pixels">
		<p class="dont">Don't</p>
	</div>
</div>

Keep a distance of 16px between text and the icon.

<div class="row">
    <div class="dodont col-lg">
        <img class="do" src="/lexicon/images/PopoverSectionIconDo.jpg" alt="keep 16 pixels between a section title and help icon">
        <p class="do">Do</p>
    </div>
    <div class="dodont col-lg">
        <img class="dont" src="/lexicon/images/PopoverSectionIconDont.jpg" alt="do not place it nearer than 16 pixels">
        <p class="dont">Don't</p>
    </div>
</div>

### Attributes

![popover metrics](/lexicon/images/PopoverMetrics.jpg)

## Tooltips

Tooltips are brief pieces of information that appear on hover state over an element to clarify its meaning or use for the user.

![the four different positions of a tooltip arrow in a tooltip, 4 tooltip cases](/lexicon/images/Tooltip.jpg)

### Usage

* Tooltips are used to help explain an icon button's meaning.
* They can also be used with links and images.
* Tooltips should be brief and contain a small amount of text. Lexicon recommends a maximum of 280 characters. If your description is longer than 280 characters, please use a popover instead.
* The tooltip appears on hover state and disappears on mouse out. This pattern does not exist on mobile, as hover is not a possible state on mobile devices.
* Make sure you properly position the arrow to point to the correct interface element. Improper placement can confuse the user.
* When possible, try to not overlap other interaction elements in the same component.

#### Dos and Don'ts

Use tooltips on elements that trigger an action, such as button icons.

<div class="row">
	<div class="dodont col-lg">
        <img class="do" src="/lexicon/images/TooltipDo.jpg" alt="tooltip on button icon hover action">
        <p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/lexicon/images/TooltipDont.jpg" alt="tooltip on plain text hover action">
		<p class="dont">Don't</p>
	</div>
</div>

### Attributes

![tootip metrics](/lexicon/images/TooltipMetrics.jpg)
