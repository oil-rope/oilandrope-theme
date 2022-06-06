import React, { Fragment, lazy, Suspense } from 'react';

import Loader from '@Components/Loader';

const ExampleForm = lazy(() => import('./components/ExampleForm'));

const Form = () => {
  return (
    <Fragment>
      <h2 className="mt-5">Form</h2>
      <hr />
      <section>
        <div className="card">
          <div className="card-body">
            <Suspense fallback={<Loader text="loading example form..." />}>
              <ExampleForm />
            </Suspense>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              We set <code>input-bg</code> as transparent since forms could be
              inside a card as this.
            </small>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <Suspense fallback={<Loader text="loading example form..." />}>
          <ExampleForm />
        </Suspense>
      </section>
    </Fragment>
  );
};

export default Form;
