---
title: 'Progress Bar'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/progress-bar.html'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=6033%3A3026'
docLink: 'https://drive.google.com/drive/folders/1-fQL2vWgWiijIj7wpUFiW3ffmT3zJru3?usp=sharing'
description: 'Progress bar indicates the percentage completed of a task.'
order: 319
draft: false
---

![indeterminate progress bar](./progress-bar-1.png)

### Usage

Progress bars are used as a feedback mechanism for system tasks. As long as the process is running, the progress bar grows continuously from 0% to 100%. Use it for system processes.

### States

#### Loading

The progress bar grows in primary color, and the label changes to reflect the completion percentage.

![indeterminate progress bar](./progress-bar-1.png)

#### Warning

The warning state indicates that something happened and interrupted the process.

![indeterminate progress bar](./progress-bar-2.png)

#### Finished

The finished state indicates that the process is completed successfully when the label changes to the success icon.

![indeterminate progress bar](./progress-bar-3.png)

### Dos and Don'ts

| Do                                          | Don't                                                                                                                                                 |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use it for processes such as a file upload. | Never use it to communicate the progress of a user in a certain set of actions. For that you need a [multi step form type](../forms/multi-step-form). |
