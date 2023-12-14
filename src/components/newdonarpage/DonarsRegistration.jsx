import axios from 'axios';
import { useState } from 'react';

function DonorsRegistration({ addDonor }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    bloodGroup: ''
  });

  if (isLoading) {
    return <div data-testid="loading-data">Data is loading...</div>;
  }

  const handleForm = (event) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendDataToBackend();
    setIsLoading(true);
  };

  const sendDataToBackend = () => {
    axios
      .post('https://dummyjson.com/users/add', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
        gender: formData.gender,
        bloodGroup: formData.bloodGroup
      })
      .then((response) => {
        addDonor(response.data);
        setIsLoading(false);
        
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container-fluid background-form ">
        <div className="row justify-content-center">
          <form
            data-testid="submit-form"
            onSubmit={handleSubmit}
            className=" col-8 col-sm-8 col-md-6 col-xl-4 mt-3"
          >
            <fieldset>
              <legend className="my-5" data-testid="form-title" style={{ color: 'black', fontWeight: '500' }}>
                New Donor Registration Form
              </legend>
              <div className="mb-3">
                <label className="form-label form-fields-title">Donor first name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleForm}
                />
              </div>
              <div className="mb-3">
                <label className="form-label form-fields-title">Donor last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleForm}
                />
              </div>
              <label className="form-label form-fields-title">Donor age</label>
              <input
                type="number"
                className="form-control"
                placeholder="Age"
                name="age"
                value={formData.age}
                onChange={handleForm}
              />
              <div className="mb-3">
                <label className="form-label form-fields-title">Donor gender</label>
                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleForm}
                >
                  <option className="form-fields-title">Gender</option>
                  <option className="form-fields-title">Male</option>
                  <option className="form-fields-title">Female</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label form-fields-title">Donor blood goup</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Blood goup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleForm}
                />
              </div>
              <button type="submit" className="form-button mt-3  btn btn-warning">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default DonorsRegistration;
