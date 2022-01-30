import React, { FC, Fragment, lazy, Suspense } from 'react';

import Loader from '@Components/Loader';

const Color = lazy(() => import('@Components/main/Color'));

const Colors: FC = () => {
  const colors = {
    primary: '#ee7a55',
    secondary: '#eea955',
    success: '#21975b',
    danger: '#dc3545',
    warning: '#ffc197',
    info: '#8fb9d2',
    extra: '#5ebf8e',
    light: '#f8f9fa',
  };

  return (
    <Fragment>
      <h2>Colors</h2>
      <hr />
      <section className="row mb-5">
        {Object.entries(colors).map(([key, value], index) => {
          return (
            <div key={index} className="col-md-4">
              <Suspense fallback={<Loader color={key.toLocaleLowerCase()} />}>
                <Color colorName={key} colorHex={value} />
              </Suspense>
            </div>
          );
        })}

        {/* NOTE: This case is special since we need to add an style */}
        <div className="col-md-4">
          <Suspense fallback={<Loader />}>
            <div className="text-white">
              <Color colorName="dark" colorHex="#212529" />
            </div>
          </Suspense>
        </div>
      </section>
    </Fragment>
  );
};

export default Colors;
