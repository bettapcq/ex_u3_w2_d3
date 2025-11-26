import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleMovie = (props) => {
  const navigate = useNavigate();

  return (
    <Image
      src={props.posterSrc}
      alt="movie cover"
      className="img-fluid object-fit-cover h-100 py-3"
      onClick={() => navigate('/details/' + props.movieID)}
    />
  );
};

export default SingleMovie;
