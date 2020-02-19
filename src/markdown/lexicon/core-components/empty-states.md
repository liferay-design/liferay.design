---
title: 'Empty States'
description: 'Empty states provide users with feedback on the reasons behind the empty state and what they can do to move out of the empty state.'
order: 245
draft: false
productName: 'LIFERAY DXP'
---

### Usage

#### When should I use the default animations?

There are three default [animations](./../../foundations/animations) available to communicate empty states. The scenario for each empty state and animation is shown below:

**Empty dataset:** There are no elements in the data set at a certain level

![satellite navigating in the space](/images/lexicon/DDisplayEmpty.jpg)

![satellite navigating in the space](/images/lexicon/FormEmpty.jpg)

**Empty search results:** The filters or search results return zero results.

![ navigating in the space](/images/lexicon/DDisplayEmptySearch.jpg)

**Empty state for success:** The user has emptied the dataset for a good cause. For example, all the notifications have been addressed, resulting in a clean state.

![satellite navigating in the space](/images/lexicon/DDisplayEmptySuccess.jpg)

#### When not to use an animation

Animations are used to catch the user's attention, therefore they should only appear once on the screen. In our case, we use these animations in the components that are usually the center of attention and receive the most focus. In less common components, we prefer to avoid the animation and be more discrete.

![satellite navigating in the space](/images/lexicon/EmptyStateNavigation.jpg)

### Attributes

#### Inside a dataset display

![satellite navigating in the space](/images/lexicon/EmptyStateParts.jpg)

These attributes are used for an animation:

1. Animation
2. Text: limited to one line
3. Message: limited, but we recommend to use a maximum of 30 words
    - Do not make messages personal, unless they are preferable for the context.
    - Do not leave one word alone on a line.
    - Do not use "your".
    - Do not use exclamation marks.
    - Use common language and not jargon.
4. Button: secondary button

![satellite navigating in the space](/images/lexicon/EmptyStateMetrics.jpg)

The margin from the container to the top element is 80px.

![satellite navigating in the space](/images/lexicon/DDisplayEmptyMetrics.jpg)

#### Outside a dataset display

![satellite navigating in the space](/images/lexicon/EmptyStateNavigationParts.jpg)

Animations shouldn't be used outside a dataset display. In these cases, use a primary button to catch the user's attention. The primary button has these attributes:

1. Text: limited to one line
2. Message: This follows the same rules as an animation's message.
3. Button: A small primary button

![satellite navigating in the space](/images/lexicon/EmptyStateNavigationMetrics.jpg)
