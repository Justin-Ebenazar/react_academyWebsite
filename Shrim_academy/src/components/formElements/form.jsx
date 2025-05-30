// src/components/Form.js
import React, { useState } from 'react';
import './form.css'; // Assuming your CSS file is named form.css

function Form() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loading/submitting feedback

  // --- CONFIRMED GOOGLE FORM DETAILS ---
  // This is the URL your form submits to.
  const GOOGLE_FORM_SUBMISSION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSepa2vtS-Eem6Y5qYG-qQNpUBIrA9mu3RNlOQZTZXTmVniuOQ/formResponse';

  // These are the CONFIRMED unique IDs for your form's fields from the pre-filled link.
  // Make sure 'nameInput' maps to the question you intend for name (e.g., your first question),
  // and 'mobileInput' maps to the question you intend for mobile number (e.g., your second question).
  const NAME_ENTRY_ID = 'entry.2005620554';      // Confirmed for 'this is name field'
  const MOBILE_NUMBER_ENTRY_ID = 'entry.1166974658'; // Confirmed for 'this is phone number field'
  // --- END CONFIRMED GOOGLE FORM DETAILS ---

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default browser form submission (page reload)

    setIsSubmitting(true); // Set submitting state to true
    setMessage('Submitting...'); // Show a loading message
    setIsError(false); // Reset error state

    // Basic client-side validation
    if (!name.trim() || !mobileNumber.trim()) {
      setMessage('Please fill all fields.');
      setIsError(true);
      setIsSubmitting(false); // Stop submitting state
      return;
    }

    // Prepare form data using URLSearchParams (for 'application/x-www-form-urlencoded' content type)
    const formData = new URLSearchParams();
    formData.append(NAME_ENTRY_ID, name);
    formData.append(MOBILE_NUMBER_ENTRY_ID, mobileNumber);

    try {
      // Use fetch API to send data to Google Form
      await fetch(GOOGLE_FORM_SUBMISSION_URL, {
        method: 'POST',
        mode: 'no-cors', // Crucial for cross-origin submission to Google Forms
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Important for URLSearchParams
        },
        body: formData.toString(), // Convert data to URL-encoded string
      });

      // Due to 'no-cors' mode, we cannot read the actual response from Google.
      // We assume success if the fetch operation itself does not throw a network error.
      setMessage('Thank you! Your enrollment has been submitted successfully!');
      setIsError(false);
      setName(''); // Clear the form fields after successful submission
      setMobileNumber('');

    } catch (error) {
      console.error('Error submitting form:', error); // Log any network/fetch errors to console
      setMessage('There was an error submitting your form. Please try again.');
      setIsError(true);
    } finally {
      setIsSubmitting(false); // Always reset submitting state regardless of success/failure
    }
  };

  return (
    <div className="enrollment-form-container">
      <h2>Quick Enrollment</h2>
      <form onSubmit={handleSubmit} className="custom-enrollment-form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Correctly handles input changes
            required // HTML5 validation
            disabled={isSubmitting} // Disable while submitting
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel" // Use 'tel' for phone numbers, better for mobile keyboards
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)} // Correctly handles input changes
            required
            disabled={isSubmitting} // Disable while submitting
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
        </button>

        {/* Display messages to the user */}
        {message && (
          <p className={`form-status-message ${isError ? 'error' : 'success'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Form;