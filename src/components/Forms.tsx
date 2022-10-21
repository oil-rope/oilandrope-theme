import React, { FC, lazy, Suspense } from 'react';

import Loader from '@Components/Loader';

const SimpleForm = lazy(() => import('./forms/SimpleForm'));
const AccordionForm = lazy(() => import('./forms/AccordionForm'));

const Forms: FC = () => {
  return (
    <div className="container">
      <h1 className="text-center">Forms</h1>
      <hr />
      <h2 className="text-center">Accordion form</h2>
      <Suspense fallback={<Loader text="Loading accordion form..." />}>
        <AccordionForm />
      </Suspense>
      <div className="my-5"></div>
      <h2 className="text-center">Simple form</h2>
      <Suspense fallback={<Loader text="Loading simple form..." />}>
        <SimpleForm />
      </Suspense>
    </div>
  );
};

export default Forms;
