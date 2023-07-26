import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>Start page</h1>
      <Link to="/home">To Home Page</Link>
    </>
  );
};

export default Welcome;
