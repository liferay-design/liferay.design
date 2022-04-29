---
title: 'Figma'
description: 'Processes'
order: 20
publish: true
---

# Processes

<Image
	align="right"
	rounded
	dropShadow
	size="small"
	src="/images/handbook/tools/figma/save-as-fig.png"
	margin="0 0 0 4rem"
/>

## Archiving

If your project is getting full and you want to get rid of files, save it as a “.fig” file inside of the appropriate folder in Google Drive.

The archived files should go in the ‘archive’ folder for each milestone.

## Components

### Naming

Try to organize your components using the Atomic model — use slashes to separate, as Figma interprets these as intelligent groupings, i.e. “Icons / Arrow / Down” “Icons / Arrow / Up” will allow you to quickly navigate to the Arrow icons and choose a direction.

(project) / (figma page) / (frame) / (object) / (structural attributes) / (stylistic attributes) / (breakpoints)

-   Spaces for readability
-   Structural attributes are variations that will change what sub-components are included in the instance
-   Stylistic attributes only change the appearance of the instance

The naming convention of Figma components should follow a modified version of the Atomic model.

## Files

### Layout

Frames and groups should be laid out in rows from left-to-right, with a maximum of 5 columns. 200px should separate columns, 400px should separate rows.

### Naming

Files should be according to [DAM guidelines](https://docs.google.com/document/d/1RXQ1P8wcdIYFEvbUYVX1LEVCBoqRwHA_u9YeP3OMBl0/edit?usp=sharing) — be sure to append your initials to each file.

A typical filename: **(epic)-(story)-(ticket-number)-story-name**

Artboards should be named following the [DAM guidelines](https://docs.google.com/document/d/1RXQ1P8wcdIYFEvbUYVX1LEVCBoqRwHA_u9YeP3OMBl0/edit?usp=sharing), using numbers at the beginning for sequences. The artboard name should be descriptive, yet brief.

### [Sample File](https://www.figma.com/file/Se5fnRqBX5PXEdgixxSaah9c/epic-story-ticket-storyTitle)

### Covers and Progress Indication

<Image
	rounded
	dropShadow
	margin="4rem auto"
	src="/images/handbook/tools/figma/figma-covers.png"
/>

Files should use a cover page and cover component to indicate the current design stage of the file, as well as meta information such as file type, author, and contributors.

A cover page should always be page 1 of _n_ in a figma file and named “cover” with a background color of #FFFFFF. A cover component should be placed on the page represents the state of the file.

[Figma Cover File](https://www.figma.com/file/dk8ECobThQm6EWo0PqXeR1/Utilities?node-id=223%3A14): Liferay Global / Utilities / Templates

## Version History

**Titles**

-   **Keep titles to 25 characters or less** — longer titles are clipped and you have to double-click on the message to read it.
-   Use the imperative mood for the title — gives the future you a clearer idea of what will happen when you click on that point in time. E.g.“change buttons to blue” is clearer than “changing button colors to blue”.

**Descriptions**

-   **Keep your description to 140 characters or less** — the full description is always shown, so keeping it to the point helps keep the history readable.
-   Use the description to explain **‘what’ and ‘why’ vs. ‘how’**— answering the ‘why’ is a critical part of any designers job, so this helps you focus on what's important as you’re working as well as provide better information for you in the future.

_Additional reading: _

-   _[Commit Often, Perfect Later, Publish Once: Git Best Practices](http://sethrobertson.github.com/GitBestPractices/)_: philosophy for how to work in a version controlled ecosystem
-   _[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)_: write meaningful and useful notes as you work
