---
title: 'Alerts'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/alerts.html'
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

#### Toast

![four different toast alert colors](/images/lexicon/AlertToast.png)

This type of alert must appear at the bottom left side of the screen. There must be a 24px separation from the left and from the bottom. If the alert is temporary, it will disappear in 10 seconds.

An example is shown below:

![toast alert example. Placed to the top right in the screen and below the header](/images/lexicon/AlertToastExample.png)

Toasts can have actions associated. Actions are always represented by buttons while navigation is represented by links:

![toast alert examples for each type with a button](/images/lexicon/AlertToastWithButton.png)

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
