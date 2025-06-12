import React, { useState, useEffect } from 'react';

const CategoryForm = ({ category, onSuccess, onCancel }) => {
  const [name, setName] = useState(category ? category.name : '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

  useEffect(() => {
    setName(category ? category.name : '');
    setError('');
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const method = category ? 'PATCH' : 'POST';
    const url = category ? `/categories/${category.id}` : '/categories';
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
      body: JSON.stringify({ category: { name } }),
    });
    setLoading(false);
    if (response.ok) {
      onSuccess();
      setName('');
    } else {
      const data = await response.json();
      setError(data.name ? data.name.join(', ') : 'Erro ao salvar categoria');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-50">
      <div className="card shadow-sm" style={{ maxWidth: 600, width: '100%' }}>
        <div className="card-body">
          <div className="text-center mb-3">
            <i className="bi bi-folder-plus" style={{ fontSize: '2rem', color: '#0d6efd' }}></i>
            <h4 className="mt-2">{category ? 'Editar Categoria' : 'Nova Categoria'}</h4>
            <p className="text-muted mb-0">{category ? 'Altere o nome da categoria' : 'Cadastre uma nova categoria para organizar seus lançamentos.'}</p>
          </div>
          {error && (
            <div className="alert alert-danger py-2" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-3">
              <label htmlFor="categoryName" className="form-label">Nome da Categoria</label>
              <input
                id="categoryName"
                type="text"
                className="form-control"
                placeholder="Ex: Alimentação"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                disabled={loading}
                maxLength={50}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                ) : null}
                {category ? 'Salvar Alterações' : 'Cadastrar'}
              </button>
              {category && (
                <button type="button" className="btn btn-outline-secondary" onClick={onCancel} disabled={loading}>
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;