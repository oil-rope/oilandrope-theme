import React, { FC } from 'react';

import '@Icons/style.css';

const Icons: FC = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <h1>Icons</h1>
          <hr />
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Icon</th>
                <th scope="col">Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="ic-google"></i>
                </td>
                <td>
                  <code>&lt;i class=&#34;ic-google&#34;&gt;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ic-key"></i>
                </td>
                <td>
                  <code>&lt;i class=&#34;ic-key&#34;&gt;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ic-join"></i>
                </td>
                <td>
                  <code>&lt;i class=&#34;ic-join&#34;&gt;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ic-connect"></i>
                </td>
                <td>
                  <code>&lt;i class=&#34;ic-connect&#34;&gt;</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ic-arrow-right"></i>
                </td>
                <td>
                  <code>&lt;i class=&#34;ic-arrow-right&#34;&gt;</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Icons;
