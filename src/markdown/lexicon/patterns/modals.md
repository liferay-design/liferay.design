---
title: "Modals"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/modals.html"
description: "A modal is a secondary window that communicates or provides an action inside the same process."
layout: "guide"
order: 1
---

<div class="page-description">A modal is a secondary window that communicates or provides an action inside the same process.</div>

![modal window over a dark transparent background](/lexicon/images/Modal.jpg)

### Usage

* Modals can be built with different sizes and configurations to best fit the amount of content you have.
* We recommend that you do not use the full-width size, as it appears as though it's a completely new page. If you require this size, we recommend that you consider creating a new page instead of a modal.
* Modals belong to a screen, therefore a modal should not be triggered from another modal window (see the Modal over modal section below).
* When a modal has a footer, place the actions inside and align them to the left. Follow this order for your actions: Primary button (only one), secondary button, and button link.

<table>
    <thead>
        <tr>
            <th>Dos</th>
            <th>Don'ts</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-check do mr-3"><use xlink:href="/vendor/lexicon/icons.svg#check"></use></svg>
                    <span>Use it to draw the user's attention to something that is more important.</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Do not use it for complex cases that require you to display a lot of information or to complete a long form. In these cases, use a new page instead.</span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-check do mr-3"><use xlink:href="/vendor/lexicon/icons.svg#check"></use></svg>
                    <span>Use it for simple content cases.</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Try not to trigger a modal window from another modal window. Modal windows are subordinate to pages.</span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-check do mr-3"><use xlink:href="/vendor/lexicon/icons.svg#check"></use></svg>
                    <span>Use it if you need to interrupt the user flow to display concrete information or capture data from the user.</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Never completely cover the page's information with the modal window.</span>
                </div>
            </td>
        </tr>
    </tbody>
</table>


#### Multiple selection inside a modal

Selecting multiple items in a modal must be done by selecting each desired element through the checkbox. The selection will be finished by clicking in Done button at the modal footer.

![multiple selection from a table inside a modal is done by selecting elements and clicking in Done button to complete the selection](/lexicon/images/Modal-selection-multiple.jpg)

#### Single selection inside a modal

Single selection must be done by clicking directly on the desired element. In this case, the element must not have a Choose or Select button. The modal doesn't have footer as there is no need.

![single selection from a table inside a modal is done by selecting the element directly](/lexicon/images/Modal-selection-single.jpg)

#### Modal over modal

Modal over modal is a not desired situation. Please, try to solve this situation in another way, like using a full page or driving the process to the correct place. In case this happens, make sure to provide a good experience preventing first modal closing by accidental interaction (as an example).

### Size

Modals are always displayed at the center of the screen and can be configured with the sizes shown in the table below:

| Size | Description |
| ---- | ----- |
| Small | 320px |
| Default | 600px |
| Large | 896px wide modal on screen sizes greater than 992px. 600px wide modal on screen sizes between 768px and 992px. |
| Full width | A modal that stretches to fit the browser window, with 45px padding on every side. |

![modal sizes](/lexicon/images/ModalSize.jpg)

### Attributes

![modal window parts](/lexicon/images/ModalParts.jpg)

1. Modal header
    1. Title
    2. Close button
2. Body
    1. Content: form, text, image...
3. Footer
    1. Modal buttons

![modal window metrics](/lexicon/images/ModalMetrics.jpg)

### Configurations

Lexicon allows your modal window to have different configurations related to your needs. These needs vary from case to case and that is why not every modal in the system needs to be equal, but needs to follow certain rules.

#### Header, body and footer

This is the classic composition of a modal window with its three main parts: header, body, and footer.

![modal window over a dark transparent background](/lexicon/images/Modal.jpg)

#### Header and body

This configuration is used when you don't need a footer bar to place your icons.

![modal window over a dark transparent background only header and body](/lexicon/images/ModalFooterless.jpg)

#### Body and Footer

Use this configuration when you just need to show text and buttons to agree or cancel.

![modal window over a dark transparent background only body and footer](/lexicon/images/ModalBodyFooter.jpg)

#### iframe in the body

You can of course add an iframe to a modal body at any time. See the iframe modal body [Clay](https://clayui.com/docs/components/modals.html) section for more information.

#### Modal overlay color

The modal overlay color is a main lighten 8% color with an alpha value of 0.8.

#### Modals for status messages

Modal headers can be configured to use modals as status messages. This solution is proposed to give more emphasis on blocking actions that the use must read and pay careful attention.

Never remove the icon in the title, as it provides the modal with a better user experience for accessibility.

Always use direct and concrete titles.

![info, success, warning, error modal configurations in headers](/lexicon/images/ModalStatus.jpg)

### Mobile

When a modal is viewed on a mobile device, its look and feel transforms to the one shown below to provide a mobile friendly user experience. The modal occupies the whole screen, drawing the user's attention.

![modal window mobile version always full screen](/lexicon/images/ModalMobile.jpg)