---
title: "Dataset display"
description: "Relation between management bar and dataset visualization."
order: 17
---

### Description

A dataset display is the combination of a [management bar](../management-bar) with one or many data visualization types. The most common visualization types used are [table](../table), [list](../list-groups), and [card](../cards).

### Usage
This pattern is used when the elements of the visualization require colective management, therefore the management bar becomes important as it has to facilitate the tools needed to work with the data set.

### Empty state

It is important to let the user know what happends in empty stats and let them know what has happend and how to perform actions to move out from that empty state.

In Lexicon we use our [emoticons library](https://github.com/marcoscv-work/liferay-emoticons) as a visual support together with a text message to help the user. It is very important that this message is clear and let the user understand what to do next.

![animations showing how initial empty state works](/images/lexicon-1/datasetDisplayEmptyExample.gif)

### Empty search state

As stated in the previous case, it is important to help the user understanding what happens in empty state. Here is the example for a empty search result.

![animations showing how an empty search works](/images/lexicon-1/datasetDisplayEmptySearch.gif)

### Invidual actions

Individual actions are all those actions that an element has. This actions are always possible to reach from the element it self throw the actions menu. Some of this actions are also placed in the management bar when only one element fromt the dataset is selected. These actions are always represented by a metaphor, , they are buttons with icon. Only those actions that can be easily represented by an icon will be there. Not all possible represented by an icon must be there, only the ones considered as more relevant.

![individual actions displayed both in management bar and from actions menu](/images/lexicon-1/datasetDisplayIndividualActions.png)

### Colective actions

Colective actions are shown in the management bar when more than one element is selected in the dataset. In case there are  colective actions that don't have an icon representation the can be placed in a dropdown triggered from the actions button.

![colective actions displayed both in management bar and from actions menu](/images/lexicon-1/datasetDisplayColectiveActions.png)

### Drag and drop example

The following animations shows how a drag and drop action works in a list view.

![table drag and drop example](/images/lexicon-1/tableDragDrop.gif)

