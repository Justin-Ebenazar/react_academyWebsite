// src/components/CustomSelect.jsx
import React, { useState, useRef, useEffect } from 'react';
import './CustomSelect.css'; // We'll create this CSS file next

/**
 * A simple custom select/dropdown component.
 * @param {Array<Object>} options - An array of objects: [{ value: '...', label: '...' }]
 * @param {string} placeholder - Text to display when no option is selected.
 * @param {function} onSelect - Callback function when an option is selected (receives value).
 * @param {string} [initialValue] - Optional: The initial selected value.
 */
function CustomSelect({ options, placeholder, onSelect, initialValue }) {
  // State to control if the dropdown list is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // State to hold the currently selected value (e.g., "keyboard")
  const [selectedValue, setSelectedValue] = useState(initialValue || '');

  // State to hold the label to display (e.g., "Keyboard" or the placeholder)
  const [selectedLabel, setSelectedLabel] = useState(placeholder || 'Select an option');

  // Ref to the container div, used to detect clicks outside the component
  const selectRef = useRef(null);

  // --- Effect to set initial label if an initial value is provided ---
  useEffect(() => {
    if (initialValue) {
      // Find the option object that matches the initialValue
      const initialOption = options.find(option => option.value === initialValue);
      if (initialOption) {
        setSelectedLabel(initialOption.label);
      }
    }
  }, [initialValue, options]); // Re-run if initialValue or options change

  // --- Handler to toggle the dropdown's visibility ---
  const handleToggle = () => {
    setIsOpen(prev => !prev); // Toggle the isOpen state
  };

  // --- Handler for when an option is clicked ---
  const handleOptionClick = (option) => {
    setSelectedValue(option.value); // Update the internal selected value
    setSelectedLabel(option.label); // Update the label shown in the display
    setIsOpen(false); // Close the dropdown after selection

    // Call the provided onSelect callback with the selected value
    if (onSelect) {
      onSelect(option.value);
    }
  };

  // --- Effect to close dropdown when clicking outside of the component ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If click is outside the select container, close the dropdown
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    // Main container for the custom select, with a ref for outside clicks
    <div className="custom-select-container" ref={selectRef}>
      {/* This is the visible 'input' part that users click to open the dropdown */}
      <div
        className={`custom-select-display ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
        tabIndex="0" // Makes the element focusable, crucial for keyboard navigation
        role="combobox" // ARIA role indicating it's a combobox (select-like widget)
        aria-haspopup="listbox" // ARIA attribute indicating it pops up a listbox
        aria-expanded={isOpen} // ARIA attribute indicating whether the listbox is expanded
        aria-label={placeholder || 'Select option'} // Provides a label for screen readers
      >
        {selectedLabel} {/* Displays the currently selected label or placeholder */}
        <span className="custom-select-arrow"></span> {/* Custom arrow icon */}
      </div>

      {/* This is the dropdown list of options, only rendered if isOpen is true */}
      {isOpen && (
        <ul className="custom-select-options" role="listbox"> {/* ARIA role for a listbox */}
          {options.map((option) => (
            <li
              key={option.value} // Unique key is vital for React list rendering
              className={`custom-select-option ${selectedValue === option.value ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
              tabIndex="0" // Make individual options focusable
              role="option" // ARIA role for an option within a listbox
              aria-selected={selectedValue === option.value} // Indicates if this option is currently selected
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;