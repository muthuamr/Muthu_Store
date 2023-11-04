// YourComponent.js
import React, { useState } from 'react';
import Pagination from './Pagination';

function YourComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set your items per page
  const data = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul>
        {currentData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default YourComponent;
