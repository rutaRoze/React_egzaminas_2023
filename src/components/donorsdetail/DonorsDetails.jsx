import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      <div className="container p-5 ">
        <div className="row row-cols-sm-1 row-cols-lg-2 ">
          <div className="col p-4">
            <div className="col py-5 px-5">
              <h4></h4>
              <div className="card mb-3" style="max-width: 540px;">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="Donor picture" />
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
        </div>
      </div>
    </>
  );
}

export default DonorsDetails;