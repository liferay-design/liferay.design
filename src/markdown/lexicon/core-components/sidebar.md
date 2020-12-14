---
title: 'Sidebar'
description: 'A vertical panel that appears from the right or the left side of the screen, triggered by a button.'
order: 324
draft: false
productName: 'LIFERAY DXP'
---

Lexicon defines two types of sidebars:

-   **Product Menu:** Lets the user navigate through different applications inside the Control Panel and the Site. See [product menu](../../satellite-components/sidebar/product-menu) for more information.
-   **Info Panel:** An information container to display relevant information that does not fit into the table, list, card, or any other visualization. See [info panel](../../satellite-components/sidebar/infopanel) for more information.

### Interaction

On desktop, the panel pushes the content to the side, while on mobile devices, the panel is displayed over top of the content.

![sidebars position to reflect the layout movement](/images/lexicon/SidebarInfoPanelRespPM-IP-Open.jpg)

-   On viewport sizes smaller than 768px wide, the “Product Menu” slides over the container instead of pushing it to the side.
-   On viewport sizes smaller than 992px wide, the “Info Panel” slides over the container instead of pushing it to the side.

It's important that you trigger the panel in its corresponding hierarchical level (Product Menu or Info Panel) to maintain the proper information architecture.
