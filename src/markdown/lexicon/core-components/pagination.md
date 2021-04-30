---
title: 'Pagination'
titleLabel: 'Clay'
titleLabelLink: 'https://clayui.com/docs/components/pagination.html'
figmaLink: 'https://www.figma.com/file/02DVhuHVTDbzaMjNM7IUKWp0/lexicon?node-id=6020%3A23383'
docLink: 'https://drive.google.com/drive/folders/0B7JYaGe4TecDQnRpVXhxYWNJMmM?usp=sharing'
description: 'Pagination provides horizontal navigation between chunks(pages) of a dataset.'
order: 318
draft: false
---

## Pagination

![simple pagination](/images/lexicon/Pagination.jpg)

Use the default pagination when you need a simple pagination pattern for a page that will not change size.

Pagination includes several mechanisms to move between pages:

-   Left arrow:
    -   Navigates backward one page
    -   Disabled when the first page is selected
-   Numbers: redirects directly to a certain dataset chunk (page) calculated with the page size
-   Ellipsis:
    -   Appears when the number of pages exceeds six
    -   Displays a dropdown menu with the rest of the pages
    -   It is always shown in a middle position
-   Right arrow:
    -   Navigates forward one page
    -   Disabled when the last page is selected

## Pagination bar

![pagination bar with a dropdown for page size and the simple pagination component](/images/lexicon/PaginationBar.jpg)

A pagination bar is pagination with the following features:

-   A page size selector placed on the left side of the bar
-   A label on the right side of the page size selector that displays the exact chunk of information displayed from the dataset
-   Classic pagination on the right side of the bar that adapts to the number of pages

Use the pagination bar when you need a complex pagination pattern that requires changing the page size and re-calculating the number of pages.

Description:

![pagination bar with parts descriptive with numbers for the description](/images/lexicon/PaginationBarParts.jpg)

1. Entries dropdown to select the number of elements per page. You can configure the page size options.
2. Descriptive text to clarify the dataset segment shown.
3. Back arrow
4. Selected page
5. Non-selected page
6. Ellipsis to select intermediate pages through a dropdown menu. Since there are so many pages, it's impossible to view all the pages at once.
7. Forth arrow

### Pagination bar mobile

![pagination bar with a dropdown for page size and the simple pagination component](/images/lexicon/PaginationBarMobile.jpg)
