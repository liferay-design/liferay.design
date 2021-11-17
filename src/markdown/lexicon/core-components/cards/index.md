---
title: 'Cards'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/card.html'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=6026%3A914'
docLink: 'https://docs.google.com/document/d/13n2SseXDxuh4TbGJohRWVrXiXQ9NRsTz5Uyy6GE5VFc/edit?usp=sharing'
description: 'Cards are a specific form of data visualization focused mainly on displaying images.'
order: 210
draft: false
---

![card with image default state](./images/cards-1.png)

### Usage

A card is a pattern that relies heavily on imagery, therefore, we recommend that you only use cards if you have images associated with your content. A practical use case for this could be your users database or an image library.

Cards are meant for a light comparison of information rather than an exhaustive comparison. If you have exhaustive information to compare, which doesn't contain images, use a table instead.

Cards can have various configurations. We provide a flexible card layout that is fully customizable, so you can create the UI you need. See the example configurations throughout this page to get inspired.

### Card interaction

-   A card can have a checkbox, a radio button, or neither of them.
-   You can select a card by using the checkbox or radio button or the image area.
-   The main text in the card can be used for navigation:
    _ When used in a Folder card, it navigates to the next level.
    _ When used in a File, Image, or User card, it navigates to its detail view.
    _ Never use the navigation to view a preview. This is always a secondary action placed inside the action menu.
    _ If the link drives the user out of the site, please identify visually that this link will open in a new page.
-   When the card title is hovered a tooltip has to appear showing the entire element title.

### Layout

By providing a flexible layout, Lexicon gives you a wider range of possible configurations for your card. You can adapt the layout to suite your needs, so it just contain the elements you require.

A card contains the following elements:

-   The image area: The main element in this pattern. It has a 16:9 aspect ratio.
-   Checkbox or radio: This is useful when working together as a visualization type with a management bar.
-   Sticker or User image: This is useful to identify the file type or the owner.
-   An information area
    _ Informative text: This contains relevant information, such as the description.
    _ Actions menu: This contains actions associated with the card.

The only required element for a card is the image. Everything else can be removed.

### States

#### Default

![card with image default state](./images/cards-1.png)

#### Hover

![card with image hover state, blue border](./images/cards-2.png)

#### Active

![card with image selected state, blue border and check marked](./images/cards-3.png)

#### Empty

![card with image empty state, no image, gray background grid](./images/cards-4.png)

### Attributes

![7 possible parts of a card](./images/cards-5.png)

1. Checkbox
2. Image
3. Sticker: file type
4. Title
5. Actions button
6. Detail or short descriptive text
7. Label: status identifier

### Sections

Card sections organize content into separate divisions by a certain categorization or typology.

![card section](/images/lexicon/CardViewGroupSeparator.png)

### Examples

See the [dataset template](./../../Templates/dataset-template) for a practical use case of cards.
