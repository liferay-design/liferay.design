---
title: 'Inline Edit Table'
devStatus: 'Pending'
docLink: 'https://drive.google.com/drive/folders/1ptTLH-6aHMxuKuN4aHBSRGfUGg_A-RfH?usp=sharing'
description: 'A table variation that lets users modify certain values of the entry without going to the detail page.'
order: 342
draft: false
---

![table inline edition, view mode](/images/lexicon/TableInlineEdition.jpg)

### Usage

-   Use an inline edit table when you need to list information that may require quick editing. This pattern is used for cases such as commerce where editing is often required.
-   The "Edit" button is always visible since its the main feature of the inline edit table.
-   Each row has two different modes:
    _ View mode
    _ Edit mode
-   This table doesn't have a responsive version for mobile devices.

### Row modes

#### View mode

-   It is the default status of the row in which the table data is not editable.
-   To enter edit mode, click the Edit button.
-   More actions are available under the actions button. If an element has an edit screen, name it "Advanced edit."

![table inline edition row view configuration](/images/lexicon/TableInlineEditRowView.jpg)

#### Edit mode

-   In this mode, if an entry is editable, it is transformed into one of the following input fields when it's clicked: text field, numeric field, select, etc.
-   This mode has two different actions:
    _ Save: saves the changes and enters view mode.
    _ Cancel: discards the changes and enters view mode.

![table inline edition row edit configuration](/images/lexicon/TableInlineEditRowEdit.jpg)

### Example

![table inline edition with first row in edition mode and first field on focus](/images/lexicon/TableInlineEditionFocus.jpg)

### Attributes

![table row attributes](/images/lexicon/TableInlineEditRowDesc.jpg)

An editable row can contain the same elements as a standard table row. An inline editable table includes these attributes:

1. Checkbox.
2. Main column text.
3. Other columns, in which different components may appear.
4. Edit button.
5. Actions button.

The minimum distance between two columns is 24px.

![table row metrics](/images/lexicon/TableInlineEditRowMetrics1.jpg)
