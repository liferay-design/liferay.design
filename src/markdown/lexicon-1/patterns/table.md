---
title: "Table"
description: "A table is a specific pattern for comparing datasets in a very direct an analytical way."
order: 70
---

### Usage

A table view is useful for comparing entries among them that need exhaustive comparison. Tables are very heavy in text display, if you need to display images we recommend you to take a look at lists and cards.

A table entry or row don't allow you to display 2 different data types in one same column. The reason behing this are comparison and sorting problems.

When a table is used together with management bar, the table entries must include the checkbox, as the selection and actions are reflected in the management bar.


### Row interactions

* Selecting a row is only possible by using the checkbox.
* Text elements in the row can be configured as links to navigate.
* A row can have none or several actions associated. When there is only one action and it can be represented by an icon, you don't need to make use of the actions menu. Otherwise, use the actions menu on the right side of the row.
* If the action you want to perform of is "Edit", place it as a link in the title to navigate to an edition screen for the element.
* If the link drives the user out of the admin site, please identify visually that this link will open in a new page.
* A cell entry could include a button as main action of a table entry. An example could be "Execute".
* Drag and drop is possible for moving selected elements into a folder. A click and drag over a non selected element implies selection.

### Row states

#### Default state

![table row in default state](/images/lexicon-1/tableRow.png)

#### Selected state

![table row in selected state](/images/lexicon-1/tableRowSelected.png)

#### Hover state

By default, Lexicon does not use the hover state in tables.

![table row hover](/images/lexicon-1/tableRowHover.png)

### Row attributes

![table row attributes](/images/lexicon-1/tableRowAttributes.png)

### Table helpers

#### Stripes

![table stripes](/images/lexicon-1/tableStripes.png)

#### Bordered

![table bordered](/images/lexicon-1/tableBordered.png)

#### Hover

In the following example you can see how hover works even with a selected row.

![table hover case](/images/lexicon-1/tableHoverExample.gif)

### Mobile

Due to the complexity of a table in mobile, Lexicon does not define this pattern for mobile viewport size.

### Example of use

Due to the complexity of a table in mobile, Lexicon does not define this pattern for mobile viewport size.

![table example](/images/lexicon-1/tableExample.png)




