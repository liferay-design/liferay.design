---
title: 'Buttons'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/buttons.html'
description: 'Buttons communicate an action to happen on user interaction.'
layout: 'guide'
order: 204
---

![set of three button types in default state](/images/lexicon/ButtonDefault.png)

### Types

#### Primary

The primary button is always used for the most important actions. Two primary actions can't be near each other.

![button primary default size default state](/images/lexicon/ButtonPrimary.png)

#### Secondary

The secondary button is always use for secondary actions. Several secondary actions can be near by each other.

![button secondary default size default state](/images/lexicon/ButtonSecondary.png)

#### Link

The link button is mainly used for Cancel actions.

![button primary default size default state](/images/lexicon/ButtonLink.png)

### States

#### Default state

![set of three button types in default state](/images/lexicon/ButtonDefault.png)

#### Hover state

![set of three button types in active state](/images/lexicon/ButtonHover.png)

#### Active state

![set of three button types in active state](/images/lexicon/ButtonActive.png)

#### Disable state

![set of three button types in disabled state](/images/lexicon/ButtonDisabled.png)

### Sizes

#### Default

The default size is a height of 40px. It is used for main page actions such as Save or Cancel.

![button primary large size disable state](/images/lexicon/ButtonPrimary.png)

#### Small

The small size is a height of 32px. It is used for actions inside a page, such as dropdowns, button groups, and split buttons.

![button primary default size disable state](/images/lexicon/ButtonPrimarySmall.png)

### Dos and Don'ts

Use the same height for all the buttons that are in the same row.

| Do | Don't |
| -- | ----- |
| ![two buttons of same height in a row](/images/lexicon/ButtonSizeDo.png) | ![two buttons of different height in a row](/images/lexicon/ButtonSizeDont.png) |

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/images/lexicon/ButtonSizeDo.png" alt="two buttons of same height in a row">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/ButtonSizeDont.png" alt="two buttons of different height in a row">
		<p class="dont">Don't</p>
	</div>
</div> -->

Characters can not all be uppercase in a button.

| Do | Don't |
| -- | ----- |
| ![button with no caps lock](/images/lexicon/ButtonCapitalizationDo.png) | ![button with caps lock](/images/lexicon/ButtonCapitalizationDont.png) |

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/images/lexicon/ButtonCapitalizationDo.png" alt="button with no caps lock">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/ButtonCapitalizationDont.png" alt="button with caps lock">
		<p class="dont">Don't</p>
	</div>
</div> -->

Text can not wrap multiple lines. It must all be on one line.

| Do | Don't |
| -- | ----- |
| ![button with text on one line](/images/lexicon/ButtonWrapDo.png) | ![button with text wrapped](/images/lexicon/ButtonWrapDont.png) |

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/images/lexicon/ButtonWrapDo.png" alt="button with text on one line">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/ButtonWrapDont.png" alt="button with text wrapped">
		<p class="dont">Don't</p>
	</div>
</div> -->

A borderless button must be placed either before or after a set of bordered buttons.

| Do | Don't |
| -- | ----- |
| ![borderless button, secondary button, primary button](/images/lexicon/ButtonIconDo.png) | ![secondary button, borderless button, primary button](/images/lexicon/ButtonIconDont.png) |

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/images/lexicon/ButtonIconDo.png" alt="borderless button, secondary button, primary button">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/ButtonIconDont.png" alt="secondary button, borderless button, primary button">
		<p class="dont">Don't</p>
	</div>
</div> -->

### Variations

#### Secondary borderless

A secondary borderless button is used in toolbars when a secondary button would be too heavy for the toolbar's design. This keeps the design clean.

![button secondary borderless default size default state](/images/lexicon/ButtonBorderless.png)

#### Icon button

Buttons can display icons instead of text. The icons, however, must be monospaced inside the button. Icon buttons are used primarily in [management bars](../toolbars/management-bar). This button variation can be primary, secondary, or borderless type.

![button icon primary default size default state](/images/lexicon/ButtonIconPrimary.png)

![button icon secondary default size default state](/images/lexicon/ButtonIconSecondary.png)

![button icon secondary boderdeless default size default state](/images/lexicon/ButtonIconBorderless.png)

#### Icon and text button

This button type is only used in sites, outside of administration. The icon emphasizes and helps communicate the action. The label must match the icon's purpose.

![button with icon and text](/images/lexicon/ButtonIconText.png)

#### Block level button

Buttons can also be configured at block level. Use this configuration when you need to communicate that an important action is required for the user. For example, it can be used as a load more action below a list. Please do not use it in forms. Choose the button type carefully. Primary is not always the best choice, nor is it the only configuration.

![block level button primary state, default size](/images/lexicon/ButtonBlockLevel.png)

#### Dropdown button

Dropdown buttons are always used with a dropdown menu. This button variation can be secondary or borderless type.

![button primary default size default state](/images/lexicon/ButtonDropdown.png)  
![button primary default size default state](/images/lexicon/ButtonDropdownBorderless.png)

#### Split button

Split buttons are used when you need to offer the user a quick main action along with secondary actions.

![button group where the left button specifies the main action and the second one displays a dropdown menu with secondary actions](/images/lexicon/ButtonSplit.png)

#### Button group

Button groups are used to switch between complementary views for example, but they must never be used for complementary actions, "Change and Cancel" actions, or "Save and Cancel" actions. In those cases, single buttons are the correct solution.

![button group, two examples. First one without disabled button, second one with disabled button](/images/lexicon/ButtonGroup.png)

#### Plus button

Plus buttons provide add actions for a dataset and are normally placed in toolbars. The add button lets you add entities, such as a blog post for a blog, a message board thread for a message board, or a folder. It can have one action or multiple. Visit Dropdown menu > Sorting actions to learn more.

![Plus button](/images/lexicon/ButtonActionPlus.png)

#### Action button

Action buttons are used when a set of contextual actions are needed for an element or a dataset. This button displays a set of actions inside a dropdown menu. The actions must be sorted in a specific way. please visit Dropdown menu > Sorting actions to learn more.

![Actions or kebab button](/images/lexicon/ButtonActionKebab.png)
