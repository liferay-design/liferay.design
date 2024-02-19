---
title: 'Form Sheet'
description: 'A container that holds a form or display of information. Form sheet helps identify different content blocks.'
order: 250
draft: false
---

This pattern is used in form scenarios, usually to display a form, multiple forms or a combination of single/multiple forms and one or several sheets to display information.

### Layout

There are some main elements created in order to define the form hierarchy and to present different use cases:

The following image represents a complete description of the component. Although in any of the use cases is used as displayed in this image, it helps define its elements.

![Form sheet different parts ](/images/lexicon/FormSheetLayout.jpg)

1. Form sheet header. (only used in multiple-forms scenarios, ex: Commerce).
2. Sheet title.
3. Section.
    * Simple.
    * With accordion.
    * With button.
4. Secondary section (same as a section but without underline).
5. Content of any type. Example: form fields, a table, or a list.
6. Form buttons: there can be several, not just Save and Cancel (the most common).

### Variations

Although the content will normally be a form with a variable number of inputs, as a container, it can also contain a table, list, or text content.

The examples below serve as an example of use cases for the form sheet.

#### Free content

Free content allows using the sheet with any kind of content inside. Users just benefit from the sheet style that provides consistency along the platform.

![Free content composition](/images/lexicon/FormSheetFree.jpg)

A usage example can be found in Web Content.

![Free content composition example](/images/lexicon/FormSheetFreeExample.jpg)

#### Single form

Many of our admin interfaces present single form configuration. For them it is relevant to present a title, an optional description, several sections with content, and the buttons to submit the form.

![Simple form composition](/images/lexicon/FormSheetSingleForm.jpg)

An example in DXP can be found in the user form below “Users & Organizations”.

![Simple form composition example](/images/lexicon/FormSheetSingleFormExample.jpg)

#### Multiple form

There are situations where having multiple forms is a need of the product. This usage is restricted to Commerce due to their product needs.

Multiple forms configuration forces to not have general form buttons per form sheet and a general “save” action is centralized in a single button. This action must check the status and validate each of the form sheet changes.

![Multiple form composition](/images/lexicon/FormSheetMultiForm.jpg)

See Commerce product screen. In this case, you can find free content usage, display relevant product information, and several form sheets, each one to capture different product

![Multiple form composition example](/images/lexicon/FormSheetMultiFormExample.jpg)

#### Dataset content

A common usage of the sheet is to present a dataset display inside. This case benefits of the sheet title and the content free space to place elements such as the dataset display.

![Dataset display composition](/images/lexicon/FormSheetDatasetDisplay.jpg)

This usage can be found in fragments, categories, and tags, among others.

![Dataset display composition example](/images/lexicon/FormSheetDatasetDisplayExample.jpg)

### Attributes

Spacing around the frame and in between sections content is 24px. Each section is spaced from the next one 48px. Visit [Form hierarchy](/lexicon/core-components/forms/forms-hierarchy/) for more information.

![Form sheet margin and padding spacing](/images/lexicon/FormSheetLayout02.jpg)