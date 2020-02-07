---
title: 'Info Panel'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/sidebar/info-panel.html'
description: 'An information container that displays additional data for the content displayed in the main visual area.'
order: 522
draft: false
productName: 'LIFERAY DXP'
---

This sidebar always enters the screen from the right side of the viewport. It pushes the container in large viewports and slides over the container in small viewports. It usually shows detailed information for an element, without requiring the user to navigate deeper. See responsive behavior for more details.

Below are two examples for the "Documents and Media" application:

![SideBar Example for Documents and Media, details tab selected](/images/lexicon/SidebarInfoPanelHeight1.jpg)

![SideBar Example for Documents and Media, versions tab selected](/images/lexicon/SidebarInfoPanelHeight2.jpg)

## Components

The components used in the “Info Panel” can vary depending on the application. Following the same example used above, these images show the components used in the “Documents and Media” application:

![Sidebar Info Panel Components information](/images/lexicon/SidebarInfoPanelComponents.jpg)

1. Items carousel
2. File title and file type
3. Content divided by tabs. Information examples:
    - Details tab:
        1. Image
        2. Meta information
        3. Tags
        4. Related assets
    - Versions tab:
        5. Versions list

### Semantics

The tag hierarchy is important in combination with a good content structure of headings, paragraphs and lists.

| File             | Tag                   |
| ---------------- | --------------------- |
| Title            | H1                    |
| Type             | H2                    |

## Sidebar Height

The sidebar adjusts to the maximum height of the viewport:

![sidebar height lot of content to see it in the panel](/images/lexicon/SidebarInfoPanelHeight1.jpg)

![sidebar height few content to see it in the panel](/images/lexicon/SidebarInfoPanelHeight2.jpg)

![sidebar with scroll bar](/images/lexicon/SidebarInfoPanelHeight3.jpg)

## Item Selection and Navigation

### Single item selection

When a single item is selected, the item's information is displayed in the sidebar:

![first card in visualization selected, infor from first card loaded in the info panel](/images/lexicon/SidebarInfoPanelSelectionSingle.jpg)

### Multiple item selection

When multiple items are selected, the information of the item selected last is displayed in the sidebar:

![first, second, seventh cards selected in the visualization and the seventh displayed in the info panel](/images/lexicon/SidebarInfoPanelSelectionMulti1.jpg)

If you deselect one item, the info of the next selected item in the list will be shown in the sidebar:

![from previous selection, hover first card to later unselect it](/images/lexicon/SidebarInfoPanelSelectionMulti2.jpg)

![once unselected the first card, the next one in the buffer is the second one, which is show in the info panel](/images/lexicon/SidebarInfoPanelSelectionMulti3.jpg)

### Item Carousel

When there is more than one item selected, you can switch between each item's information using the previous and next carousel buttons at the top of the panel.

![The info panel has a carousel to navigate through the selected list](/images/lexicon/SidebarInfoPanelCarousel1.jpg)

## Responsive Behavior

The examples below show the behavior of the “Info Panel” on different viewport sizes, based on the established breakpoints.

They also illustrate the grid of card's behavior on each viewport size, as well as the sidebar's behavior when it is visible at the same time as the “Product Menu”.

### No Sidebar Opened

![responsive schema of the card view with the panel closed](/images/lexicon/SidebarInfoPanelRespIPClose.jpg)

### Info Panel opened

On viewport sizes less than 768px in width, the “Info Panel” slides over the container, instead of pushing it.

![responsive schema of the card view with the panel open](/images/lexicon/SidebarInfoPanelRespIPOpen.jpg)
