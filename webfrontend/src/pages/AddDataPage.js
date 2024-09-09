import React, { useState } from 'react';
import { addData } from '../services/api';

function AddDataPage() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addData({ name, value: Number(value) });
      setMessage('Data added successfully!');
      setName('');
      setValue('');
    } catch (error) {
      setMessage('Failed to add data. Please try again.');
    }
  };

  return (
    <div className="add-data-page">
      <h1>Add New Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="value">Value:</label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Data</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddDataPage;
