import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap';

class Profile extends Component {
  render() {
    return (
      <Container
        className="bg-body-tertiary text-secondary py-4"
        data-bs-theme="dark"
        fluid
      >
        <Row class="flex-column">
          <Col class=" border-bottom border-1 border-secondary mb-3">
            <h1>Edit Profile</h1>
          </Col>
          <Col class=" border-bottom border-1 border-secondary mb-3">
            <Row class="row-cols-1 row-cols-md-2 mb-3">
              <Col class="col">
                <img class="img-fluid" src="./assets/avatar.png" />
              </Col>
              <Col>
                <Row class="flex-column g-2">
                  <Col>
                    <Row class="flex-column">
                      <Col class=" mb-2">
                        <Form.Control
                          type="text"
                          value="Strive student"
                          aria-label="readonly input example"
                          readonly
                        />
                      </Col>
                      <NavDropdown title="Language" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Italian
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          English
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Spanish
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Row>
                  </Col>
                  <Col class="border-bottom border-1 border-secondary pb-2 mb-3">
                    <Row class="flex-column g-2">
                      <Col class="col">
                        <label class="text-secondary mb-1">
                          Maturity SettiNgs:
                        </label>
                      </Col>
                      <Col class="col">
                        <Button variant="outline-light">
                          ALL MATURITY RATINGS
                        </Button>
                      </Col>
                      <Col class="col">
                        <p>
                          Show titles of
                          <strong>all maturity ratings</strong> for this profile
                        </p>
                      </Col>
                      <Col class="col">
                        <Button variant="outline-light">EDIT</Button>
                      </Col>
                    </Row>
                  </Col>
                  <Form>
                    {['checkbox', 'radio'].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          id={`default-${type}`}
                          label={`default ${type}`}
                        />

                        <Form.Check
                          disabled
                          type={type}
                          label={`disabled ${type}`}
                          id={`disabled-default-${type}`}
                        />
                      </div>
                    ))}
                  </Form>
                  <div
                    id="check-list"
                    class="col border-bottom border-1 border-secondary pb-2 mb-3"
                  >
                    <div class="col">
                      <label class="text-secondary mb-1">
                        Autoplay controls
                      </label>
                    </div>
                    <div class="col">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkDefault"
                        />
                        <label class="form-check-label" for="checkDefault">
                          Autoplay next episode in a series on all devices.
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkChecked"
                          checked
                        />
                        <label class="form-check-label" for="checkChecked">
                          Autoplay prevews while browsing on all devices.
                        </label>
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          <div class="col">
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-outline-secondary">
                  SAVE
                </button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-secondary">
                  CANCEL
                </button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-secondary">
                  DELETE PROFILE
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
