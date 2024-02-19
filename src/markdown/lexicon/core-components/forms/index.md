---
title: 'Forms'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/form'
docLink: 'https://drive.google.com/drive/folders/1jIlg4BZ_hfMU-WvET4wXxYGk0tkS_UZm'
description: 'Forms obtain user data and transmit it to the system to either store the data, produce an action, or both.'
order: 249
draft: false
---

### Parts

![lexicon default](/images/lexicon/FormParts.jpg)

1. Title (Required)
2. Description (Not required but very useful). It should describe the form usage.
3. Form Elements:
    1. Text input. See [text input](./text-input) for more information.
    2. Text input localizable. See [text input localizable](./text-input-localizable) for more information.
    3. Selector. See [selectors](./selector) for more information.
    4. Radio button. See [checkbox, radio, and toggle](./radio-check-toggle) for more information
    5. Checkbox. See [checkbox, radio, and toggle](./radio-check-toggle) for more information.
4. Section. Sections are identified with a 14px size primary text that is always in uppercase letters. Some forms may require a full width underline for a better visual separation of content. This is usually used in configuration forms.
5. Buttons. Visit Actions to learn how buttons are used in forms.

### Layout

Forms can occupy one or two columns. If your form is divided into several sections that are stacked, it's best to keep the internal layout between sections. This can affect the experience of filling the whole form.
When adding columns, remember that the reading direction for each column is left to right and top to bottom. The user reads column one first, then they read column two.

#### One single form

![lexicon default](/images/lexicon/Form1Column.jpg)

#### Two columns form

![lexicon default](/images/lexicon/Form2Columns.jpg)

### Attributes

#### Spacing

It's very important to maintain the distance between form elements, such as texts, fields, sections, etc. Please see our [hierarchy](./forms-hierarchy) page for guidance.

As a general rule of thumb, use the following distances for spacing between form elements:

| Description                                                    | Desktop | Mobile |
| -------------------------------------------------------------- | ------- | ------ |
| Form padding                                                   | 24px    | 16px   |
| Horizontal                                                     |         |        |
| - Between consecutive components                               | 16px    | 16px   |
| - Between non-consecutive components                           | 24px    | 24px   |
| Vertical                                                       |         |        |
| - Between consecutive components: title, fields, section...    | 24px    | 16px   |
| - Between form title or title + description for next component | 48px    | 32px   |

#### Title

![form title style and measures](/images/lexicon/FormTitle.jpg)

#### Sections

First level sections can be collapsible. Note that second level sections, however, can never be collapsible.

![form sections style and measures](/images/lexicon/FormSections.jpg)

The layout must wrap long section titles.

![form sections style and measures for long titles](/images/lexicon/FormSectionsLong.jpg)

#### Paragraph

![form paragraph style and measures](/images/lexicon/FormParagraph.jpg)
