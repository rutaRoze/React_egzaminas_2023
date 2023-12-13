import axios from 'axios';
import { useEffect, useState } from 'react';
import DonorsRegistration from './DonarsRegistration';
import { useNavigate } from 'react-router-dom';

function DonorsList() {
  const [donorsList, setDonorsList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        setDonorsList(response.data.users);
        console.log({ donorsList });
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div data-testid="post-loading">Data is loading...</div>;
  }

  const addDonor = (donor) => {
    const donorAddedToList = donorsList.concat(donor);
    setDonorsList(donorAddedToList);
  };

  const deleteDonor = (id) => {
    const deletingDonorList = donorsList.map((donor) => {
      if (donor.id === id) {
        const updateDonor = {
          ...donor,
          isDeleting: true
        };
        return updateDonor;
      }
      return donor;
    });

    setDonorsList(deletingDonorList);

    axios
      .delete(`https://dummyjson.com/users/${id}`)
      .then(() => {
        const updatedDonorList = donorsList.filter((donor) => donor.id !== id);
        setDonorsList(updatedDonorList);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h3 className="mt-5">Donors List and Registration</h3>

      <DonorsRegistration addDonor={addDonor} />

      <table className="table table-striped mt-5 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Blood Group</th>
            <th scope="col">See Data</th>
          </tr>
        </thead>
        <tbody>
          {donorsList.map((donor) => (
            <tr key={donor.id}>
              <th scope="row">{donor.id}</th>
              <td data-testid="first-name">{donor.firstName}</td>
              <td>{donor.lastName}</td>
              <td>{donor.age}</td>
              <td>{donor.gender}</td>
              <td>{donor.bloodGroup}</td>
              <td>
                <button
                  type="button"
                  onClick={() => navigate(`/details/${donor.id}`)}
                  className="btn btn-success me-2"
                >
                  See Data
                </button>
                <button
                  type="button"
                  disabled={donor.isDeleting}
                  onClick={() => deleteDonor(donor.id)}
                  className="btn btn-danger"
                >
                  Delete Data
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DonorsList;
