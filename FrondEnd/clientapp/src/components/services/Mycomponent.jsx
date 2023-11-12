import React from 'react';
import UseDataFetchingAPI from '../utility/GenericApiComponent'

function MyComponent() {
  const apiUrl = 'https://localhost:7119/api/customers';
  const { data, loading, error } = UseDataFetchingAPI(apiUrl);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;
