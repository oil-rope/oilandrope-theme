import React, { FC, lazy, Suspense } from 'react';

import Loader from '@Components/Loader';
import { ICONS, BOOTSTRAP_ICONS } from '@/OARConstants';
import '@Icons/style.css';

const Icon = lazy(() => import('@Components/icons/Icon'));
const BootstrapIcon = lazy(() => import('@Components/icons/BootstrapIcon'));

const Icons: FC = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <h1>Icons</h1>
          <hr />
          <div className="card">
            <div className="card-header">Table of icons</div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Icon</th>
                    <th scope="col">Code</th>
                  </tr>
                </thead>
                <tbody>
                  {ICONS.map((value, index) => (
                    <Suspense
                      key={index}
                      fallback={<Loader text={`Loading ${value}...`} />}
                    >
                      <Icon icon={value} />
                    </Suspense>
                  ))}
                  {BOOTSTRAP_ICONS.map((value, index) => (
                    <Suspense
                      key={index}
                      fallback={<Loader text={`Loading ${value}...`} />}
                    >
                      <BootstrapIcon icon={value} />
                    </Suspense>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
