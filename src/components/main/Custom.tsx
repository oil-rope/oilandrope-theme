import React, { Fragment } from 'react';

const Custom = () => {
  return (
    <Fragment>
      <h2>Custom components</h2>
      <hr />
      <div className="card">
        <h3 className="card-header">Gradient Background</h3>
        <div className="card-body bg-gradient-logo">
          <p className="text-light">
            Example text with gradient background with color scheme.
          </p>
        </div>
      </div>
      <div className="my-5"></div>
      <div className="card">
        <h3 className="card-header">Full background</h3>
        <div
          className="card-body full-background"
          style={{
            backgroundImage:
              'url(https://oilandrope-project.com/static/img/cover-min.png)',
          }}
        >
          <p className="text-light">
            Example text with full background with color scheme.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Custom;
