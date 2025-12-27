"use client";
import { useState } from "react";
import { User } from "lucide-react";

export default function ProfilePage() {
    const [profile, setProfile] = useState({
        name: "Jane Doe",
        email: "janedoe@email.com",
        member: "Premium Member",
        joined: "Jan 2024",
    });
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState(profile);

    const handleEdit = () => setEditing(true);
    const handleCancel = () => {
        setEditing(false);
        setForm(profile);
    };
    const handleSave = () => {
        setProfile(form);
        setEditing(false);
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <User className="w-16 h-16 text-purple-700" />
                </div>
                {editing ? (
                    <>
                        <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mb-2 px-3 py-2 border rounded w-full text-center" />
                        <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mb-2 px-3 py-2 border rounded w-full text-center" />
                        <div className="flex gap-2 mb-4">
                            <span className="bg-purple-700 text-white px-3 py-1 rounded-full text-xs">{form.member}</span>
                            <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-xs">Joined: {form.joined}</span>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={handleSave} className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full font-semibold">Save</button>
                            <button onClick={handleCancel} className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full font-semibold">Cancel</button>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
                        <p className="text-gray-600 mb-4">{profile.email}</p>
                        <div className="flex gap-2 mb-4">
                            <span className="bg-purple-700 text-white px-3 py-1 rounded-full text-xs">{profile.member}</span>
                            <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-xs">Joined: {profile.joined}</span>
                        </div>
                        <button onClick={handleEdit} className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-full font-semibold">Edit Profile</button>
                    </>
                )}
            </div>
        </main>
    );
}