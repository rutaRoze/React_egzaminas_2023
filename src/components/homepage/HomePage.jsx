import { useNavigate } from "react-router-dom";

function HomePage () {
    const navigate = useNavigate();

    return (
      <>
        <p>SIGNUP FORMS</p>
        <h1>Grow your audience with free forms</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolor quo earum quia,
          consequuntur veniam explicabo dolorem voluptates iste. Perspiciatis non deleniti nihil
          temporibus aut cupiditate voluptatem corrupti, voluptatum fuga!
        </p>
        <button onClick={() => navigate(`/form`)}>Sign Up</button>
        <img src="http://imf.lt/assets/img/photos/donoro_kortele_new.png" alt="donor card example" />
      </>
    );
}

export default HomePage;