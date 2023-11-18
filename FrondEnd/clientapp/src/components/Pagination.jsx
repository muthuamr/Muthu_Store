// Pagination.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pagination.css'

function Pagination({itemsPerPage, currentPage, totalItems, onPageChange,onItemsPerPageChange }) {
  const pageNumbers = [];
  const totalPages=Math.ceil(totalItems/itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleItemsPerPageChange=(event)=>
  {
    const newItemsPerPage=parseInt(event.target.value,10);
    onItemsPerPageChange(newItemsPerPage);
  }

  return (
    <>
    <div className="pagination">
      <label htmlFor='itemsPerPage' style={{marginRight:'10px'}}>Records per page: </label>
      <select id='itemsPerPage' value={itemsPerPage} onChange={handleItemsPerPageChange}>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      </div>
      

      <div className="pagination page-numbers">
      <button
        className={`page-item page-number ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`page-item page-number ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      

      <button
        className={`page-item page-number ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      </div>
    
    </>
  );
}

export default Pagination;
