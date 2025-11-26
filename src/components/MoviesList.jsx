import { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SingleMovie from './SingleMovie';
import Spinner from 'react-bootstrap/spinner';
import { Alert } from 'react-bootstrap';

class MoviesList extends Component {
  state = {
    movies: [],
    loading: true,
    error: false
  };

  getMovies = () => {
    const URL = 'http://www.omdbapi.com/?apikey=2dd86ad4&s=';
    const urlSearch = this.props.saga;
    fetch(URL + urlSearch)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('errore nella chiamata: ' + res.status);
        }
      })
      .then((moviesObject) => {
        // console.log('oggetto movies: ', moviesObject);
        // console.log('array Films: ', moviesObject.Search);
        this.setState({
          movies: moviesObject.Search,
          loading: false
        });
      })
      .catch((err) => {
        console.log('errore nella chiamata: ', err);
        this.setState({
          loading: false,
          error: true
        });
      });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <Row className="flex-column bg-body-tertiary px-4" data-bs-theme="dark">
        <Col>
          <h4 className="text-light">{this.props.sagaTitle}</h4>
        </Col>
        <Col>
          {this.state.loading && (
            <div className="text-center">
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {!this.state.loading && (
            <>
              {this.state.error && (
                <Alert variant="danger">Errore nel caricamento</Alert>
              )}
            </>
          )}
          <Row className="overflow-x-auto flex-nowrap hide-scrollbar g-1">
            {this.state.movies
              .filter((movie) => movie.Type === this.props.type)
              .map((movie) => {
                return (
                  <Col xs={12} md={4} lg={2} key={movie.imdbID}>
                    <SingleMovie posterSrc={movie.Poster} movieID={movie.imdbID} />
                  </Col>
                );
              })}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default MoviesList;
