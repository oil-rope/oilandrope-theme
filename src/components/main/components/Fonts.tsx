import React, { FC } from 'react';

const Fonts: FC = () => {
  return (
    <div className="card">
      <div className="card-header">Fonts</div>
      <div className="card-body">
        <h1 className="font-ds">Title made in Dancing Script.</h1>
        <small className="small font-ds text-muted">
          Example of small text in Dancing Script.
        </small>
        <p className="font-ds">This a complete paragraph full of words.</p>
      </div>
    </div>
  );
};

export default Fonts;
