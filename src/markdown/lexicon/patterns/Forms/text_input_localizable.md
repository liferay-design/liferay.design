---
title: "Text Input Localizable"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/forms/text-input-localizable.html"
description: "A text input variation used in fields that can be translated into multiple languages."
layout: "guide"
order: 4
---



### Layout

This component contains two elements:

* The input field: a text input, text area, or text input group (only specific cases).
* The localization button: displays a dropdown menu to select a language.

![input localizable](../../../images/InputLocalizable.jpg)

The dropdown menu must always contain these items in each entry:
* Country flag
* ISO 639-1 code
* Status:
    * Default: the default language. It is always the first in the list.
    * Translated: the user has provided a text that differs from the default input text.
    * Not translated: the input text does not differ from the original text.

![input localizable with dropdown open](../../../images/InputLocalizableOpen.jpg)

### Interaction

The localization button only changes field content language. It does not change the title label or the help text language. The help text displays the default language text as a hint to the user.

This field is usually placed in a form with other localizable fields. Selecting a language in one of the localizable fields changes the language for all other fields.

### Attributes

![input localizable parts](../../../images/InputLocalizableParts.jpg)

1. Input field
2. Localizable button

![input localizable metrics](../../../images/InputLocalizableMetrics.jpg)


### Variations

#### Text area localizable

![input localizable](../../../images/InputLocalizableArea.jpg)

#### Text input group localizable

A very common case in Liferay Portal is to have to translate fields for URLs. This field is a clear combination of an input group with a localizable field.

![input localizable](../../../images/InputLocalizableGroupUrl.jpg)



