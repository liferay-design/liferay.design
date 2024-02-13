---
title: 'Input Localizable'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/localized-input'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=6033%3A2985'
docLink: 'https://docs.google.com/document/d/1rKn34BR_95gEbeG1cqdgWsl1h6buo1MPdG9Jrgz_xU4/edit?usp=sharing'
description: 'An Input variation used in fields that can be translated into multiple languages.'
order: 267
draft: false
---

![input localizable](/images/lexicon/InputLocalizable.jpg)

### Layout

This component contains two elements:

-   Input: a Text Input, Text Area, or Input Group (only specific cases).
-   Localization Button: displays a Dropdown Menu to select a language.

![input localizable](/images/lexicon/InputLocalizable.jpg)

The Dropdown Menu must always contain these items in each entry:

-   Country flag
-   ISO 639-1 code
-   Status:
    -   Default: the default language. It is always the first in the list.
    -   Translated: the user has provided a text that differs from the default input text.
    -   Not translated: the input text does not differ from the original text.

![input localizable with dropdown open](/images/lexicon/InputLocalizableOpen.jpg)

### Interaction

The Localization Button only changes field content language. It does not change the title label or the help text language. The help text displays the default language text as a hint to the user.

This field is usually placed in a form with other localizable fields. Selecting a language in one of the localizable fields changes the language for all other fields.

### Attributes

![input localizable parts](/images/lexicon/InputLocalizableParts.jpg)

1. Input 
2. Localizable button

![input localizable metrics](/images/lexicon/InputLocalizableMetrics.jpg)

### Variations

#### Text Area localizable

![input localizable](/images/lexicon/InputLocalizableArea.jpg)

#### Input group localizable

A very common case in Liferay Portal is translating URL fields. This field is a clear combination of an input group and a localizable field.

![input localizable](/images/lexicon/InputLocalizableGroupUrl.jpg)
