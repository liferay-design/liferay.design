---
title: 'Text Input'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/input'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=6033%3A2985'
docLink: 'https://docs.google.com/document/d/1GVo166ZGrxQF5YgoYqBz4t9eHWKaBUcbYPAPb3ggIX8/edit'
description: 'A description of the different text input types, including usage and validation states.'
order: 265
draft: false
---

## Text Field

![default empty state](/images/lexicon/Input.jpg)
<br/>

A text field lets users enter data into the system to be processed.

### Usage

Text fields can have help text. Lexicon provides two different mechanisms to provide help:

-   Help text below the field: Use it if you want to make your help text very clear to the user.
-   Help text inside a popover triggered from a help icon next to the title: Use it when you only want to provide help text if the user requires help. Placeholder text is not recommended since users can misinterpret it as final text. If you must use a placeholder, do not write help text in it. Just provide a text example.

### States

#### Default

Text fields can be simple:

![default empty state](/images/lexicon/Input.jpg)

Although they can include placeholder text, we don't recommend it since users can misinterpret it as final content.

![default empty state](/images/lexicon/Inputplaceholder.jpg)

Text fields can also have help text placed right below the text field.

![default empty state](/images/lexicon/InputHelpText.jpg)

#### Active

![default active state](/images/lexicon/InputSimpleFocus.jpg)

#### Disabled

![default disabled state](/images/lexicon/InputDisabled.jpg)

#### Read only

![default disabled state](/images/lexicon/InputReadOnly.jpg)

### Validations

Validation text for a field is placed right below the field box, just before the help text. This places the error right next to the offending field, so there is no confusion for the user as to what field failed validation.

#### Success

![default success state](/images/lexicon/InputSuccess.jpg)

#### Warning

![default warning state](/images/lexicon/InputWarning.jpg)

#### Error

![default error state](/images/lexicon/InputError.jpg)

![default error state](/images/lexicon/InputHelpTextError.jpg)

### Attributes

![input field parts](/images/lexicon/InputParts.jpg)

A text field, at the very least, contains these elements:

1. Label
2. Text field box
3. Placeholder
4. Status message
5. Help text

![input field metrics without error](/images/lexicon/InputMetrics.jpg)
![input field metrics with error](/images/lexicon/InputErrorMetrics.jpg)

## Text area

![text area](/images/lexicon/InputTextArea.jpg)

![text area](/images/lexicon/InputTextAreaHelpText.jpg)
<br/>

A text area is similar to a text field input, however, it supports several lines of text. For example, a user can use a text area to enter long product descriptions.

### Usage

-   A text area's height can be resized by the user, allowing them to see more or less text as they please.
-   A text area has the same states and validation states as a text field.
-   Text areas can have help text. Lexicon provides two different mechanisms to provide help:
    -   Help text below the field: Use it if you want to make your help text very clear to the user.
    -   Help text inside a popover triggered from a help icon next to the title: Use it when you only want to provide help text if the user requires help.
-   Placeholder text is not recommended since users can misinterpret it as final text. If you must use a placeholder, do not write help text in it. Just provide a text example.
-   A text area can be configured to expand on input change.
    -   It requires a min-height of 44px like a text field.
    -   The text area has a mid-height value set to 88px, equivalent to three lines of text.
    -   The text area has a max-height value set to 200px. From mid-height to max-height, the text area will grow in height. When it reaches the maximum, the text area stops growing and the vertical scroll bar becomes available.
    -   We recommend that you configure the min-height with the same value as the mid-height, since three lines is the recommendation for the text size.
