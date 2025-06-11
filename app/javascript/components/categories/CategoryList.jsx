import React, { useEffect, useState } from 'react';

const CategoryList = ({ onEdit }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await fetch('/categories');
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    await fetch(`/categories/${id}`, { method: 'DELETE', headers: { 'X-CSRF-Token': csrfToken } });
    fetchCategories();
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul className="list-group mb-3">
        {categories.map(cat => (
          <li key={cat.id} className="list-group-item d-flex justify-content-between align-items-center">
            {cat.name}
            <div>
              <button className="btn btn-sm btn-secondary me-2" onClick={() => onEdit(cat)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(cat.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
