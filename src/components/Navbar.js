import {Link} from "react-router-dom";
function Navbar() {
    return(
        <div className=" d-flex justify-content-end">
            <ul className="nav nav-pills">
  <li className="nav-item">
    <Link className="nav-link" aria-current="page" href="#" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="#" to="/Contact-us">ContactUs</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" href="#" to="/add-Recipe">Add Recipe</Link>
  </li>
  
</ul>
        </div>
    )
    
}
export default Navbar;