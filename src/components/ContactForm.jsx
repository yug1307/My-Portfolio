import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '', email: '', number: '', service: '', description: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      alert('Submitted successfully!');
      setForm({ name: '', email: '', number: '', service: '', description: '' });
    } catch (err) {
      alert('Submission failed.');
      console.error(err);
    }
  }

  return (
    <div className="p-3">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-6 p-6 bg-lime-400 shadow-md rounded-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Get In Touch!</h2>

        <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Name" required 
        className="w-full p-2 border rounded" />

        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required 
        className="w-full p-2 border rounded" />

        <input name="number" value={form.number} onChange={handleChange} type="tel" placeholder="Phone Number" 
        required className="w-full p-2 border rounded" />

        <select name="service" value={form.service} onChange={handleChange} required className="w-full p-2 border rounded">
          <option value="">I am interested in</option>
          <option value="Video Production">Video Production</option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="Cloud Services">Social Media Setup</option>
          <option value="Brand Launch Packages">Brand Launch Packages</option>
        </select>

        <textarea name="description" value={form.description} onChange={handleChange} 
        placeholder="Describe your requirements..." rows="4" 
        className="w-full p-2 border rounded"></textarea>

        <button type="submit" className="bg-violet-500 text-l w-full py-2 rounded-md hover:bg-teal-500">Submit</button>
 
        {alert && <p className="text-sm mt-2 text-gray-600">{alert}</p>}
      </form> 
    </div>
  );
};

export default ContactForm;
