---
title: 'Progress Bar'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/progress-bar.html'
description: 'Progress bar indicates the percentage completed of a task.'
order: 323
draft: false
---

![indeterminate progress bar](/images/lexicon/ProgressBar30.jpg)

### Usage

Progress bars are used as a feedback mechanism for system tasks. As long as the process is running, the progress bar grows continuously from 0% to 100%. Use it for system processes.

### States

#### Loading

The progress bar grows in primary color, and the label changes to reflect the completion percentage.

![indeterminate progress bar](/images/lexicon/ProgressBar30.jpg)

#### Warning

The warning state indicates that something happened and interrupted the process.

![indeterminate progress bar](/images/lexicon/ProgressBar70.jpg)

#### Finished

The finished state indicates that the process is completed successfully when the label changes to the success icon.

![indeterminate progress bar](/images/lexicon/ProgressBar100.jpg)

### Dos and Don'ts

| Do                                          | Don't                                                                                                                                                 |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use it for processes such as a file upload. | Never use it to communicate the progress of a user in a certain set of actions. For that you need a [multi step form type](../forms/multi-step-form). |
