import React, { FC, lazy, Suspense } from 'react';

import Loader from './Loader';

const Colors = lazy(() => import('@Components/main/Colors'));
const ComponentsWithColor = lazy(
  () => import('@Components/main/components/ComponentsWithColor'),
);

const Main: FC = () => {
  return (
    <main>
      <div className="container py-5">
        <h1 className="mb-5">Main components</h1>
        <Suspense fallback={<Loader text="Loading colors..." />}>
          <Colors />
        </Suspense>

        <Suspense fallback={<Loader text="Loading components with color..." />}>
          <ComponentsWithColor />
        </Suspense>

        <section className="row mb-5">
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
