import React, { FC } from 'react';

const SimpleForm: FC = () => {
  return (
    <form action="" method="get" className="row row-cols-xl-2 g-5">
      <div className="col-12">
        <label htmlFor="formBasicUsername" className="form-label">
          Username
        </label>
        <input
          type="text"
          name="formBasicUsername"
          id="formBasicUsername"
          className="form-control"
        />
      </div>
      <div className="col-12">
        <label htmlFor="formBasicEmail" className="form-label">
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
      <div className="col-12">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="col-12">
        <label htmlFor="exampleDataList" className="form-label">
          Datalist example
        </label>
        <input
          className="form-control"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
          <option value="San Francisco" />
          <option value="New York" />
          <option value="Seattle" />
          <option value="Los Angeles" />
          <option value="Chicago" />
        </datalist>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
      </div>
      <div className="w-100 my-0"></div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleForm;
