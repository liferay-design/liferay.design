---
title: 'Progress Bar'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/progress-bars.html'
description: 'Progress bar indicates the percentage completed of a task.'
layout: 'guide'
order: 323
---

Progress bar indicates the percentage completed of a task.

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

| Do | Don't |
| -- | ----- |
| Use it for processes such as a file upload. | Never use it to communicate the progress of a user in a certain set of actions. For that you need a [multi step form type](../forms/multi-step-form). |

<!--
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
                    <span>Use it for processes such as a file upload.</span>
                </div>
            </td>
            <td>
                <div class="d-flex align-items-center">
                    <svg class="lexicon-icon lexicon-icon-times dont mr-3"><use xlink:href="/vendor/lexicon/icons.svg#times"></use></svg>
                    <span>Never use it to communicate the progress of a user in a certain set of actions. For that you need a <a href="https://lexicondesign.io/docs/core-components/forms/multiStepForm.html">multi step form type</a>.</span>
                </div>
            </td>
        </tr>
    </tbody>
</table> -->
