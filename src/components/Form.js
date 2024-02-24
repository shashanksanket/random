import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setFormErrors({});
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.contactNumber) errors.contactNumber = 'Contact number is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }
    try {
      // const response = await fetch('https://your-server-endpoint', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // }); //Call Api
      const response = {
        "ok": true
      }

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          subject: '',
          message: '',
        });
        alert('Form submitted successfully!');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className=" p-10 md:p-20 text-2xl font-semibold  rounded-sm space-y-2">
      <div className='border-b border-2 border-blue-800 w-10'></div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <h2>LET'S CONNECT</h2>
        <p>Contact our support team or make an appointment with our experts.</p>

        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-fit rounded-md border border-gray-300 p-2 text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {formErrors.name && (
          <p className="text-red-500 text-xs pt-1">{formErrors.name}</p>
        )}

        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-fit rounded-md border border-gray-300 p-2 text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {formErrors.email && (
          <p className="text-red-500 text-xs pt-1">{formErrors.email}</p>
        )}

        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
          Contact Number
        </label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          className="w-fit rounded-md border border-gray-300 p-2 text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
        {formErrors.contactNumber && (
          <p className="text-red-500 text-xs pt-1">{formErrors.contactNumber}</p>
        )}

        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-300 p-2 text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />

        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={2}
          className="w-full rounded-md border border-gray-300 p-2 text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />

        <button type="submit" disabled={isSubmitting} className="w-fit py-2 px-4 rounded-md bg-indigo-600 text-white font-bold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-20">
          {isSubmitting ? 'Submitting...' : 'Submit Form'}
        </button>
      </form>
    </div>);
}

export default ContactForm;
