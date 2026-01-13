import { useState } from "react";
import api from "../api/axios";

const Profile = () => {
  const [email, setEmail] = useState("");

  const updateProfile = async () => {
    await api.put("users/profile/update/", { email });
    alert("Profile updated");
  };

  return (
    <div>
      <h2>Profile</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={updateProfile}>Save</button>
    </div>
  );
};

export default Profile;
