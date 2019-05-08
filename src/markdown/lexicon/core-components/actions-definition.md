---
title: 'Actions Definition'
description: 'This page defines the use case for several common actions.'
layout: 'guide'
order: 201
---

### Delete vs Send to Recycle Bin

#### Delete

The action of deleting an element or a set of elements implies that the element(s) will be completely removed, and it is not possible to recover the element(s) after deletion. The delete icon shown below can also be used for clearing actions, such as clearing input field content.

Since this is a permanent action, you must trigger the user with a confirmation message. This message must be native and without Lexicon styling.


| Do   | Don't    | Don't |
| ------- | ------- | ------- |
| ![times circled icon](/images/lexicon/Delete.jpg) | ![trash icon](/images/lexicon/Trash.jpg) | ![times icon](/images/lexicon/Cancel.png) |


<!--
<div class="row">
	<div class="dodont col-lg">
        <img class="do" src="/images/lexicon/Delete.jpg" alt="delete icon">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/Trash.jpg" alt="trash icon">
		<p class="dont">Don't</p>
	</div>
		<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/Cancel.jpg" alt="cancel icon">
		<p class="dont">Don't</p>
	</div>
</div> -->

#### Send to Recycle Bin

The action of sending an element or a set of elements to the recycle bin implies that the element(s) will not be completely removed and can be recovered.

| Do   | Don't    | Don't   |
| ------- | ------- | ------- |
| ![Trash icon](/images/lexicon/Trash.jpg) | ![times circled icon](/images/lexicon/Delete.jpg) | ![times icon](/images/lexicon/Cancel.png) |

<!--
<div class="row">
	<div class="dodont col-lg">
        <img class="do" src="/images/lexicon/Trash.jpg" alt="trash icon">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/Delete.jpg" alt="delete icon">
		<p class="dont">Don't</p>
	</div>
		<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/Cancel.jpg" alt="cancel icon">
		<p class="dont">Don't</p>
	</div>
</div> -->

#### Cancel

Cancel and close differ much from deleting or sending to the Recycle Bin. You can find this action in the top right corner of modals.

| Do   | Don't    | Don't                                                                |
| ------- | ------- | ------- |
| ![times icon](/images/lexicon/Cancel.png) | ![times circled icon](/images/lexicon/Delete.jpg) | ![Trash icon](/images/lexicon/Trash.jpg) |

<!--
<div class="row">
	<div class="dodont col-lg">
        <img class="do" src="/images/lexicon/Cancel.jpg" alt="cancel icon">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/Delete.jpg" alt="delete icon">
		<p class="dont">Don't</p>
	</div>
		<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/Trash.jpg" alt="trash icon">
		<p class="dont">Don't</p>
	</div>
</div>
 -->

### Done

The done action should be displayed as a primary button. Use this action in all modals that display a table, list, or a card view. This can be used for one or several elements.

| Do   | Don't    |
| ------- | ------- | ------- |
| ![Primary button with text Done](/images/lexicon/FormButtonPrimaryTextDo.jpg) | ![Primary button with text Ok](/images/lexicon/FormButtonPrimaryTextDont.jpg) | 

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/images/lexicon/FormButtonPrimaryTextDo.jpg" alt="Primary button with text Done">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/FormButtonPrimaryTextDont.jpg" alt="Primary button with text Ok">
		<p class="dont">Don't</p>
	</div>
</div> -->

### Select vs Choose

The convention in Lexicon is to use **Select** instead of Choose, as Select is a more formal word.

Select means "to carefully choose"; it also means "to use a mouse or keystrokes to mark something on a computer screen". Choose doesn't convey the true intention of the action for us.

| Do   | Don't    |
| ------- | ------- | ------- |
| ![Secondary button with text Select](/images/lexicon/ActionsSelectDo.jpg) | ![Secondary button with text Choose](/images/lexicon/ActionsSelectDont.png) |

<!--
<div class="row">
	<div class="dodont col-lg">
		<img class="do" src="/images/lexicon/ActionsSelectDo.jpg" alt="Secondary button with text Select">
		<p class="do">Do</p>
	</div>
	<div class="dodont col-lg">
		<img class="dont" src="/images/lexicon/ActionsSelectDont.jpg" alt="Secondary button with text Choose">
		<p class="dont">Don't</p>
	</div>
</div> -->
