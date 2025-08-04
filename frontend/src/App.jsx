import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    const res = await axios.get('http://localhost:8000/api/people');
    setPeople(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;
    await axios.post('http://localhost:8000/api/people', { name });
    setName('');
    fetchPeople();
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Daftar Nama</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Masukkan nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {people.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

