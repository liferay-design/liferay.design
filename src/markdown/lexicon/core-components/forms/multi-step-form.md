---
title: "Multi Step Form"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/forms/multi-step-form.html"
description: "A progress bar used to divide the main task into subtasks to help users complete long processes."
layout: "guide"
order: 259
---

![Multi step form](/images/lexicon/MultiStepForm7Steps.jpg)

### Usage

A Multi step form is used when a major or big task has to be divided into smaller task, with the aim of letting the user breath in the process and providing them with a sense of progression.

* Each step can have three different states: Disabled, selected, or done.
* Use it to divide long and/or complicated tasks into smaller chunks that are easier for the user to complete.
* Use it to guide a user through a new or unfamiliar process.
* Use it when there is a specific sequence required to complete the form.
* Make chunks that are not overwhelming.
* Step names must be clear, short, and express the content below them. Use two words maximum.

A multi step form must have a minimum of two steps:

![Multi step form two steps](/images/lexicon/MultiStepForm2Steps.jpg)

We recommend a maximum of seven steps for two key reasons:
* Seven is an easy number of elements to remember
* Seven is a good threshold for touch interaction on mobile devices

![Multi step form](/images/lexicon/MultiStepForm7Steps.jpg)

If you add more than seven steps, the remaining steps should be grouped in a dropdown menu under the sixth element in the multi step form:

![Multi step form two steps](/images/lexicon/MultiStepFormNSteps.jpg)

A Multi step form is most commonly used to guide the user in the process of filling in a complex or long form. Some processes may require you to navigate backwards through the process. For those cases, make sure to set up links in the multi step form elements.


#### Example

![Multi step form example grid](/images/lexicon/MultiStepFormExampleGrid.jpg)

### Attributes

![Multi step form parts](/images/lexicon/MultiStepFormParts.jpg)

1. Done: Checked page
2. Selected: Current page
3. Disabled: Non visited page
4. Steps row: equally divided space between all steps

![Multi step form metrics](/images/lexicon/MultiStepFormMetrics.jpg)

### Mobile

Due to the reduced space on mobile displays, the process bar is condensed to a maximum of five steps. The remaining steps are included in a dropdown that is always placed under the second to last step:

![Multi step form N steps mobile](/images/lexicon/MultiStepFormNStepsMobile.jpg)

#### Example

![Multi step form example mobile](/images/lexicon/MultiStepFormExampleMobile.jpg)
