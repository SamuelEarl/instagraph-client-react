import React, { useState } from 'react';
import { author } from '@/dummy-data';
import Button from '@/components/Button';
import styles from "./Profile.module.scss";

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated", firstName.trim(), lastName.trim(), password.trim());
    return "Updated";
  }

  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <h3>Update Your Profile</h3>

        <form onSubmit={handleUpdate}>

          <input
            type="text"
            placeholder="First Name"
            value={author.firstName}
            onChange={e => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            value={author.lastName}
            onChange={e => setLastName(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={author.password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button>Update Profile</Button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
