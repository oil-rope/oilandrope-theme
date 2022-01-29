import React, { lazy, Suspense } from 'react';

const Color = lazy(() => import('Components/main/Color'));

const colors = {
  Primary: '#ee7a55',
  Secondary: '#eea955',
  Success: '#21975b',
  Danger: '#dc3545',
  Warning: '#ffc197',
  Info: '#8fb9d2',
  Extra: '#5ebf8e',
  Light: '#f8f9fa',
};

const Main = () => {
  return (
    <main>
      <div className="container py-5">
        <h1 className="mb-5">Main components</h1>
        <h2>Colors</h2>
        <hr />
        <section className="row mb-5">
          {Object.entries(colors).map(([key, value], index) => {
            return (
              <div key={index} className="col-md-4">
                <Suspense fallback={<p>Loading...</p>}>
                  <Color colorName={key} colorHex={value} />
                </Suspense>
              </div>
            );
          })}

          {/* NOTE: This case is special since we need to add an style */}
          <div className="col-md-4">
            <Suspense fallback={<p>Loading...</p>}>
              <div className="text-white">
                <Color colorName="Dark" colorHex="#212529" />
              </div>
            </Suspense>
          </div>
        </section>

        <h2>Components with color</h2>
        <hr />
        <section className="row mb-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Progress bar</div>
              <div className="card-body p-3">
                <h4 className="small">
                  Primary bar <span className="float-end">20%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: '20%' }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <h4 className="small">
                  Secondary bar <span className="float-end">40%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: '40%' }}
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <h4 className="small">
                  Sucess bar <span className="float-end">60%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: '60%' }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <h4 className="small">
                  Extra bar <span className="float-end">80%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-extra"
                    role="progressbar"
                    style={{ width: '80%' }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <h4 className="small">
                  Danger bar <span className="float-end">100%</span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: '100%' }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Buttons</div>
              <div className="card-body">
                <button type="button" className="btn btn-primary m-1">
                  Primary
                </button>
                <button type="button" className="btn btn-secondary m-1">
                  Secondary
                </button>
                <button type="button" className="btn btn-success m-1">
                  Sucess
                </button>
                <button type="button" className="btn btn-danger m-1">
                  Danger
                </button>
                <button type="button" className="btn btn-warning m-1">
                  Warning
                </button>
                <button type="button" className="btn btn-info m-1">
                  Info
                </button>
                <button type="button" className="btn btn-extra m-1">
                  Extra
                </button>
                <button type="button" className="btn btn-light m-1">
                  Light
                </button>
                <button type="button" className="btn btn-dark m-1">
                  Dark
                </button>
                <a
                  href="#"
                  className="btn btn-link btn-outline-primary link-dark"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </section>

        <h2>Text examples</h2>
        <hr />
        <section className="row mb-5">
          <div className="col-md-6">
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
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Fonts</div>
              <div className="card-body">
                <h1 className="font-ds">Title made in Dancing Script.</h1>
                <small className="small font-ds text-muted">
                  Example of small text in Dancing Script.
                </small>
                <p className="font-ds">
                  This a complete paragraph full of words.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
