---
title: 'Forms Validation'
description: 'A description of how validation patterns must be displayed within form structures.'
order: 255
draft: false
---

### Partial validation

This type of validation occurs on the fly, while the user fills in the form. It doesn't require the user to fill in the entire form or the form to be submitted to see it.

#### Inline validation

Forms have inline validation. All [form fields](../text-input) that can be checked against a set of rules while filling them in must show success or error state to the user.

![default error state](/images/lexicon/InputHelpTextError.jpg)

#### At least one field required

There may be a case when only one indeterminate field is required in a form or fieldset. In this case, follow these guidelines:

1. Set a mandatory mark in the fieldset title.
2. It is recommended to include a short help text below the title. Ex: "Please enter at least one of the following fields."
3. All fields must be marked with the corresponding validation color.

    1. Only one validation message is shown for one of the input fields in the group, preferably the first. A good help message specifies the error to the user and explains how to solve it.

    ![Form At Least One Field](/images/lexicon/FormAtLeastOneField.jpg)

    2. Once the validation conditions are met, the alert message disappears.

    ![Form At Least One Field Validation](/images/lexicon/FormAtLeastOneFieldValidation.jpg)

    3. Losing focus triggers validation, unless a field in the group is already focused.

    ![Form At Least One Field Validation](/images/lexicon/FormAtLeastOneFieldSuccess.jpg)

### Full validation

Forms are validated when they are submitted via the "Save" action. When a form is completely validated, it first runs partial validation on all of the mandatory fields. If this is successful, a service is called.

The example below communicates the return of that service call with an [embedded alert](../../alerts/#embedded).

![push alert example. Placed right below the last horizontal navigation label](/images/lexicon/AlertEmbeddedExample.png)
