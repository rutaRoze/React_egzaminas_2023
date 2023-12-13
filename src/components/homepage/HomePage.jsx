import { useNavigate } from 'react-router-dom';
import "./HomePage.css"

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid text-center mt-5 home-page-style">
        <div className="row justify-content-center row-cols-1 row-cols-lg-4">
          <div className="col mb-5">
            <img
              src="http://imf.lt/assets/img/photos/donoro_kortele_new.png"
              alt="donor card example"
            />
          </div>
          <div className="col text-start m-5">
            <h1 data-testid="component-title">Give Something that means something</h1>
            <p data-testid="component-paragrath">
              Give blood and give the gift of life. Come to give blood Dec. 1-17 and get warm thank
              you.
            </p>
            <button type="button" className="btn btn-warning" onClick={() => navigate(`/form`)}>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
