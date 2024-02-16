---
title: 'Input'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/input'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=6033%3A2985'
docLink: 'https://docs.google.com/document/d/1GVo166ZGrxQF5YgoYqBz4t9eHWKaBUcbYPAPb3ggIX8/edit'
description: 'A description of the different text input types, including usage and validation states.'
order: 265
draft: false
---

## Text

![default empty state](/images/lexicon/Input.jpg)
<br/>

A text field lets users enter data into the system to be processed.

### Usage

Text Inputs can have help text. Lexicon provides three different mechanisms to provide help:

-   Help text: This is placed below the input box. You can use it to help the user understand the validation rules that apply to the input. 
-   Help icon: Text inside a popover triggered by a help icon next to the title. Use this when you only want to provide help text if the user requires it.
-   Placeholder: A text in the field entry area. This mechanism is not recommended since users can misinterpret it as final text. If you want to use a placeholder, do not write help text, provide an example instead.

![Input with Placeholder: Placeholder text 'janedoe@email.com' inside the input](/images/lexicon/InputPlaceholder.jpg)

Text Inputs can also have help text placed right below the input box.

![Input with help text: Email field with a help text 'Use an uppercase and a letter,'](/images/lexicon/InputHelpText.jpg)

### States

#### Default

![Default Input: Ready for user interaction with a neutral appearance](/images/lexicon/InputDefault.jpg)

#### Active Focused

![Active Focused Input: Blue background with focus ring signals an editable state for user input](/images/lexicon/InputSimpleFocus.jpg)

#### Disabled

![Disabled Input: Grayed-out box signaling non-interactivity](/images/lexicon/InputDisabled.jpg)

#### Read only

![Read-only Input: White background indicates non-editable state](/images/lexicon/InputReadOnly.jpg)

### Sizes

#### Small

![Small Input](/images/lexicon/InputSizeSmall.jpg)

#### Regular

![Regular Input](/images/lexicon/InputSizeRegular.jpg)

#### Large

![Large Input](/images/lexicon/InputSizeLarge.jpg)

### Validations

The validation text for a field is placed right below the input box, just before the help text. This places the error right next to the offending field so the user is not confused about what field failed validation.

#### Success

![Success Input: Light green background and green borders indicate a successful state](/images/lexicon/InputSuccess.jpg)

#### Warning

![Warning Input: Light orange background and orange borders signify a warning state](/images/lexicon/InputWarning.jpg)

#### Error

![Error Input: Red background and borders signify an error state](/images/lexicon/InputError.jpg)

### Attributes

![Input image with numbers 1 to 5 pointing Input's parts](/images/lexicon/InputParts.jpg)

A Text Input, at the very least, contains these elements:

1. Label
2. Text field box
3. Placeholder
4. Status message
5. Help text

## Text area

![Text Area with Help Text: Default state, featuring a resizable handler and help text displaying '93/150 characters' for user guidance](/images/lexicon/InputTextArea.jpg)
<br/>

A text area is similar to a Text Input, however, it supports several lines of text. For example, a user can use a text area to enter long product descriptions.

### Usage

-   The user can resize the height of the text area to adjust the amount of visible text..
-   The Text Area variant has the same states and validation states as a Text Input.
-   Text Areas can have help text. They follow the same rules of Text Inputs.
-   A Text Area can be configured to expand on input change.
    -   It requires a height of 44px, like a Text Input.
    -   The Text Area has a mid-height value set to 88px, equivalent to three lines of text.
    -   The Text Area's max-height value is 200px. From mid-height to max-height, the text area grows in height. When it reaches the maximum, the text area stops growing, and the vertical scroll bar becomes available.
    -   We recommend that you configure the min-height with the same value as the mid-height since three lines are the recommended text size.
