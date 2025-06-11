import React, { useState } from 'react';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';

const Categories = () => {
  const [editing, setEditing] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (cat) => setEditing(cat);
  const handleSuccess = () => {
    setEditing(null);
    setRefresh(!refresh);
  };

  return (
    <div className="container mt-5">
      <h1>Manage Categories</h1>
      <CategoryForm
        category={editing}
        onSuccess={handleSuccess}
        onCancel={() => setEditing(null)}
      />
      <CategoryList key={refresh} onEdit={handleEdit} />
    </div>
  );
};

export default Categories;
