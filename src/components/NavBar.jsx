import { useState } from 'react';
//import './NavBar.css';

function NavBar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: '0' }}>
        <div className="container-fluid " style={{ backgroundColor: '#ffc400', padding: '10px' }}>
          <a className="navbar-brand text-dark" href="/">
            Blood Donation
          </a>
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="!isNavCollapsed ? true : false"
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className={`${isNavCollapsed && 'collapse'} navbar-collapse`}
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" aria-disabled="true" href="/form">
                  New Donor Registration
                </a>
              </li>
              {/* <li className="nav-item ">
                <a className="nav-link text-dark" aria-disabled="true" href="/details">
                  Donor Details
                </a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;