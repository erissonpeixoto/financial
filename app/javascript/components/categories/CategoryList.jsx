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
    <div className="container py-4">
      <div className="d-flex align-items-center mb-4">
        <i className="bi bi-card-list text-primary" style={{ fontSize: '2rem' }}></i>
        <h2 className="ms-2 mb-0">Lista de Categorias</h2>
      </div>
      {categories.length === 0 ? (
        <div className="alert alert-info text-center">
          Nenhuma categoria cadastrada ainda.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle shadow-sm">
            <thead className="table-light">
              <tr>
                <th scope="col"><i className="bi bi-tag-fill me-2"></i>Nome</th>
                <th scope="col"><i className="bi bi-calendar me-2"></i>Criada em</th>
                <th scope="col" className="text-end">Ações</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(cat => (
                <tr key={cat.id}>
                  <td className="fw-semibold">{cat.name}</td>
                  <td>
                    {cat.created_at && (
                      <span className="badge bg-light text-muted">
                        {new Date(cat.created_at).toLocaleDateString()}
                      </span>
                    )}
                  </td>
                  <td className="text-end">
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      title="Editar"
                      onClick={() => onEdit(cat)}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      title="Excluir"
                      onClick={() => handleDelete(cat.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
