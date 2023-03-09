import React from "react";
import { Component } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import NotFound from "./NotFound";
import AddMovie from  "./AddMovie"




class App extends Component {
  state = {
    movies: [],

    searchQuery: "",
  };


  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    //console.log(response);
    this.setState({ movies: response.data });
  }



 
  // axios API
  deleteMovie = async (movie) => {
    axios.delete(` http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({ movies: newMovieList }));
  };

  searchMovie = (event) => {
    console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };

  addMovie=async (movie)=>{
    await axios.post(`http://localhost:3002/movies/`,movie)
    this.setState(state=>({movies:state.movies.concat([movie])}))
    
  }
  
  render() {

    let filtredMovies = this.state.movies.filter((movie) => {
      return (movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    

    return (
      <Router>
          
          <Routes>
            <Route path="/" element={
              <React.Fragment>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <SearchBar searchMovieProp={this.searchMovie} />
                  </div>
                </div>
                <MovieList
                  movies={filtredMovies}
                  delete={this.deleteMovie}
                />
                </div>
                </React.Fragment>
            }> 

            </Route>
            <Route path="/add" element={ 
              <AddMovie
              onAddMovie={(movie)=>this.addMovie(movie)} />}
            />

            <Route path="/*" element={<NotFound/>}/>

          </Routes>
      </Router>
      
    );
  }
}
export default App;
