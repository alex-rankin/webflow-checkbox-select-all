/*
 * This function allows toggling of select all checkboxes with WebFlow filters.
 * Pass in 2x arguments, First, the dropdown ID (parent) selector of the collection list or dropdown wrapper
 * Second, the check all ID which is the checkbox "select all" input.
 */
function setupCheckboxHandler(dropdownId, checkAllId) {
  let filterCheckboxes = document.querySelectorAll(`#${dropdownId} input[type='checkbox']:not(#${checkAllId})`);
  const checkAllCheckbox = document.getElementById(checkAllId);

  // Function to check/uncheck all checkboxes
  function checkAll(passedCheckBox) {
    if (passedCheckBox.checked == true) {
      // If the checkbox is not checked we want to simulate a click
      filterCheckboxes.forEach(function (checkbox) {
        if (!checkbox.checked) {
          checkbox.click(); // Click to check - needed to work with webflow
        }
      });
      // Remove checked state from all button as another checkbox is checked
      checkAllCheckbox.previousSibling.classList.remove("w--redirected-checked");
    } else {
      filterCheckboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          checkbox.click(); // Click to uncheck - needed to work with webflow
        }
      });
      // Add checked state to all button as all of them are checked
      checkAllCheckbox.previousSibling.classList.add("w--redirected-checked");
    }
  }

  // Check all handler
  filterCheckboxes.forEach((cb) => {
    cb.addEventListener("change", (event) => {
      // If any checkbox is unchecked, uncheck the "Select All" checkbox and update styled checkbox
      if (!event.target.checked) {
        checkAllCheckbox.checked = false;
        checkAllCheckbox.previousSibling.classList.remove("w--redirected-checked");
      } else {
        // If all checkboxes are checked, check the "Select All" checkbox and update styled checkbox
        if ([...filterCheckboxes].every((cb) => cb.checked === true)) {
          checkAllCheckbox.checked = true;
          checkAllCheckbox.previousSibling.classList.add("w--redirected-checked");
        }
      }
    });
  });

  // Add change event listener to "select all" input
  checkAllCheckbox.addEventListener("change", function (event) {
    checkAll(this);
  });
}

/*
 * This function clears WebFlow filters based on te checkboxes checked
 * Pass 1x ID of the clear element in, all checkboxes on the page loaded will be unchecked
 */
function setupClearAllHandler(clearAllId) {
  const pageCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
  const clearAll = document.getElementById(clearAllId);
  // Function to check if any of the checkboxes are checked
  function areAnyCheckboxesChecked() {
    return Array.from(pageCheckBoxes).some((checkbox) => checkbox.checked);
  }
  // Function to update clear-all visibility
  function updateClearAllVisibility() {
    clearAll.style.display = areAnyCheckboxesChecked() ? "block" : "none";
  }
  // Initial check when the page loads
  window.addEventListener("DOMContentLoaded", updateClearAllVisibility);
  // Event listener for checkbox changes
  pageCheckBoxes.forEach(function (check) {
    check.addEventListener("click", updateClearAllVisibility);
  });
}
