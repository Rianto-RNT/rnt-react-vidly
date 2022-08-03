import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div className="container-fluid">
      <h4>Movie Form {match.params.id}</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
