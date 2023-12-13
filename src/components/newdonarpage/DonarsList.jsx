import axios from 'axios';
import { useEffect, useState } from 'react';

function DonarsList() {
  const [donorsList, setDonorsList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/docs/users')
      .then((response) => {
        setDonorsList(response.data.users);
        console.log({ donorsList });
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Data is loading...</div>;
  }

  return (
    <>
      <h3>New Donar Registration Form</h3>

      <table className="table table-striped mt-5 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {donorsList.map((donor) => (
            <tr key={donor.id}>
              <th scope="row">{donor.id}</th>
              <td>{donor.firstName}</td>
              <td>{donor.lastName}</td>
              <td>{donor.age}</td>
              <td>{donor.gender}</td>
              <td>{donor.bloodGroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DonarsList;
