import { Row, ListGroup } from 'react-bootstrap';

const FooterList = (props) => {
  return (
    <ListGroup>
      {props.list.map((item, index) => (
        <ListGroup.Item key={index} className="border-0 bg-transparent text-body-tertiary">
          {item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default FooterList;
