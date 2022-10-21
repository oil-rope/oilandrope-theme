import React, { lazy, Suspense } from 'react';
import Container from 'react-bootstrap/Container';

import Loader from '@Components/Loader';

const SimpleForm = lazy(() => import('./forms/SimpleForm'));
const AccordionForm = lazy(() => import('./forms/AccordionForm'));

const Forms = () => {
  return (
    <Container className="py-3">
      <h1 className="text-center">Forms</h1>
      <hr />
      <Suspense fallback={<Loader text="Loading simple form..." />}>
        <h2 className="text-center">Simple form</h2>
        <SimpleForm />
      </Suspense>
      <Suspense fallback={<Loader text="Loading accordion form..." />}>
        <h2 className="text-center">Accordion form</h2>
        <AccordionForm />
      </Suspense>
    </Container>
  );
};

export default Forms;
