import React, { FC, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '@Components/Header';
import Main from '@Components/Main';
import Icons from '@Components/Icons';

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/icons" element={<Icons />} />
      </Routes>
    </Fragment>
  );
};

export default App;
