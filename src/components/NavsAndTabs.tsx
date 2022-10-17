import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const CampaignTab = () => {
  return (
    <Tabs className="mb-3">
      <Tab eventKey={'home'} title="HOME">
        <section>
          <h3 className="text-center">About the campaign</h3>
          <p>No description provided...</p>
        </section>
        <section>
          <h3 className="text-center">
            About The World
            <a
              href="#"
              className="btn btn-sm btn-dark fw-bold"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="This is not the entire world to take a deep look go to 'see more'"
            >
              ?
            </a>
            <br />
            <small className="lead fs-6">
              <a href="#">See more</a>
            </small>
          </h3>

          <article className="pt-3">
            <h3 className="text-center fw-lighter">
              <i className="ic-world"></i> Alkaa (world)
            </h3>

            <p>No description provided...</p>
          </article>

          <a href="#" className="btn btn-link mt-4">
            See more
          </a>
        </section>
      </Tab>
      <Tab disabled eventKey={'protagonists'} title="PROTAGONISTS (PC)" />
      <Tab disabled eventKey={'characters'} title="CHARACTERS (NPC)" />
      <Tab eventKey={'sessions'} title="SESSIONS">
        <section className="row justify-content-around">
          <div className="w-100 my-2"></div>

          <div className="col">
            <h5 className="text-center">No sessions yet.</h5>
          </div>
        </section>
      </Tab>
      <Tab disabled eventKey={'timeline'} title="TIMELINE" />
      <Tab eventKey={'settings'} title="SETTINGS">
        <section className="row justify-content-center">
          <h3 className="text-center">General settings</h3>
          <div className="row mt-3 mt-xl-4">
            <div className="col">
              <h5 className="text-end">Name</h5>
            </div>
            <div className="col">
              <p>Crónicas de Alkaa</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="text-end">Short description</h5>
            </div>
            <div className="col">
              <p>No summary provided yet.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="text-end">Description</h5>
            </div>
            <div className="col">
              <p>No description provided yet.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="text-end">System</h5>
            </div>
            <div className="col">
              <p>Pathfinder 1e</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="text-end">Type</h5>
            </div>
            <div className="col">
              <p>Private</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="text-end">Discord channel</h5>
            </div>
            <div className="col">
              <p>
                Not connected.
                <br />
                <small className="text-muted">
                  You can set it up with our bot using
                  &apos;not.linkchannel&apos; command.
                </small>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="text-end">Start date</h5>
            </div>
            <div className="col">
              <p>Not set.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="text-end">End date</h5>
            </div>
            <div className="col">
              <p>Not set.</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="text-end">Votes</h5>
            </div>
            <div className="col">
              <p>0</p>
            </div>
          </div>
        </section>
        <hr />
        <section className="row justify-content-center">
          <h3 className="text-center">Players</h3>
          <div className="row justify-content-around rounded bg-dark bg-opacity-10">
            <h5 className="text-center">5 players</h5>

            <div className="col">
              <img
                src="https://cdn.oilandrope-project.com/static/img/default_user.png"
                alt="Avatar"
                className="rounded-circle"
                width="75"
                height="75"
              />

              <p>TestUser</p>
            </div>

            <div className="col">
              <img
                src="https://cdn.oilandrope-project.com/static/img/default_user.png"
                alt="Avatar"
                className="rounded-circle"
                width="75"
                height="75"
              />

              <p>
                LeCuay
                <i
                  className="bi-brush-fill"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-original-title="Game Master"
                  aria-label="Game Master"
                ></i>
              </p>
            </div>

            <div className="col">
              <img
                src="https://cdn.oilandrope-project.com/static/img/default_user.png"
                alt="Avatar"
                className="rounded-circle"
                width="75"
                height="75"
              />

              <p>TestUser5</p>
            </div>

            <div className="col">
              <img
                src="https://cdn.oilandrope-project.com/static/img/default_user.png"
                alt="Avatar"
                className="rounded-circle"
                width="75"
                height="75"
              />

              <p>
                TestUser6
                <i
                  className="bi-brush-fill"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-original-title="Game Master"
                  aria-label="Game Master"
                ></i>
              </p>
            </div>

            <div className="col">
              <img
                src="https://cdn.oilandrope-project.com/static/img/default_user.png"
                alt="Avatar"
                className="rounded-circle"
                width="75"
                height="75"
              />

              <p>TestUser3</p>
            </div>
          </div>
        </section>
        <hr className="text-danger" />
        <section className="row justify-content-around px-2">
          <h3 className="text-center text-danger fw-light mb-4">Danger zone</h3>
          <a
            href="#"
            className="col mb-3 col-md-4 col-lg-3 btn btn-danger"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-original-title="Leave this campaign"
          >
            <i className="bi-box-arrow-left"></i>
            Leave
          </a>
          <div className="w-100"></div>
        </section>
      </Tab>
    </Tabs>
  );
};

const NavsAndTabs = () => {
  return (
    <Container className="pt-5">
      <h1 className="text-center">Navs &amp; Tabs</h1>
      <hr />
      <Row>
        <h2 className="text-center">Tabs</h2>
        <CampaignTab />
      </Row>
    </Container>
  );
};

export default NavsAndTabs;
