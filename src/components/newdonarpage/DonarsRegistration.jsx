import { useState } from 'react';

function DonorsRegistration({ addDonor }) {

  const [formData, setFormData] = useState({
    // id: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    bloodGroup: ''
  });

  const handleForm = (event) => {
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDonor(formData.firstName, formData.lastName, formData.age, formData.gender, formData.bloodGroup);
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
              <legend data-testid="form-title" style={{ color: 'black', fontWeight: '500' }}>
                New Donor Registration Form
              </legend>
              {/* <div className="mb-3">
                <label className="form-label form-fields-title">Donor ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="id"
                  name="id"
                  value={formData.id}
                  onChange={handleForm}
                />
              </div> */}
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
