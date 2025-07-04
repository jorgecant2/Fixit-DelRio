
import { useState } from "react";

export default function FixItDelRio() {
  const [formData, setFormData] = useState({ name: "", phone: "", zip: "78840", job: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd send this to a backend or service
    console.log("Lead submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Thanks for reaching out!</h2>
          <p className="text-gray-600">We'll connect you with a trusted pro in Del Rio shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">FixItDelRio.com</h1>
        <p className="text-gray-600 mb-6">Plumbing & Handyman Services in Del Rio, TX (78840)</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl"
            required
          />

          <select
            name="job"
            value={formData.job}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-xl"
            required
          >
            <option value="">Select a service</option>
            <option value="Plumbing Repair">Plumbing Repair</option>
            <option value="Leaky Faucet">Leaky Faucet</option>
            <option value="Toilet Issue">Toilet Issue</option>
            <option value="Handyman Work">Handyman Work</option>
            <option value="Drywall / Patching">Drywall / Patching</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold"
          >
            Get Help Now
          </button>
        </form>
      </div>
    </div>
  );
}
