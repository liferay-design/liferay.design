---
title: "Progress bars"
description: "Progress bar is a progress indicator used to show the completion percentage of a task."
order: 66
---

### Usage

Progress bars can be classified in two groups:

**Indeterminate**: where there are no intermediate states. As long as the process is running the progress bar grows continuously from 0% to 100%. Use it for system processes.

**Determinate**: where there are intermediate states in the completion process. Used to show the user where is inside a process divided in steps. Use it for user processes.

### Sizes

Indeterminate progress bars can be configured in 4 differents sizes

| Size | Usage |
| ---- | ----- |
| Extra small | Height 8px. Use it in small contexts. |
| Default | Height 20px. Use it by default. |

### Variations

#### Progress bar

This is an indeterminate progress bar. This progress bar can be used with or without label.
If you foresee this pattern will be used in a process that can take long time to be completed, a label can be useful to the user. But there is not always the need to show the completion percentage.

![indeterminate progress bar](/images/lexicon-1/progressBarIndeterminate.png)

#### Stripped contextual progress bar

Lexicon provides an alternative to the previous progress bar based on stripes that could help your users to identify better the action progrees.

![indeterminate stripped progress bar](/images/lexicon-1/progressBarIndeterminateStriped.png)

#### Multi step progress bar

A multi step progress bar, also known as wizard, is a determinate progress bar. This progress bar is used in long processes dividing the main task in subtasks that will help your users completing the process.

![determiate progress bar or wizard](/images/lexicon-1/progressBarDeterminate.png)
