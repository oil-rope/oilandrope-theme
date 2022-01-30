import Loader from '@Components/Loader';
import React, { FC, Fragment, lazy, Suspense } from 'react';

const ProgressBar = lazy(
  () => import('@Components/main/components/ProgressBar'),
);

const ComponentsWithColor: FC = () => {
  const progressBars = {
    primary: 20,
    secondary: 40,
    success: 60,
    extra: 80,
    danger: 100,
  };

  return (
    <Fragment>
      <h2>Components with color</h2>
      <hr />
      <section className="row mb-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Progress bar</div>
            <div className="card-body p-3">
              {Object.entries(progressBars).map(([key, value], index) => (
                <Suspense
                  key={index}
                  fallback={
                    <Loader text="Loading progress bar..." color={key} />
                  }
                >
                  <ProgressBar color={key} percentage={value} />
                </Suspense>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Buttons</div>
            <div className="card-body"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ComponentsWithColor;
