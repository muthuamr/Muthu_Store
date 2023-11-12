// GenericApiComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerService from '../services/CustomerService';

const GenericApiComponent = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(endpoint);
      setData(response.data.result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (item) => {
    try {
      await axios.post(endpoint, item);
      fetchData(); // Refresh the data after creating an item
    } catch (err) {
      setError(err);
    }
  };

  const updateItem = async (itemId, item) => {
    try {
      await axios.put(`${endpoint}/${itemId}`, item);
      fetchData(); // Refresh the data after updating an item
    } catch (err) {
      setError(err);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`${endpoint}/${itemId}`);
      fetchData(); // Refresh the data after deleting an item
    } catch (err) {
      setError(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* Render data, create, update, and delete functions */}
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <CustomerService></CustomerService>
    </div>

  );
};

export default GenericApiComponent;
