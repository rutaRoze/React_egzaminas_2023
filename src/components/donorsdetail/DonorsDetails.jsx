import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./DonorsDetails.css"

function DonorsDetails() {
  const [donor, setDonor] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((response) => {
        setDonor(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  }, []);

  console.log({ donor });

  if (isLoading) {
    return <>Data is loading...</>;
  }

  if (errorMessage) {
    return <>Something is wrong</>;
  }

  const { firstName, lastName, age, birthDate, gender, bloodGroup, image } = donor;

  console.log({ donor });

  return (
    <>
      <div className="container-fluid m-5 donors-details-page-style">
        <div className="row">
          <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image} className="img-fluid rounded-start" alt="pic" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Personal information</h5>
                  <p className="card-text">Name: {firstName}</p>
                  <p className="card-text">Surname: {lastName}</p>
                  <p className="card-text">Age: {age}</p>
                  <p className="card-text">Birth Date: {birthDate}</p>
                  <p className="card-text">Gender: {gender}</p>
                  <p className="card-text">Blood Type: {bloodGroup}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonorsDetails;
