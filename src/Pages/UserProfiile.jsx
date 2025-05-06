import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { Valuecontext } from "../Root/Root";
import { FaUserCircle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { users } = useContext(Valuecontext);
  const [name, setName] = useState(users?.displayName || "");
  const [photoURL, setPhotoURL] = useState(users?.photoURL || "");
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);





  const handleUpdate = async () => {
    if (name.trim().length < 1) {
      toast.error("Name must be at least 1 character");
      return;
    }
    try {
      await updateProfile(users, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success(" Profile updated successfully!")
      setMessage("✅ Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      setMessage("❌ Error updating profile.");
      console.error(error);
    }
  };

  return (
   <>
   
   <Helmet>
        <title>App-Store | My-Profile</title>
       </Helmet>

   <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="w-full max-w-xl bg-white bg-opacity-80 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">My Profile</h2>

        {/* User Info */}
        <div className="flex flex-col items-center space-y-2">
          {users?.photoURL ? (
            <img
              src={users.photoURL}
              alt="User Avatar"
              className="w-24 h-24 rounded-full object-cover shadow"
            />
          ) : (
            <FaUserCircle className="w-24 h-24 text-gray-400" />
          )}
          <h3 className="text-xl font-semibold text-gray-700">{users?.displayName}</h3>
          <p className="text-gray-500">{users?.email}</p>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Edit Form (only when editing) */}
        {isEditing && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter image URL"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="text-sm text-gray-600 underline hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
            {message && <p className="text-green-700 text-center font-medium">{message}</p>}
          </div>
        )}
      </div>
    </div>
   
   </>
  );
};

export default UserProfile;
