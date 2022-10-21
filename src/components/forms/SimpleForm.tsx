import React from 'react';

const SimpleForm = () => {
  return (
    <form action="" method="get" className="row g-3">
      <div className="mb-3">
        <label htmlFor="" className="form-label" form="formBasicEmail">
          Email address
        </label>
        <input
          className="form-control"
          type="email"
          id="formBasicEmail"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We&apos;ll never share your email with anyone else
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleForm;
