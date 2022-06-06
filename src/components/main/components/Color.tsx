import React from 'react';

const Color = () => {
  return (
    <div className="card">
      <div className="card-header">Colors</div>
      <div className="card-body">
        <p className="text-primary">Primary text example.</p>
        <p className="text-secondary">Secondary text example.</p>
        <p className="text-extra">Extra text example.</p>
        <p className="text-success">Success text example.</p>
        <p className="text-danger">Danger text example.</p>
        <p className="text-warning">Warning text example.</p>
        <p className="text-info">Info text example.</p>
        <p className="text-light bg-dark">Light text example.</p>
        <p className="text-dark">Dark text example.</p>
        <p className="text-muted">Muted text example.</p>
        <p className="text-white">White text example.</p>
      </div>
    </div>
  );
};

export default Color;
