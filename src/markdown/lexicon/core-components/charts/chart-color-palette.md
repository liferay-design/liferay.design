---
title: 'Colors'
description: 'A specific color palette with the aim to provide the best charts user experience.'
layout: 'guide'
order: 222
---

A specific color palette with the aim to provide the best charts user experience.

Colors must be the last choice you make to differentiate chart elements. Lexicon provides a specific color order and combinations and rules to follow when you create a new chart component, including patterns, dash lines, and shapes.

### Flat Colors

![charts color palette chunk 1: 1. Blue, 2. Orange, 3. Red](/images/lexicon/ColorCharts1.jpg)

![charts color palette chunk 2: 4. green, 5. Pink, 6. Grass green](/images/lexicon/ColorCharts2.jpg)

![charts color palette chunk 3: 6. Grass green, 7. Purple, 8. Yellow, 9. Sky blue](/images/lexicon/ColorCharts3.jpg)

### Gradient Colors

Use gradient colors when you don’t need a chart with embedded texts, but instead you need visual variation between shapes (an example could be a Heat Map).

![charts color hues for stark blue color](/images/lexicon/ChartColorStarkVariation.jpg)

#### Use of Gradient Colors

An example use case for gradient colors could be a low/high level Map with different data for every country, with a maximum of nine levels of differentiation.

#### Rules for Gradient Colors

You can get the same percentages we applied to the “Stark” blue for each one of the Flat Colors by using a [sass color generator](http://scg.ar-ch.org/). Paste the Flat Color HEX, and you’ll get the percentages. This provides you with a set of colors that you can use as gradient colors.

### Reading colors

Colors help identify data and improve readability, but they must be chosen carefully. Choosing the wrong colors can produce the opposite effect. Below are some guidelines for choosing colors are shown below.

#### Shape & order

Using the proper shape and color order helps avoid color vibration and lets users, including color blind users, easily identify chart sections. A pie chart example is shown below:

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/images/lexicon/ChartShapeOrderRight.png" alt="colors must follow the order defined in the list and be separated in this case">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/ChartShapeOrderWrong.png" alt="colors in wrong order">
		<p class="dont">Don't</p>
	</div>
</div> -->

#### Lines Charts

Only use borders, **2px thickness**, to identify line charts. Differentiate them using dash types, shape types, and colors. Don’t use background/area colors with line charts, as they will only confuse the user.

![Charts line example with different lines types and shape types](/images/lexicon/ChartLineAndShapeExample1.png)

#### Area Charts

Background colors may be necessary to identify Area Charts. We recommend that you use **10% opacity** for each Area Chart's background color. This lets area colors overlap, without completely obscuring each other. Use the same elements as Line Charts for borders and shapes.

![lexicon default](/images/lexicon/ChartColorAreas.png)

### Colors on chart interaction

For clarity and to provide a good user experience, you should let the user interact and focus on single chart elements. The example below resizes the selected element (from the pie or the legend) and highlights it by decreasing the opacity of the other elements to 40%:

![Pie chart color focus example](/images/lexicon/ChartColorFocus.png)

The example below styles a Line chart to improve readability. The selected element maintains the 2px border, while the other elements are decreased to a 1px border and 40% opacity:

![Charts line previous example with one line selected](/images/lexicon/ChartLineAndShapeExample2.png)

### Text embedded in area

Although, you can include text inside the Flat Colors by default, **we don't recommend it**. Instead, we recommend that you use organization and interaction to improve text readability. The best place for this is the legend.

![tooltip usage in a half donut chart](/images/lexicon/ChartBubbleExample.png)

### Accessibility

Lexicon provides a set of elements that you can use to improve accessibility in your charts. These are covered in more detail below.

#### Lines and Shapes

Lines and shapes can help you create easily recognizable patterns in line charts.

![Charts shape types. 1. circle, 2. square, 3. triangle point up, 4. rhombus, 5. triangle point down, 6. semicircle down, 7. semicircle up, 8. rectangle laid, 9. rectangle up](/images/lexicon/ChartsShapeTypes.png)

![Charts line types different stroke width and interior distance](/images/lexicon/ChartsLineTypes.png)

You can see both elements in action in the example below:

![Charts line example with different lines types and shape types](/images/lexicon/ChartLineAndShapeExample1.png)

#### Area patterns

You can use patterns in areas to help identify each section. Lexicon provides nine patterns you can use to differentiate areas:

![Charts area patterns, 9 different types](/images/lexicon/ChartsAreaPattern.png)

These patterns should be used in areas that don't overlap, such as the slices in a Pie Chart.

![Pie Chart using different area patterns](/images/lexicon/ChartAreaPatternExample.png)
