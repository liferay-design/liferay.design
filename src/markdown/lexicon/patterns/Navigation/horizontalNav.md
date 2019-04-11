---
title: "Navbar"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/navigation/navbar.html"
description: "A navigation bar, navbar, is a horizontal bar that provides several access points to different parts of a system."
layout: "guide"
weight: 2
---

<div class="page-description">{$page.description}</div>

![navigation bar with 5 entries, first one seleted](../../../images/Navbar.jpg)

### Usage

Navbars are used inside applications to provide navigation to the different sections of the application.

A navbar is always horizontal and can contain one or several entry points, placed from left to right. Place the most important entry points first.

When the number of tabs exceeds the navbar's size, the overflowing tabs are collapsed into the last one. The collapsed tabs are accessible through a dropdown menu. Please see the following example:

* The user uses the dropdown menu from the last tab to select an entry.

![navigation bar with four entries, second one selected. The user interaction is in the last tab, named more, where the dropdown menu is open](../../../images/NavbarSecondSelectedDropMenuOpen.jpg)

* The user has selected an option from the dropdown menu.

![navigation bar with four entries, second one selected. The user interaction is in the last tab where the dropdown menu is open](../../../images/NavbarLastSelected.jpg)

* When the user opens the dropdown menu, the first option appears marked as selected.

![navigation bar with four entries, second one selected. The user interaction is in the last tab where the dropdown menu is open](../../../images/NavbarLastSelectedDropMenuOpen.jpg)

* Once a tab is selected outside the dropdown menu, the dropdown menu collapses.

![navigation bar with four entries, second one selected. The user interaction is in the last tab where the dropdown menu is open](../../../images/NavbarDropdown.jpg)

### Variations

#### Default

The positive navigation bar is defined for Sites. It displays navigation items in a light background with dark text.

![navigation bar with four entries, first one selected](../../../images/NavbarPositive.jpg)

#### Inverted

The negative navigation bar is defined for Admin controls. It displays navigation items in a dark background with light text. It is always placed right below the header.

![navigation bar with four entries, first one selected](../../../images/Navbar.jpg)