---
title: 'Common Actions'
description: 'Vocabulary set of frequent actions in our products base.'
order: 131
draft: false
---

<div class="adapting-columns">
    <p><a href="./#new">New</a></p>
    <p><a href="./#create">Create</a></p>
    <p><a href="./#edit">Edit</a></p>
    <p><a href="./#configure">Configure</a></p>
    <p><a href="./#save">Save</a></p>
    <p><a href="./#delete">Delete</a></p>
    <p><a href="./#cancel">Cancel</a></p>
    <p><a href="./#duplicate">Duplicate</a></p>
    <p><a href="./#duplicate-to">Duplicate to</a></p>
    <p><a href="./#copy-to">Copy To</a></p>
    <p><a href="./#copy-to-clipboard">Copy To Clipboard</a></p>
    <p><a href="./#move">Move</a></p>
    <p><a href="./#add">Add</a></p>
    <p><a href="./#assign">Assign</a></p>
    <p><a href="./#remove">Remove</a></p>
    <p><a href="./#close">Close</a></p>
    <p><a href="./#done">Done</a></p>
    <p><a href="./#apply">Apply</a></p>
    <p><a href="./#clear">Clear</a></p>
    <p><a href="./#select">Select</a></p>
</div>

### New

Use when an interaction initiates the sequence to start creating a new entity or record.

**Usage**

* When there is a single entity creation option, button or tooltip must read “New [Entity name]”.
* When there are multiple create possibilities, button or tooltip must read “New”.
* When expressed as an icon button, use plus icon and set a tooltip for the action.
* This action might also appear in a dropdown menu, the action should read “New [Entity name]”.
 
**Associated Icon**

![Plus icon](/images/lexicon/IconPlus.jpg)

**Similar actions:** Edit, Add

**Opposite actions:** Delete

**Examples**

Example 1: only one action is possible

![Show a plus button in a management toolbar with tooltiop "New Tag"](/images/lexicon/CommonWordsNew1.jpg)

Example 2: multiple actions are possible

![Show a plus button in a management toolbar with tooltiop "New"](/images/lexicon/CommonWordsNew2.jpg)


### Create

Use when an interaction initiates the sequence to start creating a new entity or record.

**Usage**

* Always use a text button.
* Always include the entity/record that is being created: “Create [entity]”.
* Create is only used when an entity/record is first being configured, any subsequent edits will use the verb "Save" as the primary action.
* Inform the user after with the outcome with an alert or a different UI feedback.

**Similar actions:** Save, Add

**Opposite actions:** Delete

**Example**

![A creation form where the primary action is Create](/images/lexicon/CommonWordsCreate.jpg)


### Edit

Use when an interaction initiates the sequence to modify an existing entity/record. Common edits change the title or description field of the entity.

**Usage**

* Usually listed in a dropdown menu as a fundamental for most entities/records.

**Associated Icon**

![Pencil icon](/images/lexicon/IconPencil.jpg)

**Similar actions:** Configure, New

**Example**

![Card with its dropdown menu displayed where the first action is Edit](/images/lexicon/CommonWordsEdit.jpg)


### Configure

Initiates the sequence to modify an existing entity/record's meta properties and settings. A Configure interaction usually takes the user to a different screen than the more fundamental Edit interaction.

**Usage**

* Use Configure for interactions that modify the meta information of an entity/record. By contrast, "edit" is used to modify the entity/record itself.
* The initial configuration will either be set by default or during the creation process. 
* Use Configure when editing and configuring are separate steps. However, in the case that they are combined, use Edit


**Associated Icon**

![Cog icon](/images/lexicon/IconCog.jpg)

**Similar actions:** Edit, New

**Example**

![Congfiguration action for a page placed on the page topper](/images/lexicon/CommonWordsConfigure.jpg)


### Save

Completes the sequence to save changes to the entity/record or its settings. Used to complete either the sequence started by a Configure or Edit interaction.

**Usage**

* Always use a primary text button, with a few exceptions. 
    * "Save as Draft" typically displayed with a secondary button.
    * In the balloon toolbars of the page builder, a disk icon is used.
* Do not use “Save” when making changes in a secondary state (i.e. modal), during an unsaved sequence, such as a form. In these situations, use “Done.” 
* Do not use “Save” to submit filters. In this case, use “Apply”.
* After the Save is submitted, inform the user with the outcome.

**Similar action:** Create

**Opposite action:** Cancel

**Example**

![Form with primary action that reads Save](/images/lexicon/CommonWordsSave.jpg)


### Delete

Deletes an entity/record that has been created. An entity must only be deleted in the area of the product where it is created.

**Usage**

* Usually listed as the last action in a dropdown that lists the actions of the entity.
* Deleting is a destructive action and therefore requires warning the user. Three levels of severity have been identified :
    * Low Risk: because the record/entity can be restored from the recycle bin, a post-deletion toast alert should be used.
    * Mid Risk: because the record/entity cannot be restored but the consequences are low (such as having to recreate the entity). A confirmation message must be presented to the user with the proper message to understand this situation before the action is processed.
    * High Risk: because the record/entity cannot be restored and the consequences are high (such as deleting  an entire site). A danger modal with a reading proof mechanism would be appropriate before the action is processed.


**Associated Icon**

![Trash icon](/images/lexicon/IconTrash.jpg)

**Similar action:** Remove

**Opposite action:** New, Create

**Example**

![Secondary state of management toolbar displays bulk actions. Delete appears as the first one from the left side](/images/lexicon/CommonWordsDelete1.jpg)

Mid risk security message

![Browser confirmation message for permanent deletion of the selected entities](/images/lexicon/CommonWordsDelete2.jpg)

High risk security message

![Danger modal that requests typing a confirmation to delete the entity](/images/lexicon/CommonWordsDelete3.jpg)


### Cancel

Discards work in progress and closes the interaction

**Usage**

* Use secondary text button
* If an entity/record has been cancelled without saving/creating/publishing, trigger a confirmation message to confirm the user's intent.
* In autosave scenarios, “Cancel” will restore values to the moment the entity was opened for the last time.

**Similar action:** Close, Exit

**Opposite action:** Save

**Example**

![Warning modal where one of the actions to take is Cancel](/images/lexicon/CommonWordsCancel.jpg)


### Duplicate

Makes an exact copy of an entity.

**Usage**

* Duplicated entity/records must read: “Filename (Copy)”
* For duplication to another location, use “Duplicate To”

**Similar action:** Duplicate to

**Example**

![An asset is going to be duplicated in the same folder. The duplicated asset title reads Name (Copy)](/images/lexicon/CommonWordsDuplicate.jpg)


### Duplicate To

Makes an exact copy of an entity in another location.

**Usage**

* Copied entity/records must be named following: Filename (Copy)
* For duplication without move necessity please use “Duplicate”

**Similar action:** Duplicate

**Example**

![An asset is going to be duplicated to a different folder. The duplicated asset title reads Name (Copy)](/images/lexicon/CommonWordsDuplicateTo.jpg)


### Copy To

Copies an entity's records to another entity. Both entities must already exist for the records to be copied.

**Usage**

* After the records are copied, inform the user with the outcome.

**Associated Icon**

![Copy icon](/images/lexicon/IconCopy.jpg)


### Copy To Clipboard

Copies a string to the clipboard.

**Usage**

* Use “Copy to clipboard” instead of: Copy, Duplicate
* Clicking button results in a tooltip confirming the copy to clipboard action has been completed.

**Associated Icon**

![Copy icon](/images/lexicon/IconCopy.jpg)

**Example**

![Information panel in document library offers the posibility to copy links](/images/lexicon/CommonWordsCopyToClipboard.jpg)


### Move

Moves an entity/record from one place to another (for example, from one folder to another folder). The entity is removed from the original location.

**Usage**

* Copied entity/records must be named following: Filename (Copy)
* For duplication without move necessity please use “Duplicate”

**Associated Icon**

![Move to folder icon](/images/lexicon/IconMoveFolder.jpg)

**Similar action:** Duplicate to

**Example**

![Image card where one of the actions is Move](/images/lexicon/CommonWordsMove.jpg)


### Add

Adds an existing entity/record to the current context. For example, add a user to a segment.

**Usage**

* If the add action requires a modal, the modal title must read “Add [entity/record]” and the primary action must read “Add”.

**Associated Icon**

![Plus icon](/images/lexicon/IconPlus.jpg)

**Similar action:** New, Assign

**Opposite action:** Remove

**Example**

![Adding users to site memberships is triggered from the plus button. The modal displayed title reas "Add users to this site" and the primary action of this modal reads "Add"](/images/lexicon/CommonWordsAdd.jpg)


### Assign

A variation of "add." It associates an existing user record to a particular job or piece of work, to establish a connection between the user and the job.

**Usage**

* When the add action triggers a modal, the modal title must read “Assign [entity/record]”. Ex: Assign Roles to Paul Hanaoka
* If there is an associated modal, the primary text button should read “Assign.”

**Associated Icon**

![Plus icon](/images/lexicon/IconPlus.jpg)

**Similar action:** New, Add

**Opposite action:** Unassign, Remove

**Example**

![User card in site memberships displaying actions modal where the first action is Assign Roles](/images/lexicon/CommonWordsAssign.jpg)


### Remove

Non-destructive removal of an entity/record/element that has been added or assigned. Because the element was created and saved elsewhere, the element remains available for use in other contexts, or to be re-added to the same context.

**Usage**

* If the action to remove is on a sensitive or work intensive screen, provide an alert to acknowledge an action has taken place. Alert can contain an undo button.

**Associated Icons**

![Times icon and Times circle icon](/images/lexicon/IconsTimes.jpg)

**Similar action:** New, Add

**Opposite actions:** Unassign, Remove

**Examples**

Example 1: Results bar below the management toolbar where applied fiters appear

![Results bar below the management toolbar where applied fiters appear. The icon in the label that represents the applied filter is times](/images/lexicon/CommonWordsRemove1.jpg)


Example 2: Removing a user from a list


### Close

Closes a modal or a secondary state to return back to its original state. Close dismisses an interface element such as an alert, modal, sidebar or menu.

**Usage**

* Always placed to the top right corner of the component to be closed.
* Always a secondary action
* May be the only allowable option if there aren’t other actionable options.
* In a modal: If the secondary state has changed without saving, then prompt a confirmation message to confirm the user's intent (similar to cancel, where save actions are available).

**Associated Icons**

![Times icon](/images/lexicon/IconTimes.jpg)

**Similar action:** Cancel

**Examples**

![Modal header displays close icon to the top right](/images/lexicon/CommonWordsClose.jpg)


### Done

Confirms a completed secondary action during an unsaved sequence.

**Usage**

* Use when making changes in a secondary state (i.e. modal), during an unsaved sequence, such as a form or wizard.

**Similar action:** Apply

**Opposite actions:** Open, Cancel

**Example**



### Apply

Confirms a temporary selection such as filtering.

**Usage**

* Closes a modal or secondary state and temporarily registers user changes on the screen. 
* Use apply when selections change the results on the screen. Selecting apply will close the secondary state (modal or dropdown).

**Similar actions:** Save, Done

**Opposite actions:** Clear

**Example**

![Filter and order dropdown at managment toolbar where the primary action is Apply](/images/lexicon/CommonWordsApply.jpg)



### Clear

Clears temporary filters/entities/records ( ie: queries, notifications, suggested content, system generated logs, unsaved selections, filter labels). Usually applies to a view mode, rarely affects persisted data.

**Associated Icons**

![Times icon and Times circle icon](/images/lexicon/IconsTimes.jpg)

**Opposite actions:** Apply

**Example**

![Results bar with filters applied displays Clear action to the right of the bar](/images/lexicon/CommonWordsClear.jpg)


### Select

Choose one or multiple entities/records/settings to apply to a specific interaction. The user usually has a choice of pre-existing selections when the term Select is appropriately used. 

**Usage**

* Do not use the word "Choose" for selection interactions.

**Example**

![Results bar with filters applied displays Clear action to the right of the bar](/images/lexicon/CommonWordsSelect.jpg)