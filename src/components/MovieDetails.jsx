import { Alert, Card, Spinner, Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const URL = 'http://www.omdbapi.com/?apikey=2dd86ad4&i=';
  const params = useParams();
  const movieID = params.movieID;
  const [movieToShow, setMovieToShow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getDetails = () => {
    fetch(URL + movieID)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('errore nella chiamata: ' + res.status);
        }
      })
      .then((movieDetails) => {
        console.log(movieDetails);
        setMovieToShow(movieDetails);
        setLoading(false);
      })
      .catch((err) => {
        console.log('errore nella chiamata: ', err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(getDetails, [movieID]);

  return (
    <Container fluid className="bg-body-tertiary" data-bs-theme="dark">
      <Row className="justify-content-center py-3 ">
        <Col xs={12} md={6} className="text-center">
          <h2 className="text-center text-light">Ecco tutti i dettagli!</h2>
          <Card xs={12} md={6} lg={4} className="shadow">
            {error && <Alert variant="danger">Errore nel caricamento!</Alert>}
            {loading ? (
              <Spinner animation="grow" variant="danger" />
            ) : (
              <>
                <Card.Img variant="top" src={movieToShow.Poster} />
                <Card.Body>
                  <Card.Title>{movieToShow.Title}</Card.Title>
                  <Card.Text>
                    {movieToShow.Year} - {movieToShow.Runtime}
                  </Card.Text>
                  <Card.Text>{movieToShow.Plot}</Card.Text>
                </Card.Body>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
