# WebFlow Checkbox Handler

This JavaScript code provides functionality for toggling "Select All" checkboxes and clearing all checkboxes with WebFlow filters. This works well with FinSweets CMS Filtering. See example https://www.mccabeworld.com/stories

## Site Setup

Place `<script src="https://cdn.jsdelivr.net/gh/alex-rankin/webflow-checkbox-select-all/src/script.min.js"></script>` within your pages `</body>` towards the top.

Within Webflow you should have a element wrapper with an ID containing all the **_checkboxes_** and **_select all_**. The select all should also have its own ID. Pass both these IDs into `setupCheckboxHandler` function to get started. Repeat these steps with a new function if there are multiple.

### Setup Checkbox Handler

The setupCheckboxHandler function allows toggling of "Select All" checkboxes with WebFlow filters. It updates the visual state of the "Select All" checkbox based on individual checkbox states.

#### Parameters

**_dropdownId_** The ID of the dropdown (parent) selector.
**_checkAllId_** The ID of the "Select All" checkbox input.

#### Usage

`setupCheckboxHandler('myDropdownID', 'selectAllCheckboxID');`

### Setup Clear All Handler

The setupClearAllHandler function clears WebFlow filters based on the checkboxes checked and updates the visibility of a "Clear All" button to hidden when no checkboxes/or filters are active.

#### Parameters

**_clearAllId_** The ID of the "Clear All" element.

#### Usage

`setupClearAllHandler('clearAllButtonID');`
