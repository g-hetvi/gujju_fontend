import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider"; // Assuming this provides user data

function UserProfile() {
  const [authUser, setAuthUser] = useAuth(); // Assuming this hook gives user data
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullname: authUser?.fullname || "",
    email: authUser?.email || "",
    address: authUser?.address || "",
    gender: authUser?.gender || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Implement save logic here, e.g., update the user profile in your database
    setAuthUser({ ...authUser, ...formData });
    setEditing(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-algerian flex flex-col items-center justify-center text-dark-green mb-4 pt-[80px]">~~~   Your Profile ~~~</h2>
      <div className="grid gap-4">
        <div>
          <label className="block font-medium">Username</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border px-2 py-1 rounded-md text-black bg-white"
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border px-2 py-1 rounded-md text-black bg-white"
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border px-2 py-1 rounded-md text-black bg-white"
          />
        </div>
        <div>
          <label className="block font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            disabled={!editing}
            className="w-full border px-2 py-1 rounded-md text-black bg-white"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      {editing ? (
        <div className="mt-4">
          <button onClick={handleSave} className="btn bg-[#4ade80] mr-2">
            Save
          </button>
          <button onClick={() => setEditing(false)} className="btn bg-red-400">
            Cancel
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <button onClick={() => setEditing(true)} className="btn bg-[#4ade80]">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
