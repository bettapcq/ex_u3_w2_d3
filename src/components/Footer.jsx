import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import FooterList from './FooterList';

function Footer() {
  const list1 = [
    'Audio and Subtitles',
    'Media Center',
    'Privacy',
    'Contact Us'
  ];
  const list2 = ['Audio Description', 'Investor Relations', 'Legal Notices'];
  const list3 = ['Help Center', 'Jobs', 'Cookie Preferences'];
  const list4 = ['Gift Cards', 'Terms of Use', 'Corporate Information'];
  return (
    <Container
      className="bg-body-tertiary text-secondary py-4"
      data-bs-theme="dark"
      fluid
    >
      <Row className="justify-content-center w-50 mx-auto">
        <Col sx={6}>
          <Row>
            <Col>
              <FaFacebook className="m-1" />
              <FaInstagram className="m-1" />
              <FaXTwitter className="m-1" />
              <FaYoutube className="m-1" />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            <FooterList list={list1}></FooterList>
            <FooterList list={list2}></FooterList>
            <FooterList list={list3}></FooterList>
            <FooterList list={list4}></FooterList>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button variant="outline-secondary">Service Code</Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
