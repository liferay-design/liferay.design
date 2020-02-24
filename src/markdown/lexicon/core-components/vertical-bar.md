---
title: 'Vertical Bar'
titleLabel: ''
titleLabelLink: ''
description: 'A vertical bar is a flexible container that organizes items vertically.'
order: 360
draft: false
---

## Definition
 
Not only does it have a defined default vertical tab item but also the vertical bar supports other components like borderless buttons and custom variations.

![Light, Dark and a Custom Vertical Bar](/images/lexicon/LightDarkCustomVerticalBar.png)

### Parts
![Parts in a Vertical Bar](/images/lexicon/PartsInAVerticalBar.png)

1. **Tab Item**
2. **Divider**
3. **Panel**

## Visual States
### Default 
![Default state Vertical Bar](/images/lexicon/DefaultStateVerticalBar.png)
### Hover
![Hover state Vertical Bar](/images/lexicon/HoverStateVerticalBar.png)
### Disabled
![Disabled state Vertical Bar](/images/lexicon/DisabledStateVerticalBar.png)
### Active
![Active state Vertical Bar](/images/lexicon/ActiveStateVerticalBar.png)
### Focus
![Focus state Vertical Bar](/images/lexicon/FocusStateVerticalBar.png)
### Stack
Items can be stacked in three areas: top, center and bottom.
![Top, center and bottom areas in a Vertical Bar](/images/lexicon/AreasVerticalBar.png)

Here is an example of top and bottom areas used in a Vertical bar:

![Stack areas in a Vertical Bar](/images/lexicon/TopAndBottomAlignVerticalBar.png)

## Divider
A horizontal line between icons allows you to visually group elements. There can be as many groups as needed.

![Dividers in a Vertical Bar](/images/lexicon/DividerVerticalBar.png)

## Panel
### Color Variations
1. Light
2. Dark
3. Custom

### Alignment and opening modes
The vertical bar could be aligned to the left or right edge and the opening direction of the panel can also be chosen between slide left and slide right.
![Right and left alignment in a Vertical Bar](/images/lexicon/AlignmentVerticalBar.png)

The panel also has two opening modes: push/pull and hover.

#### Push/Pull
1. Panel opening pushes the content gaining space and shrinking the adjacent container.

![The panel pushes the content](/images/lexicon/PushVerticalBar.png)


2. Panel closing , in contrast, pulls the adjacent content releasing its space

![The panel closing pulls the content](/images/lexicon/PullVerticalBar.png)

#### Hover
Instead of push/pull mode, the hover mode allows you to hover the adjacent container in the panel opening.

![Panel opening hovering content](/images/lexicon/HoverVerticalBar.png)


## Interaction

### Case 1: Tab Selected
![Tab selected in a vertical bar](/images/lexicon/TabSelectedVerticalBar.png)

### Case 2: Toggling
![Toggling in a vertical bar](/images/lexicon/TogglingVerticalBar.png)

### Case 3: Item Preselected
![Item preselected in a vertical bar](/images/lexicon/ItemPreselectedVerticalBar.png)

### Mouse
- Click on an item to trigger an action (e.g. toggle panel, navigate to a page, log out.)
- All icon-based items on hover should have a tooltip with 1 or 2 words defining the action they trigger or the object/place they navigate.

### Keyboard
**Tab order**
As a general rule, once the focus is received in a vertical bar, the first Tab item receives focus. Then if the user presses:
- **Tab key**, the focus moves to the next focusable component.
- **Shift + Tab**. the focus moves to the previous focusable component.
- **↓** or **↑**, the focus moves to the next/previous tab item in a wrap from last to first and vice versa.

## Usage
A popular usage is in direct manipulation interfaces such as the content page editor in DX Portal: edit the layout, add fragments, see the hierarchy tree. 
Another example is a document preview where the user has panels with information and metadata of the document in different sections.
Also, a vertical bar can be used  as a primary navigation reference for users.

### Sidebar with Panel
![Page Editor using a vertical bar](/images/lexicon/SidebarWithPanel.png)
