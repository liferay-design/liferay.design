---
title: 'Buttons'
titleLabel: 'Clay'
# titleLabelLink: 'https://clayui.com/docs/components/buttons.html'
description: 'Buttons communicate an action to happen on user interaction.'
layout: 'guide'
order: 1
---

<div class="page-description">Buttons communicate an action to happen on user interaction.</div>

### Types

#### Primary

The primary button is always used for the most important actions. Two primary actions can't be near each other.

![button primary default size default state](/lexicon/images/ButtonPrimary.jpg)

#### Secondary

The secondary button is always use for secondary actions. Several secondary actions can be near by each other.

![button secondary default size default state](/lexicon/images/ButtonSecondary.jpg)

#### Link

The link button is mainly used for Cancel actions.

![button primary default size default state](/lexicon/images/ButtonLink.jpg)

### States

#### Default state

![set of three button types in default state](/lexicon/images/ButtonDefault.jpg)

#### Hover state

![set of three button types in active state](/lexicon/images/ButtonHover.jpg)

#### Active state

![set of three button types in active state](/lexicon/images/ButtonActive.jpg)

#### Disable state

![set of three button types in disabled state](/lexicon/images/ButtonDisabled.jpg)

### Sizes

#### Default

The default size is a height of 40px. It is used for main page actions such as Save or Cancel.

![button primary large size disable state](/lexicon/images/ButtonPrimary.jpg)

#### Small

The small size is a height of 32px. It is used for actions inside a page, such as dropdowns, button groups, and split buttons.

![button primary default size disable state](/lexicon/images/ButtonPrimarySmall.jpg)

### Dos and Don'ts

Use the same height for all the buttons that are in the same row.

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/lexicon/images/ButtonSizeDo.jpg" alt="two buttons of same height in a row">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/lexicon/images/ButtonSizeDont.jpg" alt="two buttons of different height in a row">
		<p class="dont">Don't</p>
	</div>
</div> -->

Characters can not all be uppercase in a button.

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/lexicon/images/ButtonCapitalizationDo.jpg" alt="button with no caps lock">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/lexicon/images/ButtonCapitalizationDont.jpg" alt="button with caps lock">
		<p class="dont">Don't</p>
	</div>
</div> -->

Text can not wrap multiple lines. It must all be on one line.

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/lexicon/images/ButtonWrapDo.jpg" alt="button with text on one line">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/lexicon/images/ButtonWrapDont.jpg" alt="button with text wrapped">
		<p class="dont">Don't</p>
	</div>
</div> -->

A borderless button must be placed either before or after a set of bordered buttons.

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/lexicon/images/ButtonIconDo.jpg" alt="borderless button, secondary button, primary button">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/lexicon/images/ButtonIconDont.jpg" alt="secondary button, borderless button, primary button">
		<p class="dont">Don't</p>
	</div>
</div> -->

### Variations

#### Secondary borderless

A secondary borderless button is used in toolbars when a secondary button would be too heavy for the toolbar's design. This keeps the design clean.

![button secondary borderless default size default state](/lexicon/images/ButtonBorderless.jpg)

#### Icon button

Buttons can display icons instead of text. The icons, however, must be monospaced inside the button. Icon buttons are used primarily in [management bars](../management_bar). This button variation can be primary, secondary, or borderless type.

![button icon primary default size default state](/lexicon/images/ButtonIconPrimary.jpg)

![button icon secondary default size default state](/lexicon/images/ButtonIconSecondary.jpg)

![button icon secondary boderdeless default size default state](/lexicon/images/ButtonIconBorderless.jpg)

#### Icon and text button

This button type is only used in sites, outside of administration. The icon emphasizes and helps communicate the action. The label must match the icon's purpose.

![button with icon and text](/lexicon/images/ButtonIconText.jpg)

#### Block level button

Buttons can also be configured at block level. Use this configuration when you need to communicate that an important action is required for the user. For example, it can be used as a load more action below a list. Please do not use it in forms. Choose the button type carefully. Primary is not always the best choice, nor is it the only configuration.

![block level button primary state, default size](/lexicon/images/ButtonBlockLevel.jpg)

#### Dropdown button

Dropdown buttons are always used with a dropdown menu. This button variation can be secondary or borderless type.

![button primary default size default state](/lexicon/images/ButtonDropdown.jpg)  
![button primary default size default state](/lexicon/images/ButtonDropdownBorderless.jpg)

#### Split button

Split buttons are used when you need to offer the user a quick main action along with secondary actions.

![button group where the left button specifies the main action and the second one displays a dropdown menu with secondary actions](/lexicon/images/ButtonSplit.jpg)

#### Button group

Button groups are used to switch between complementary views for example, but they must never be used for complementary actions, "Change and Cancel" actions, or "Save and Cancel" actions. In those cases, single buttons are the correct solution.

![button group, two examples. First one without disabled button, second one with disabled button](/lexicon/images/ButtonGroup.jpg)

#### Plus button

Plus buttons provide add actions for a dataset and are normally placed in toolbars. The add button lets you add entities, such as a blog post for a blog, a message board thread for a message board, or a folder. It can have one action or multiple. Visit Dropdown menu > Sorting actions to learn more.

![Plus button](/lexicon/images/ButtonActionPlus.jpg)

#### Action button

Action buttons are used when a set of contextual actions are needed for an element or a dataset. This button displays a set of actions inside a dropdown menu. The actions must be sorted in a specific way. please visit Dropdown menu > Sorting actions to learn more.

![Actions or kebab button](/lexicon/images/ButtonActionKebab.jpg)
