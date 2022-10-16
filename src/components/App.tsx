import React, { FC, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '@Components/Header';
import Main from '@Components/Main';
import Icons from '@Components/Icons';
import Forms from '@Components/Forms';

const App: FC = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default App;
