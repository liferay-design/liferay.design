---
title: 'Table'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/table/table.html'
description: 'A table is a specific pattern for comparing datasets in a very direct and analytical way.'
layout: 'guide'
order: 341
---

### Usage

A table view is useful for comparing entries that need exhaustive comparison. Tables display text heavily. If you need to display images, we recommend that you use lists or cards.

A table entry or row doesn't support two different data types in the same column. The is due to potential comparison and sorting problems.

When a table is used together with the management toolbar, the table entries must include a checkbox since the selection and actions are reflected in the management toolbar. See the [dataset display](../../dataset-display) for examples.

![table parts](/images/lexicon/TableParts.jpg)

Tables contain the following attributes (labeled in the image above):

1. Table header
2. Section
3. Row
4. Row interaction

### Table header

Column headers are always left-aligned, 14px, and have regular weight.

![table header](/images/lexicon/TableHeader.jpg)

The table header can have these interactive attributes:

-   Sorting (if available): the column header has an arrow next to it indicating the sort direction: A-z (down arrow) and Z-a (up arrow). The text is underlined on hover state.
-   Drag & drop (if available): the column header shows a drag-icon on hover state.

### Table header attributes

![table header description](/images/lexicon/TableHeaderParts.jpg)

Tables headers contain the following attributes (labeled in the image above):

1. Selected column
2. Sort direction icon
3. Remaining columns

![table header metrics](/images/lexicon/TableHeaderMetrics.jpg)

### Sections

You can use the table group separator to group a series of table entries.

![table group](/images/lexicon/TableViewGroupSeparator.jpg)

### Row states

#### Default state

![table row in default state](/images/lexicon/TableViewDefault.jpg)

#### Hover state

When a user hovers over a table row, quick actions from the actions menu are displayed for the element. A maximum of three actions (represented by icons) can appear.

When the row is selected, the actions do not appear on hover state.

![table row in hover state](/images/lexicon/TableViewHover.jpg)

#### Selected state

![table row in selected state](/images/lexicon/TableViewSelected.jpg)

### Row attributes

![table row in hover state](/images/lexicon/TableViewDefaultParts.jpg)

Table rows contain the following attributes (labeled in the image above):

1. Checkbox
2. Main column text
3. Columns
4. Actions button

![table row in hover state](/images/lexicon/TableViewHoverParts.jpg)

Table rows on hover contain the following attributes (labeled in the image above):

1. Checkbox
2. Main column text
3. Columns
4. Actions button
5. Quick actions displayed on row hover

![table row metrics](/images/lexicon/TableRowMetrics.jpg)

### Row interactions

-   A table entry can have a checkbox, a radio button, or neither of them.
-   You can select a row by using the checkbox or radio button, depending on the selection type in the list. The background is not selectable.
-   You can add links to a row to navigate to other areas.
-   A row can have related actions. If there is only one action for the row that can be represented by an icon, you don't need to use an actions menu. Otherwise, include an actions menu on the right side of the row.
-   Use the main text as an action for the following use cases:
    -	A Folder that navigates to the next level
    -	A File that navigates to its detailed view
-   Never use the row action to view a preview. This is always a secondary action placed inside the row's action menu.
-   If the link drives the user out of the site, please identify visually that this link will open in a new page.
-   A cell entry can include a button as the main action of a table entry. An example could be "Execute".
-   You can drag and drop selected elements into a folder. A click and drag over a non selected element implies selection.

#### Row hover

![table view row hover](/images/lexicon/TableViewRowHover.gif)

### Row Interaction Limitation

Note that the actions menu has a limitation on the hover state. It is not possible to have a row with a button in the default state because it would be impossible to click on it while the actions menu is active in the hover state.

#### Dos and Don'ts

Never hide an action in the table since both static actions in the row and quick actions are not compatible. Quick actions will always hover an action placed in the table row and it will be impossible to reach, as shown for the "Edit" button in the example below.

| Do |
| -- |
| ![first, table view row default, second, table view row hover. There is no action to hover in the row. Correct.](/images/lexicon/TableRowInteractionDo.jpg) | 

| Don't |
| ----- |
| ![first, table view row default, second, table view row hover. There is an action hovered in the row. Incorrect.](/images/lexicon/TableRowInteractionDont.jpg) |

<!--
<div class="dodont">
	<img class="do" src="/images/lexicon/TableRowInteractionDo.jpg" alt="first, table view row default, second, table view row hover. There is no action to hover in the row. Correct.">
	<p class="do">Do</p>
</div>

<div class="dodont">
	<img class="dont" src="/images/lexicon/TableRowInteractionDont.jpg" alt="first, table view row default, second, table view row hover. There is an action hovered in the row. Incorrect.">
	<p class="dont">Don't</p>
</div> -->

### Columns drag and drop

Drag and drop is configurable for tables. This lets the user exchange column positions, excluding the first column. Tables that allow drag and drop provide the action in the column's header.

#### Columns visibility

You can only toggle visibility for columns that work with a management toolbar that implements this feature. All columns can be hidden, except the first one since it is the reference column.

### Columns layout

A table can contain one or more columns, and deciding how to place them properly can be cumbersome. We provide a set of guidelines that you can follow to make this decision easier.

While the main column must always be placed on the leftmost side, the remaining columns can be placed in a couple different layouts:

-   **2 columns**: Place the second column right next to the first column, while respecting the margins.
-   **N # of columns**: Place columns equidistant.

### Content format and alignment

-   Headers must always be left-aligned and semibold.
-   The first column's value must always be semibold.
-   The remaining columns values must be regular font weight.
-   Text values, dates, stickers, labels, and badges must always be left-aligned.
-   Numbers, with or without unit, must be right-aligned.

### Example

![table row in selected state](/images/lexicon/TableExample.jpg)
