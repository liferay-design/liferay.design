---
title: 'Bar Chart'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/charts.html'
description: 'A graphical data representation based on rectangle bars with proportional lengths and heights.'
order: 224
draft: false
---

![Bar Chart vertical grouped, 3 groups and 4 different datasets](/images/lexicon/chart-bar-grouped-vertical.png)

### Color use

You can use colors in different ways in Bar Charts, but there are two main use cases in Lexicon:

#### Situation 1: Non-grouped data

When data is not grouped, all bars in the chart must have the same color.
Color adds another layer of information that's not required for non-grouped data and only serves to confuse the user. Since only one color is used, a legend is not required.

![Bar Chart horizontal non-grouped](/images/lexicon/chart-bar-horizontal.png)

#### Situation 2: Grouped data

Grouping data introduces an extra level of complexity to the chart. To visually separate the groups, different colors must be used for each group. All groups must have their bars in the same order, so it is easy to map the progression of a single item.
Since there are many colors use to represent the group-data, a color legend is required to identify the groups.

![Bar Chart vertical grouped, 3 groups and 4 different datasets](/images/lexicon/chart-bar-grouped-vertical.png)

### States for non-grouped Bar Chart

#### Single bar interaction

![Bar Chart vertical grouped, 3 groups and 4 different datasets](/images/lexicon/chart-bar-horizontal-sel.png)

### States for grouped bar chart

There are three different hover/focus states that depend on the user's interaction with the chart element:

#### Single bar interaction

![Bar Chart vertical grouped, 3 groups and 4 different datasets, 1 bar selected](/images/lexicon/chart-bar-g-v-bar-sel.png)

#### Legend item interaction

![Bar Chart vertical grouped, 3 groups and 4 different datasets, 1 legend item selected](/images/lexicon/chart-bar-g-v-legend-sel.png)

#### Axis legend interaction

![Bar Chart vertical grouped, 3 groups and 4 different datasets, 1 axis item in X-axis selected](/images/lexicon/chart-bar-g-v-axis-sel.png)
