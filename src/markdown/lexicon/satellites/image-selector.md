---
title: 'Image Selector'
description: 'The image selector lets the user select images from a grid, prioritizing over other metadata.'
order: 502
draft: false
devStatus: 'Pending'
productName: 'LIFERAY DXP'
---

### Usage

-   Only use this pattern for image selection.
-   The elements placed in the grid must be an image type that can support a thumbnail.
-   Simple and multiple selection must be possible.
    -   Selecting a single image closes the image selector modal.
    -   Multiple selection lets the user select as many images as they need. In this case, the modal is closed with the “Done” button.
-   Hovering an image displays its title. Long titles have ellipsis in the middle, while still displaying the end of the title so the user can quickly identify it.
    -   Image titles are always shown on touch interfaces.

### Image status

#### Default

![image default state](/images/lexicon/ImageSelectorImageDefault.jpg)

#### Hover

![image hover state](/images/lexicon/ImageSelectorImageHover.jpg)

#### Selected

![image hover state](/images/lexicon/ImageSelectorImageSelected.jpg)

Image selector example on desktop:

![image selector example in desktop size](/images/lexicon/ImageSelector.jpg)

On mobile devices, since there is no hover state, images must always display their title.

![image selector example in mobile size](/images/lexicon/ImageSelectorMobile.jpg)
