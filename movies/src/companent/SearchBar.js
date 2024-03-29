import React from 'react';

class SearchBar extends React.Component {


    render() {

        return  (
            <form onSubmit={(event) => event.preventDefault()}>
        <div className="form-row mb-5">
          <div className="container">
            <div className="row">
              <div className="col-10">
                <input
                  onChange={this.props.searchMovieProp}
                  type="text"
                  className="form-control"
                  placeholder="Search a movie"
                />
              </div>
              <div className="col-2">
                <button
                  type="button"
                  className="btn btn-md btn-danger"
                  style={{ float: "right" }}
                >
                  Add Movie
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
        )

    }
}


export default SearchBar;
