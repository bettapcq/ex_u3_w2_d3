import { Spinner, ListGroup, Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const MovieComments = (props) => {
  const { movieID } = props;

  const commentsURL =
    'https://striveschool-api.herokuapp.com/api/comments/' + movieID;
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovieComments = () => {
    fetch(commentsURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('errore nella chiamata: ' + res.status);
        }
      })
      .then((movieComments) => {
        console.log(movieComments);
        setComments(movieComments);
        setLoading(false);
      })
      .catch((err) => {
        console.log('errore nella chiamata: ', err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(getMovieComments, [movieID]);

  return (
    <>
      <h2 className="text-center text-light">Ecco tutti i dettagli!</h2>

      {error && <Alert variant="danger">Errore nel caricamento!</Alert>}
      {loading ? (
        <Spinner animation="grow" variant="danger" />
      ) : (
        <>
          <ListGroup xs={12} md={6} lg={4} className="shadow">
            {comments.map((comment) => (
              <ListGroup.Item key={comment._id}>
                {comment.rate} - {comment.comment}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </>
  );
};

export default MovieComments;
