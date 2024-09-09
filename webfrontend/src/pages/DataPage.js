import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

function DataPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="data-page">
      <h1>Data from API</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataPage;