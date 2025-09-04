import { useState, useEffect } from "react";
import api from "../api";

export default function UserForm({ fetchUsers, editingUser, setEditingUser }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    email: "",
    budget: "",
    location: "",
    lifestyle: ""
  });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await api.put(`/users/${editingUser._id}`, formData);
        setEditingUser(null);
      } else {
        await api.post("/users", formData);
      }
      setFormData({
        name: "",
        age: "",
        gender: "Male",
        email: "",
        budget: "",
        location: "",
        lifestyle: ""
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-md mb-4">
      <h2 className="text-xl mb-2">{editingUser ? "Edit User" : "Add User"}</h2>
      <input className="border p-2 w-full mb-2" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input className="border p-2 w-full mb-2" name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} required />
      <select className="border p-2 w-full mb-2" name="gender" value={formData.gender} onChange={handleChange}>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input className="border p-2 w-full mb-2" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input className="border p-2 w-full mb-2" name="budget" type="number" placeholder="Budget" value={formData.budget} onChange={handleChange} required />
      <input className="border p-2 w-full mb-2" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
      <input className="border p-2 w-full mb-2" name="lifestyle" placeholder="Lifestyle" value={formData.lifestyle} onChange={handleChange} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editingUser ? "Update" : "Add"}
      </button>
    </form>
  );
}
