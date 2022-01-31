import React, { FC, Fragment } from 'react';

import Links from '@Components/main/components/Links';
import Fonts from '@Components/main/components/Fonts';
const TextExamples: FC = () => {
  return (
    <Fragment>
      <h2>Text examples</h2>
      <hr />
      <section className="row mb-5">
        <div className="col-md-6">
          <Links />
        </div>
        <div className="col-md-6">
          <Fonts />
        </div>
      </section>
    </Fragment>
  );
};

export default TextExamples;
