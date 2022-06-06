import React, { FC } from 'react';

const ExampleForm: FC = () => {
  return (
    <form className="row g-3">
      <div className="col-md-4">
        <label htmlFor="validationDefault01" className="form-label">
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault01"
          defaultValue="Mark"
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefault02" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault02"
          defaultValue="Otto"
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="validationDefaultUsername" className="form-label">
          Username
        </label>
        <div className="input-group">
          <span className="input-group-text" id="inputGroupPrepend2">
            @
          </span>
          <input
            type="text"
            className="form-control"
            id="validationDefaultUsername"
            aria-describedby="inputGroupPrepend2"
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationDefault03" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault03"
          required
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="validationDefault04" className="form-label">
          State
        </label>
        <select className="form-select" id="validationDefault04" required>
          <option selected disabled>
            Choose...
          </option>
          <option>...</option>
        </select>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationDefault05" className="form-label">
          Zip
        </label>
        <input
          type="text"
          className="form-control"
          id="validationDefault05"
          required
        />
      </div>
      <div className="col-md-3">
        <input
          className="form-control"
          type="text"
          placeholder="Disabled input"
          aria-label="Disabled input example"
          disabled
        />
      </div>
      <div className="col-md-3">
        <input
          className="form-control"
          type="text"
          defaultValue="Disabled readonly input"
          aria-label="Disabled input example"
          disabled
          readOnly
        />
      </div>
      <div className="col-md-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="invalidCheck2"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Default checked radio
          </label>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Default switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Checked switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDisabled"
            disabled
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">
            Disabled switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckCheckedDisabled"
            checked
            disabled
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckCheckedDisabled"
          >
            Disabled checked switch checkbox input
          </label>
        </div>
      </div>
      <div className="col-md-12">
        <label htmlFor="customRange1" className="form-label">
          Example range
        </label>
        <input type="range" className="form-range" id="customRange1" />
      </div>
      <div className="col-md-12">
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            aria-label="file example"
            required
          />
          <div className="invalid-feedback">
            Example invalid form file feedback
          </div>
        </div>
      </div>

      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
};

export default ExampleForm;
