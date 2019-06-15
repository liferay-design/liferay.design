---
title: "Checkbox, Radio button, Toggle"
description: "Checkboxes, radios and toggles provide users with different selection and activation tools."
order: 32
---

## Checkbox

A checkbox is a component that allows the user selecting something writen in its associatead text label. A list of consecutive checkboxes would allow the user to select multiple things.

### Usage

* Checkboxes should be used when more than one option can be selected.
* Better if they are stacked
* Mutually inclusive options
* Use it for a single binary option as unique entry
* Note that although we have visually defined the checkbox, we use the native checkbox as it is easier to identify by the end user using different web browsers.

### States

#### Default

![checkbox default state](/images/lexicon-1/checkbox.png)

#### Active

![checkbox active state](/images/lexicon-1/checkboxSelected.png)

#### Disable

![checkbox disable state](/images/lexicon-1/checkboxDisabled.png)

## Radio button

A radio button is a component that allows the user selecting something writen in its associatead text label. A list of consecutive radio buttons would allow the user to select just one thing.

### Usage

* As a general rule of thumb, radio buttons should be used when there’s a range of options and only one option can be chosen.
* Better if they are stacked.
* Do not use for a single binary option.
* Note that although we have visually defined the radio button, we use the native radio button as it is easier to identify by the end user using different web browsers.

### States

#### Default

![radio button default state](/images/lexicon-1/radiobuttonOff.png)

#### Active

![radio button active state](/images/lexicon-1/radiobuttonOn.png)

#### Disable

![radio button disable state](/images/lexicon-1/radiobuttonDisabled.png)

### Radio vs Dropdown Menu

It is a common case of doubt when to use radios or a dropdown menu instead when users need to choose one item out of a list of options. There is not a fixed rule for that but we propose this guidelines.

#### Radio buttons:

* When the number of options is small
* When options need a long label to explain the differences of each option.
* Radio buttons are always listed vertically.

#### Dropdown menus:

* When the number of options is large, or has the potential to become large.
* Options should be of the same nature (e.g. a list of branches, or a list of people).


## Toggle

A toogle is an interface element that by its activation or deactivation provokes a inmediate action in the screen.

### Usage

* Use a toggle to present the user mutually exclusive options that have an action that is possible to perceive inmediately.

**Use doubt cases**

* Use a radio button or drop down rather than an on/off switch if the two states in question are separate options.

* In confirmation messages use always a checkbox instead of a toggle as it is a single  binary option.

### States

#### Default

![switch default state](/images/lexicon-1/switchOff.png)

#### Active

![switch active state](/images/lexicon-1/switchOn.png)

#### Disable

![switch disable state](/images/lexicon-1/switchDisabled.png)

### Variations

#### Toggle with data attributes

This type of toggles have labels around as the title label or other support label that make more explicit the switch value. The support label can be either at the top, right, bottom or left and its value should change with the toggle state change as the example shows. All the labels have the interaction that the switch have making the toggle more accessible.

![switch with title and label on the right side, all off them switch off and on the toggle](/images/lexicon-1/switchAttributes.png)

#### Toggle with icon

Toggles can also have an icon inside the toggle circle that helps to identify the action. A toggles with icon can also have data attributes as the previous variation.

![toggle with icon](/images/lexicon-1/switchIcon.png)


