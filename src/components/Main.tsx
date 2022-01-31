import React, { FC, lazy, Suspense } from 'react';

import Loader from './Loader';

const Colors = lazy(() => import('@Components/main/Colors'));
const ComponentsWithColor = lazy(
  () => import('@Components/main/ComponentsWithColor'),
);
const TextExamples = lazy(() => import('@Components/main/TextExamples'));

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

        <Suspense fallback={<Loader text="Loading text examples..." />}>
          <TextExamples />
        </Suspense>
      </div>
    </main>
  );
};

export default Main;
