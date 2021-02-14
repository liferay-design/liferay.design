---
title: 'Breadcrumb'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/breadcrumb.html'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=6020%3A22686'
docLink: 'https://drive.google.com/drive/folders/0B7JYaGe4TecDV2szTEdwNkg0a3M?usp=sharing'
description: 'Breadcrumb is a secondary navigation pattern that identifies the page position inside a hierarchy.'
order: 311
draft: false
---

![breadcrumb without collapsing](/images/lexicon/navigation-1.png)
<br/>
<br/>

![breadcrumb collapsing with a dropdown button on the left side](/images/lexicon/navigation-2.png)

### Usage

Breadcrumb works the same way across all viewport sizes. When there isn't enough space on the screen to display all the breadcrumbs, the first levels are collapsed into a dropdown menu. This allows the user to read and navigate to the previous closer levels, and also lets them navigate to other levels easily.

![breadcrumb with a dropdown menu open](/images/lexicon/navigation-3.png)

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


