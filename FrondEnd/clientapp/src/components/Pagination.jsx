// Pagination.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageItems = [];

  for (let page = 1; page <= totalPages; page++) {
    pageItems.push(
      <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
        <button style={{marginLeft: "30px"}}  className="page-link" onClick={() => onPageChange(page)}>
          {page}
        </button>
      </li>
    );
  }

  return (
    <nav aria-label="Page navigation">
    <ul className="pagination">
      {pageItems}
    </ul>
    </nav>
  );
}

export default Pagination;
