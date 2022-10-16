import React, { FC, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '@Components/Header';
import Loader from '@Components/Loader';

const Main = lazy(() => import('@Components/Main'));
const Icons = lazy(() => import('@Components/Icons'));
const Forms = lazy(() => import('@Components/Forms'));

const App: FC = () => {
  return (
    <Suspense fallback={<Loader text="Loading components..." />}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/forms" element={<Forms />} />
        <Route
          path="*"
          element={<h1 className="display-1 text-center">Item not found</h1>}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
