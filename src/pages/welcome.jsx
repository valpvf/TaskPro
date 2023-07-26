import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1>Start page</h1>
      <Link to="/Home">To Home Page</Link>
    </>
  );
};

export default Welcome;
