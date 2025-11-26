import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import HomeTitle from './components/HomeTitle';
import MoviesList from './components/MoviesList';
import Footer from './components/Footer';
import { Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

import './mycss.css';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeTitle title="Saga" />

                <Row className="flex-column flex-gor-1">
                  <MoviesList
                    saga="american pie"
                    sagaTitle="The American Pie saga"
                    type="movie"
                  />
                  <MoviesList saga="matrix" sagaTitle="The Matrix saga" />
                  <MoviesList
                    saga="hunger games"
                    sagaTitle="The Hunger Games saga"
                    type="movie"
                  />
                  <MoviesList
                    saga="scary movie"
                    sagaTitle="The Scary Movie saga"
                    type="movie"
                  />
                </Row>
              </>
            }
          />

          <Route
            path="/tvshows"
            element={
              <>
                <HomeTitle title="Series" />
                <Row className="flex-column flex-gor-1">
                  <MoviesList
                    saga="stranger things"
                    sagaTitle="Stranger Things"
                    type="series"
                  />
                </Row>
              </>
            }
          />
          <Route path="/details/:movieID" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
