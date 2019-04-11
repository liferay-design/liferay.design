---
title: "Badges"
titleLabel: "Clay"
titleLabelLink: "https://clayui.com/docs/components/badges.html"
description: "Badges help highlight important information, such as notifications or new and unread messages."
layout: "guide"
weight: 1
---

<div class="page-description">{$page.description}</div>

Badges have circular borders and are only used to specify a number.

![defualt size default color badge](../../../images/Badges.jpg)

### Usage

* There are different types of badges available to use, depending on the context, as shown in the image above. You won't always need a badge to identify a number. In those cases plain text is an option.
* Badges are only used for integers.
* Badges can not be used as a close button or a link to another a page. They are only used as informative text.
* Badges don't always indicate the exact number of elements. When this is the case, please use plain text instead. Badges work for exact numbers up to 999. For numbers greater than 999, use K to indicate Thousands (5K for 5.231) and M to indicate Millions (2M for 2.100.523).
* The Red badge is only used for the cases below:
	* Notifications: These are always placed nearby a user profile or a Product menu option.
	* Errors: These are used in tables and lists.
* Badges are not used for non-numeric values. If you have a non-numeric value, use labels instead.

### Dos and Don'ts

Badges can be placed near text, but there must be a minimum distance of 8px between the two.

<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="../../../images/BadgeDoDistance.jpg" alt="badge distance to an element is 8 pixels">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="../../../images/BadgeDontDistance.jpg" alt="don't place a badge closer than 8 pixels to any element in horizontal">
		<p class="dont">Don't</p>
	</div>
</div>

### Attributes

![badge metrics](../../../images/BadgesMetrics.jpg)

* Height: 18px
* Border: 1px
* Font-size: 12
