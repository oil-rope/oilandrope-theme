import React, { FC } from 'react';

const Links: FC = () => {
  return (
    <div className="card">
      <div className="card-header">
        Links
        <br />
        <span className="small text-muted">
          Links are showed with primary color.
        </span>
      </div>
      <div className="card-body">
        <p>
          This is a text with a <a href="">link</a>.
        </p>
      </div>
    </div>
  );
};

export default Links;
