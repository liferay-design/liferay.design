---
title: 'Alerts'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/alert'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=6076%3A101'
docLink: 'https://drive.google.com/drive/folders/1s7wf5aBffd4fRs4xb5jyDiSYQ62uqYuV'
description: 'Alerts are used to capture the attention of the user in an intrusive way.'
order: 202
draft: false
---

![info alert colors](/images/lexicon/Alert.png)

### Usage

-   Four different colors are available to define alert status.
-   The status icon and the keyword that defines the message type for the alert must be semi-bold.
-   Alerts can have multiple text lines.
-   Alerts can contain links. These links are defined in primary color.
-   Toast and stripe alerts can be temporary. The delay times for these temporary alerts to disappear are shown below:
    -   10 sec if there are actions associated.
    -   5 sec if there are no actions associated.
    -   In both cases, the time freezes on hover to allow the user more time to interact with the alert message. On mouse out, the countdown continues.

### Types

![alert colors to define each type as the table below describes](/images/lexicon/AlertColors.png)

| Type        | Usage                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error       | The error alert is Red. It indicates that something went wrong after performing an action. (E.g.: The form couldn’t be saved because some data was missing)         |
| Success     | The success alert is Green. It appears when the action is successful. (E.g.: The user was created successfully).                                                    |
| Warning     | The warning alert is Yellow. It lets users know that the action was completed, but there are some issues with it. (E.g. The item was created but with some issues). |
| Information | The information alert is Blue. It provides relevant information while a user carries out a task.                                                                    |

See the [colors page](../../foundations/color) to learn more about color definitions.

### Attributes

![info alert colors with numbers specifying each of its attributes](/images/lexicon/AlertParts.png)

An alert has 4 different attributes:

1. The status icon
2. The type text
3. The description text
4. The close button. This may not appear, depending on the alert's use.

The image below shows the metrics for an alert's design:

![info alert colors with metrics stated to understand how it is built](/images/lexicon/AlertMetrics.png)

### Variations

#### Feedback indicator

Feedback indicator is the minimum expression of an alert to capture the user's attention. As an indicator, you can use a status icon to easily identify the warning message with the element.

![the four alert indicators: success, error, info and warning](/images/lexicon/AlertIndicator.jpg)

Feedback indicators can be used in scenarios such as forms or sidebars  to capture the user's attention in specific places without the need of displaying a more prominent notification.

An example is shown below:

![feedback indicator icon with message showed in a sidebar](/images/lexicon/AlertIndicatorExample.jpg)

If the meaning of the icon is not explicit with text, a tooltip should be shown when the user hovers over the status icon.

![feedback indicator icon with message showed in a sidebar](/images/lexicon/AlertIndicatorTooltipExample.jpg)

#### Toast

As a notification, it is a reminder that does not interrupt the user's operation.

![four different toast alert colors](/images/lexicon/AlertToast.png)

#### Toast stacking behavior

Several toast notifications can be shown at the same time. They appear temporarily at the bottom of the screen and stack vertically with 16px margin in between. If the alert is temporary, it will disappear in 5 seconds.
<br/>

##### Showing

The latest messages appear at the bottom of the notifications block. 
Every Toast appears from a 16px bottom to top  transition and fade in 250ms ease in out following showing/hiding principles.  
<br/>

![toast stacking interaction](/images/lexicon/AlertToastsStacking.gif)
##### Hiding / Closing

After a 5000ms delay every notification disappears with an 200ms ease in fade out  transition.

In case there is any item above the deleted notification, it transitions to fill the space of the deleted item 200ms ease in.

<br/>

![toast stacking interaction](/images/lexicon/AlertToastsStackingRemove.gif)

<br/>

Toasts can have actions associated. Actions are always represented by buttons while navigation is represented by links:

![toast alert examples for each type with a button](/images/lexicon/AlertToastWithButton.png)

<br/>

This type of alert must appear at the bottom left side of the screen. There must be a 24px separation from the left and from the bottom. 

An example is shown below:

![toast alert example. Placed to the top right in the screen and below the header](/images/lexicon/AlertToastExample.png)

#### Embedded

Embedded alerts are meant for use in forms. Usually you will only need to use the information one. Its width depends on the width of the container it is placed in, always respecting the container margins to the content. The close action is not required for embedded alerts.

![four different embedded alert colors](/images/lexicon/AlertEmbedded.png)

An example is shown below:

![embedded alert example. Placed inside a form.](/images/lexicon/AlertEmbeddedExample.png)

#### Stripe

Stripe alerts can be an alternative solution for embedded and toast alerts because they save vertical space. They are usually placed closer to form sections and headers.

![the four stripe alerts: success, error, info and warning](/images/lexicon/AlertStripe.png)

A modal window with an information stripe alert:

![an info stripe alert within a modal windows](/images/lexicon/AlertStripeExample.png)


#### Inline

An inline action doesn’t start a new line as a block action and only takes as much width as necessary. It’s placed hereafter of the alert message. 

An inline action can be used on any Alert variant: Toast, Embedded, or Stripe.

![A stripe Alert using inline actions](./images/alert-20.png)

Using inline actions can cause different alert widths. Therefore, Product Designers need to set a maximum width to keep consistency and avoid overflow problems across their products.  

![Toast Alerts with different widths](./images/alert-21.png)

We recommend using inline actions for messages of two lines maximum, otherwise use block actions. 

![A success Alert message of two lines](./images/alert-22.png)
