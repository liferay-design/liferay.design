---
title: "Checkbox, Radio, Toggle"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/forms/radio-check-toggle.html"
description: "Checkboxes, radios and toggles provide users with different selection and activation tools."
layout: "guide"
order: 3
---



## Checkbox

A checkbox is a component that lets the user select the value that is written in its corresponding text label. A user can select multiple checkboxes from a group at the same time.

![checkbox](../../../images/CheckboxLabel.jpg)

*Note: although we have visually defined the checkbox, we use the native checkbox as it is easier to identify by the end user using different web browsers.*

### States

| State | Definition |
| ----- | ---------- |
| ![checkbox on](../../../images/CheckboxActive.jpg) | On |
| ![checkbox off](../../../images/Checkbox.jpg) | Off |
| ![checkbox on disabled](../../../images/CheckboxActiveDisabled.jpg) | On disabled |
| ![checkbox off disabled](../../../images/CheckboxDisabled.jpg) | Off disabled |
| ![checkbox variable for multiple selection](../../../images/CheckboxMultiple.jpg) | Checkbox Variable for multiple selection |

### Checkbox group

Checkboxes are commonly grouped in forms to provide a set of options.

![checkbox list metrics](../../../images/CheckboxList.jpg)![checkbox list metrics](../../../images/CheckboxListMetrics.jpg)

### Dos and Don'ts

Capitalize the checkbox's label.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/CheckboxCapitalizeDo.jpg" alt="checkbox text is capitalized">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/CheckboxCapitalizeDont.jpg" alt="checkbox text is not capitalized">
		<p class="dont">Don't</p>
	</div>
</div>

Use checkboxes for multiple choices in a set of options.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/CheckboxSwitchDo.jpg" alt="list of checkboxes to select options">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/CheckboxSwitchDont.jpg" alt="list of switches to select options">
		<p class="dont">Don't</p>
	</div>
</div>

Use checkboxes when more than one option can be selected.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/CheckboxDo.jpg" alt="list of checkboxes to select options">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/RadioDont.jpg" alt="list of switches to select options">
		<p class="dont">Don't</p>
	</div>
</div>

## Radio

A radio is a component that lets the user select the value that is written in its corresponding text label. Unlike checkboxes, a user can only select one radio button from a group at a time.

![radio](../../../images/RadioButtonLabelActive.jpg)

*Note: although we have visually defined the radio, we use the native radio button since it is easier to identify across different web browsers.*

### States

| State | Definition |
| ----- | ---------- |
| ![radio on](../../../images/RadioButtonActive.jpg) | On |
| ![radio off](../../../images/RadioButton.jpg) | Off |
| ![radio on disabled](../../../images/RadioButtonActiveDisabled.jpg) | On disabled |
| ![radio off disabled](../../../images/RadioButtonDisabled.jpg) | Off disabled |

### Radio Group

Radios are commonly grouped in forms to provide a set of options.

![radio list metrics](../../../images/RadioList.jpg)![radio list metrics](../../../images/RadioListMetrics.jpg)

It's common to have to split a long list of options into several columns to reduce space. Deciding when to use one column or several columns can be difficult. The benefits of each approach are shown below:

* One column:
    * It is always easier and faster to read, as the eye doesn’t have to jump.
    * Use it when you have long descriptions.
* Splitting into several columns:
		* It reduces space.
    * Make sure to have multiple options and to have at least six elements per column, otherwise there is no real benefit.

![radio group example with 2 columns, 6 elements per column and radio group example with 3 columns, 6 elements per column](../../../images/RadioGroupExample.jpg)

### Radio vs Dropdown Menu

It can be difficult to decide whether to use a radio or a dropdown menu when users need to choose one option from a list of options. Although there is no strict rule to follow in these cases, we have provided some general guidelines below that you can consider when making this decision.

#### Radios:

* When the number of options is small
* When options require lengthy descriptions
* Radio buttons are always listed vertically.

#### Dropdown menus:

* When the number of options is large, or has the potential to become large
* Options should be of the same nature (e.g. a list of branches, or a list of people).

### Dos and Don'ts

Capitalize a radio button's label.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/RadioCapitalizeDo.jpg" alt="radio text is capitalized">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/RadioCapitalizeDont.jpg" alt="radio text is not capitalized">
		<p class="dont">Don't</p>
	</div>
</div>

Use radios when only one option can be selected.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/RadioDo.jpg" alt="radio group with one option selected">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/RadioDont.jpg" alt="radio group with two options selected">
		<p class="dont">Don't</p>
	</div>
</div>

## Toggle

A toggle is an interface element that, by its activation or deactivation, provokes an immediate action on the screen.

![switch default state](../../../images/SwitchLabelOn.jpg)

### States

A switch can be in one of four different states:

| State | Definition |
| ----- | ---------- |
| ![switch on](../../../images/SwitchOn.jpg) | On |
| ![switch off](../../../images/SwitchOff.jpg) | Off |
| ![switch on disabled](../../../images/SwitchOnDisabled.jpg) | On disabled |
| ![switch off disabled](../../../images/SwitchOffDisabled.jpg) | Off disabled |

### Dos and Don'ts

Capitalize a toggle switch's label.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/SwitchCapitalizeDo.jpg" alt="radio text is capitalized">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/SwitchCapitalizeDont.jpg" alt="radio text is not capitalized">
		<p class="dont">Don't</p>
	</div>
</div>

Use toogles for activation.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/SwitchRadioDo.jpg" alt="switch list one activated">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/SwitchRadioDont.jpg" alt="radio group one activated">
		<p class="dont">Don't</p>
	</div>
</div>

Use checkboxes instead of toggles in confirmation messages.

<div class="dodont">
    <img class="do" src="../../../images/SwitchCheckboxDo.jpg" alt="checkbox to accept terms of use">
    <p class="do">Do</p>
</div>
<div class="dodont">
    <img class="dont" src="../../../images/SwitchCheckboxDont.jpg" alt="switch to accept terms of use">
    <p class="dont">Don't</p>
</div>

### Variations

#### Toggle with data attributes

This type of toggle has labels, title label or other support label, that reflect its value. The label can be positioned at the top, right, bottom, or left, and its value should always reflect the toggle's state. Keeping labels in sync with the toggle's value improves the accessibility for your users.

#### Toggle with icon

Toggle can also have an icon inside the toggle circle to help identify the action. This variation can also have data attributes as the previous variation explains.

![toggle with icon](../../../images/SwitchIcon.jpg)