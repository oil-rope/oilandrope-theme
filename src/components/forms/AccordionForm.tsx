import React from 'react';

const Form = () => {
  return (
    <form
      action=""
      method="get"
      className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-4"
    >
      <div id="div_id_name" className="col">
        <label htmlFor="id_name" className="form-label">
          Name contains
        </label>
        <input type="text" name="name" id="id_name" className="form-control" />
      </div>
      <div id="div_id_summary" className="col">
        <label htmlFor="id_summary" className="form-label">
          Summary contains
        </label>
        <input
          type="text"
          name="summary"
          id="id_summary"
          className="form-control"
        />
      </div>
      <div id="div_id_system" className="col">
        <label htmlFor="id_system" className="form-label">
          System
        </label>
        <select className="form-select" name="summary" id="id_summary">
          <option value="">--------</option>
          <option value="0">Pathfinder 1e</option>
          <option value="1">Dungeons &amp; Dragons 3.5</option>
        </select>
      </div>
      <div id="id_place" className="col">
        <label htmlFor="id_place" className="form-label">
          World name contains
        </label>
        <input
          type="text"
          name="place"
          id="id_place"
          className="form-control"
        />
      </div>
      <div id="div_id_owner" className="col">
        <label htmlFor="id_owner" className="form-label">
          Owner name contains
        </label>
        <input
          type="text"
          name="owner"
          id="id_owner"
          className="form-control"
        />
      </div>
      <div id="div_id_active" className="col align-self-sm-end">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="active"
            id="id_active"
            value=""
          />
          <label htmlFor="id_active" className="form-check-label">
            Active
          </label>
          <div className="form-text" id="hint_id_active">
            Search for active campaigns only
          </div>
        </div>
      </div>
      <div className="w-100 my-0"></div>
      <div className="div_id_submit col-12">
        <button type="submit" className="btn btn-primary me-3">
          Search
        </button>
        <button type="reset" className="btn btn-dark">
          Reset
        </button>
      </div>
    </form>
  );
};

const AccordionForm = () => {
  return (
    <div className="accordion" id="filterAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="filterHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filterCollapse"
            aria-expanded="false"
            aria-controls="filterCollapse"
          >
            Advanced Search
          </button>
        </h2>
        <div
          id="filterCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="filterHeading"
          data-bs-parent="#filterAccordion"
        >
          <div className="accordion-body">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionForm;
