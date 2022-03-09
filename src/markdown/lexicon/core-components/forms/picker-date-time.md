---
title: 'Date & Time Pickers'
description: 'Date and Time pickers let users select a date and time for a form.'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=6020%3A9328'
docLink: 'https://drive.google.com/drive/folders/1-7JQa8D2X2gbtDx-2q0IMWwwV73wSeTE?usp=sharing'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/date-picker.html'
order: 258
draft: false
devStatus: 'Pending'
---

**Note:** These components are meant to cover desktop browser needs. The OS native component must be used on mobile devices.

This page describes the date and time patterns separately and then describes a
pattern that combines the two functionalities:

-   [Date Picker](#date-picker)
-   [Time Picker](#time-picker)
-   [Date and Time Picker](#date-and-time-picker)

## Date Picker

![Date picker](/images/lexicon/Picker-date.jpg)

### Usage

![Date picker with 6 points to describe the different elements. Explained below.](/images/lexicon/Picker-date-desc.jpg)

1. Month selector: provides the twelve months of the year
2. Year selector: provides the available years. This needs to be open so users can select past, present, future, or all dates.
3. Back arrow button: selects the previous month on the calendar
    - When displaying the first month of the year (eg: January 2019), this selects the last month of the previous year (eg: December 2018)
4. Dot button: selects current date
5. Next arrow button: selects the next month on the calendar
    - When displaying the last month of the year (eg: December 2019), this selects the first month of the next year (eg: January 2020)
6. Days panel
    - Note that the abbreviated week day labels are not interactive
    - The day number must be interactive so the user can select the date

### Calendar day states

#### Default state

The default state displays the day's number, indicating that the user can select it.

![Date picker default day button](/images/lexicon/Picker-date-day-default.jpg)

#### Hover state

When the user hovers an enabled day, a light grey circle is displayed behind it.

![Date picker default day button](/images/lexicon/Picker-date-day-hover.jpg)

#### Active state

A selected day is highlighted by a blue circle.

![Date picker default day button](/images/lexicon/Picker-date-day-active.jpg)

#### Disable state

A disabled day is greyed out, indicating that the user can not select it.

![Date picker default day button](/images/lexicon/Picker-date-day-disabled.jpg)

### Attributes

Date picker layout and dimensions:

![Date picker measures and distances](/images/lexicon/Picker-date-measures.jpg)

### Extension Points

Lexicon provides a recommended area for extension points that is placed right at the end of the calendar panel. If, however, you would like to provide a double calendar, we recommend that you place the calendars side by side, rather than stack them vertically.

![Date picker extension point area right at the end of the panel](/images/lexicon/Picker-date-extension.jpg)

## Time Picker

![Time picker](/images/lexicon/Picker-time.jpg)

The time picker lets a user select a time from a range of hours and minutes.

### Usage

You can specify the time zone in the text label on the right side of the time picker.

![Time picker](/images/lexicon/Picker-time-zone.jpg)

## Date and Time Picker

The time picker is a common extension point when building a date picker, as it combines two related functionalities in the same component.

![time picker](/images/lexicon/Picker-date-time.jpg)
