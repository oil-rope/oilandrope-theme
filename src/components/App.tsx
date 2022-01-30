import React, { FC, Fragment } from 'react';

import Header from '@Components/Header';
import Main from '@Components/Main';

const App: FC = () => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
};

export default App;
