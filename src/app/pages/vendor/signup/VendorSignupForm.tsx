'use client';

import { useState } from 'react';
import CountryStateCityForm from '@/app/components/common/CountryState/CountryStateCityForm'; // Adjust the path as needed

export default function VendorSignupForm() {
  const [formData, setFormData] = useState({
    category: '',
    businessName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = ({ country, state, city }: { country: string; state: string; city: string }) => {
    setFormData((prev) => ({
      ...prev,
      country,
      state,
      city,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Send to API
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 rounded  space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700">Service Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 text-gray-700 rounded px-3 py-2"
          required
        >
          <option value="">Select category</option>
          <option value="Photography">Photography</option>
          <option value="Catering">Catering</option>
          <option value="Decoration">Decoration</option>
          <option value="Venue">Venue</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* 🔗 Country-State-City */}
      <CountryStateCityForm onChange={handleLocationChange} />

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>
  );
}
