---
title: "Management bar"
description: "Management Bar is an extension of Navbar. Combine different management-bar components to create a toolbar that fits your needs."
order: 57
---

![state one of the management bar](/images/lexicon-1/managementBarState1.png)

### Usage

The Management Bar is always part of a bigger structure and works along with other data management patterns like tables, lists or cards, and its functionality is directly related to them.
The Management Bar has two main states:

#### State 1

It is the default state.

It displays tools focused on filtering, sorting and data visualization.

![state one of the management bar](/images/lexicon-1/managementBarState1.png)

#### State 2

It displays contextual tools associated to specific items selected. It is only activated when one or more items from the visualization are selected.

The background color and the way to show the icons of the bar in this state changes to differentiate from the default state and establish a visual relation with other forms of showing this tools.

![state two of the management bar](/images/lexicon-1/managementBarState2.png)

The tools shown in the management bar in each state are always related to the type of data displayed and type of visualization. The Management Bar never shows elements that not are required in a specific context.

### Requirements

* The Management Bar has to be fixed on the header of the page so it can be always visible during the vertical scroll.
* On the default state of the bar, filter and order tools have to be always on the left side and visualization and information tools on the right.
* On the second state, the tools for selected items appear always on the right side of the bar and vary according to the items selected.
* Tools shown in the Management Bar are only the ones that the type of data displayed requires it in a specific context.
* A user can only sort and filter by those elements that are visible in the current visualization.

### Example of use

![state one of the management bar](/images/lexicon-1/managementBarExample.gif)

### Attributes

![management bar attributes](/images/lexicon-1/mangementBarAttributes.png)
