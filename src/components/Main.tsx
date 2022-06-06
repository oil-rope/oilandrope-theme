import React, { FC, lazy, Suspense } from 'react';

import Loader from './Loader';

const Colors = lazy(() => import('@Components/main/Colors'));
const ComponentsWithColor = lazy(
  () => import('@Components/main/ComponentsWithColor'),
);
const TextExamples = lazy(() => import('@Components/main/TextExamples'));
const Custom = lazy(() => import('@Components/main/Custom'));
const NavTab = lazy(() => import('@Components/main/NavTab'));
const Accordion = lazy(() => import('@Components/main/Accordion'));
const Form = lazy(() => import('@Components/main/Form'));

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

        <Suspense fallback={<Loader text="Loading custom..." />}>
          <Custom />
        </Suspense>

        <Suspense fallback={<Loader text="Loading nav tab..." />}>
          <NavTab />
        </Suspense>

        <Suspense fallback={<Loader text="Loading accordion..." />}>
          <Accordion />
        </Suspense>

        <Suspense fallback={<Loader text="Loading form..." />}>
          <Form />
        </Suspense>
      </div>
    </main>
  );
};

export default Main;
