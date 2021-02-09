import React from "react";


const Form = props => {
  return (
    <div className="container">
    <div>{props.error ? error(): null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-middle">
            <button className="btn btn-primary">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
     
  );
};

function error(){
  return (
    <div className="alert alert-danger" role = "alert">
    Reenter valid City and Country
    </div>
  )
}

export default Form;