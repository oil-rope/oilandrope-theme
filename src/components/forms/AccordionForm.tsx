import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AccordionForm = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Advanced search</Accordion.Header>
        <Accordion.Body>
          <Form className="row row-cols-lg-auto align-items-center justify-content-between">
            <Form.Group className="mb-3" controlId="nameContains">
              <Form.Label>Name contains</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="summaryContains">
              <Form.Label>Summary contains</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="system">
              <Form.Label>Summary contains</Form.Label>
              <Form.Select>
                <option value="">---------</option>
                <option value={0}>Pathfinder 1e</option>
                <option value={1}>Dungeons &amp; Dragons 3.5</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="worldNameContains">
              <Form.Label>World&apos;s name contains</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="isActive">
              <Form.Check type="checkbox" label="Active" />
            </Form.Group>
            <div className="w-100"></div>
            <Col>
              <Button className="me-3" variant="primary" type="submit">
                Search
              </Button>
              <Button variant="secondary" type="reset">
                Reset
              </Button>
            </Col>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionForm;
