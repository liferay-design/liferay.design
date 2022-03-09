---
title: 'Color Picker'
description: 'Color picker lets users select a color from a predefined palette, specify a color via its hexadecimal value, sample a color, and explore color values to create a custom color variation.'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=6053%3A46820'
docLink: 'https://docs.google.com/document/d/1IUGl5VOWh6lqRa1baRoshVcytc8XbqVMkk30vRW4SM8/edit?usp=sharing'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/color-picker.html'
order: 257
draft: false
devStatus: 'Pending'
---

![Color picker interaction](/images/lexicon/Picker-color-custom-panel-animation.gif)

This pattern has different variants, for several use purposes. Please read the [Examples](#examples) section below to know more about them.

### Usage

#### Field

![Color picker field](/images/lexicon/Picker-color-field.jpg)

This field has two key areas: The leftmost, or color square, opens the
predefined palette panel; The rightmost, or field, lets the user input a color's
hexadecimal value.

#### Predefined Palette Panel

![Color picker open at predefined panel](/images/lexicon/Picker-color-panel-predefined.jpg)

Predefined palette panel gives access to a set of predefined colors and the possibility of creating new colors to be defined in the “Custom color panel”

The available colors can be modified via API. Lexicon provides the default color palette shown in the previous image.

The color palette can contain as many colors as you require, but we recommend that you provide at least seven colors.

![3 predefined color picker palette panels with different lengths](/images/lexicon/Picker-color-predefined-colors.jpg)

#### Custom Color Panel

![Color picker with 7 points to describe the different elements. Explained below.](/images/lexicon/Picker-color-panel-custom-desc.jpg)

1. Custom colors label
2. Close button
3. Color cells set
4. Color map panel
5. RGB form set
6. Color HUE slider
7. Hexadecimal text field

Inputs 4, 5, 6 and 7 automatically update each time one of them is modified to reflect the same value.

### Attributes

Predefined palette panel layout and dimensions:

![Predefined panel measures and distances](/images/lexicon/Picker-color-panel-normal-measures.jpg)


Custom panel layout and dimensions:

![Custom color panel measures and distances](/images/lexicon/Picker-color-panel-custom-measures.jpg)



### Examples

The color picker has different variations: restricted, not restricted and simple, being both the custom color and predefined color panels optional.

#### Unrestricted

##### Example 1

It provides a wider possibility for the user to select up to 12 custom colors.
<br/>

![Color picker at its unrestricted version where a predefined color palette is shown along with the custom palette and panel](/images/lexicon/Picker-color-not-restricted.jpg)

##### Example 2

It might be the case there is no predefined color panel
<br/>

![Color picker at its unrestricted version where a custom color palette is shown along with the custom panel](/images/lexicon/Picker-color-not-restricted-02.jpg)

#### Restricted

The restricted variation only provides the predefined color palette values for the user to choose.
<br/>

![Color picker at its simple version where only a predefined color palette is shown](/images/lexicon/Picker-color-restricted.jpg)

#### Simple configuration use

There might be cases where the user only needs to define a color.

<br/>

![Color picker at its restricted version where only a color edition panel is shown](/images/lexicon/Picker-color-simple.jpg)

