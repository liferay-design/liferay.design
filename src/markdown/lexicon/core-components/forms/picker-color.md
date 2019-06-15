---
title: 'Color Picker'
description: 'Color picker lets users select a color from a predefined palette, specify a color via its hexadecimal value, sample a color, and explore color values to create a custom color variation.'
order: 257
draft: false
devStatus: 'PENDING'
---

![Color picker field](/images/lexicon/Picker-color-field.jpg)

This pattern offers two variations, depending on the required usage. Please see the [Variations](#variations) section below for more information.

### Usage

#### Field

![Color picker field](/images/lexicon/Picker-color-field.jpg)

This field has two key areas: The leftmost, or color square, opens the
predefined palette panel; The rightmost, or field, lets the user input a color's
hexadecimal value.

#### Predefined Palette Panel

![Color picker open at predefined panel](/images/lexicon/Picker-color-panel-predefined.jpg)

The predefined palette panel provides a set of predefined colors, as well as lets users create new colors to access in the "Custom color panel."

The available colors can be modified via API. Lexicon provides the default color palette shown in the previous image.

The color palette can contain as many colors as you require, but we recommend that you provide at least seven colors.

![3 predefined color picker palette panels with different lengths](/images/lexicon/Picker-color-predefined-colors.jpg)

#### Custom Color Panel

![Color picker with 7 points to describe the different elements. Explained below.](/images/lexicon/Picker-color-panel-custom-desc.jpg)

1. Custom colors label
2. Color drop button
    - The sampled color is displayed in the predefined palette panel
    - Note that the sampled color is not preselected in the predefined palette panel
3. Color cells set
4. Color definition box
5. RGB form set
6. Color HUE slider
7. Hexadecimal text field

Inputs 4, 5, 6 and 7 automatically update each time one of them is modified to reflect the same value.

### Attributes

Predefined palette panel layout and dimensions:

![Predefined palette panel measures and distances](/images/lexicon/Picker-color-panel-custom-measures.jpg)

Custom panel layout and dimensions:

![Custom panel measures and distances](/images/lexicon/Picker-color-panel-normal-measures.jpg)

### Variations

#### Unrestricted

The unrestricted variation provides the complete set of color selection options for the user.

![Color picker at its restricted version where only a predefined color palette is shown](/images/lexicon/Picker-color-not-restricted.jpg)

#### Restricted

The restricted variation only provides the predefined color palette values for the user to choose.

![Color picker at its restricted version where only a predefined color palette is shown](/images/lexicon/Picker-color-restricted.jpg)
