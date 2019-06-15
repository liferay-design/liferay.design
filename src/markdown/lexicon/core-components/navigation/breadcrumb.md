---
title: 'Breadcrumb'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/navigation/breadcrumbs.html'
description: 'Breadcrumb is a secondary navigation pattern that identifies the page position inside a hierarchy.'
order: 311
draft: false
---

![breadcrumb without collapsing](/images/lexicon/Breadcrumb.png)
<br/>
<br/>

![breadcrumb collapsing with a dropdown button on the left side](/images/lexicon/BreadcrumbDropdown.png)

### Usage

Breadcrumb works the same way across all viewport sizes. When there isn't enough space on the screen to display all the breadcrumbs, the first levels are collapsed into a dropdown menu. This allows the user to read and navigate to the previous closer levels, and also lets them navigate to other levels easily.

![breadcrumb with a dropdown menu open](/images/lexicon/BreadcrumbDropdownExample.png)

-   The breadcrumb is always horizontal.
-   Long crumbs can be reduced using ellipsis.
-   All crumbs link to their respective navigation level, except the last crumb which is only used to identify the current page.
-   When the crumbs reach overflow on the screen, the elements get collapsed into a dropdown menu as shown below. The order of the elements inside the dropdown menu is reversed.

### Dos and Don'ts

| Do                                                         | Don't                                                |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| Only use it for hierarchical purposes.                     | Do not use it if there is only one navigation level. |
| Use it when navigating through folders in tables or lists. | Do not use it in the first navigation level.         |
|                                                            | Do not use it for cross application navigation.      |
|                                                            | Never use more than one text line.                   |

### Attributes

![breadcrumb metrics](/images/lexicon/BreadcrumbMetrics.png)
