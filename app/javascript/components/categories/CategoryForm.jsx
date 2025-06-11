import React, { useState, useEffect } from 'react';

const CategoryForm = ({ category, onSuccess, onCancel }) => {
  const [name, setName] = useState(category ? category.name : '');
  // Exemplo para CategoryForm.jsx
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

  useEffect(() => {
    setName(category ? category.name : '');
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = category ? 'PATCH' : 'POST';
    const url = category ? `/categories/${category.id}` : '/categories';
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
      body: JSON.stringify({ category: { name } }),
    });
    onSuccess();
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Category name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary me-2">
        {category ? 'Update' : 'Create'}
      </button>
      {category && (
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default CategoryForm;
