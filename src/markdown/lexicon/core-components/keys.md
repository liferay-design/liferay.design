---
title: 'Keys'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/css/content/c-kbd.html'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=3668%3A20755'
docLink: 'https://docs.google.com/document/d/196sgTdOpcuUDPDft17m3F1mUFtLIb6b-5I_FBfDRwRQ/edit?usp=sharing'
description: 'A visual pattern used to allow users to learn how to access actions via keyboard.'
order: 280
draft: false
---

![Light keys: Esc, Command, Control + Copy](/images/lexicon/LightKeys.png)

### Definition

A key is a visual cue of one or multiple keys that are typed on the keyboard allowing users to interact with the interface instead of using a pointer device such as touch or mouse.

#### Usage

Use keys to let users identify how to complete a common task using the keyboard. Keys should be understandable, learnable and available yet easy to ignore.

![Light keys: Press Command + N to open a new file](/images/lexicon/LightKeySentence.png)


#### Style

Keys use a [monospaced style](../../foundations/typography/#monospaced) for typography depending on the operating system. Text inside a key component should adjust to the same size of the text that is related to.

![Keys adjusted to the text](/images/lexicon/KeysSize.png)

#### Unicode
You can place unicode symbols inside your keys. You can find a list with some of the most common symbols below:

| Name                       | Symbol   |
| -------------------------- | -------- |
| Command Key                | ⌘        |
| Leftwards Arrow            | ←        |
| Upward Arrow               | ↑        |
| Rightwards Arrow           | →        |
| Downward Arrow             | ↓        |
| Upward and Downward Arrows | ⇅        |
| Carriage Return            | ↵        |
| Option Key                 | ⌥        |
| Shift                      | ⇧        |

### Variations

#### Light

This variation of key displays the keyboard shortcut in a light background with a secondary text and a border.

![Light keys](/images/lexicon/LightKeySentence.png)

#### Dark

The dark variation of keys displays the keyboard shortcut in a dark background with light text.

![Dark Keys](/images/lexicon/DarkKeys.png)

#### Custom

Keys can also be customized to meet the needs of your design but we recommend being consistent with any decision taken.

![Custom Keys in a dropdown menu](/images/lexicon/CustomKeys.png)

### Accessibility

Using keyboard shortcuts will make a product more accessible and usable. Listing all your keyboard shortcuts helps users to easily access and learn these shortcuts.

Also, as some users might find keys difficult to understand, we can provide some extra help using tooltips to clarify the name of the key such as Command. The tooltip should only be shown if the user hovers the key area.

![Tooltips with keys in a dropdown menu](/images/lexicon/TooltipKeys.png)