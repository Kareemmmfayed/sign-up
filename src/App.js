import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import pic from './assets/vec.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

defineElement(lottie.loadAnimation);
function App() {
  return (
    <div className="main">
      <div className="main__window container">
        <div className="left">
          <img src={pic} alt="people" className="d-none d-md-block"/>
        </div>
        <div className="right">
          <div className="head d-flex">
            <h1>Sign up</h1>
            <lord-icon
              src="https://cdn.lordicon.com/cqofjexf.json"
              trigger="loop"
              delay="2000"
              style={{width:"150px", height:"150px"}}>
            </lord-icon>
          </div>
          <form>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form3Example1" className="form-control" placeholder="First name"/>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input type="text" id="form3Example2" className="form-control" placeholder="Last name"/>
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" placeholder="E-mail adress"/>
            </div>
            <div className="form-outline mb-4">
              <input type="password" id="form3Example4" className="form-control" placeholder="Password"/>
            </div>
            <div className="form-outline mb-4 d-flex justify-content-around align-items-center">
              <label className="form-label" htmlFor="form3Example3">Age of the child <FontAwesomeIcon icon={faArrowRight} /></label>
              <input type="number" id="form3Example3" className="form-control" style={{width: "40%"}}/>
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="form3Example3" className="form-control" placeholder="E-mail of the child (Optional)"/>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
