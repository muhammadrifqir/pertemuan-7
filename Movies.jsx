// Import Data Movies
import Movies from "./Movies";
import styles from "./movies.module.css";
import data from "../utils/constants/data";
import { useState } from "react";
// import nanoid
import { nanoid } from "nanoid";

//menerima props
function Movie(props) {
  /**
   * ini hanya snippet(potongan) code
   * kode yang lainnya tetap sama
   */

  //destructing props: state movies
  const {movies, setMovies } = props;
} 
  
  // menangkap props
  function AddMovieForm(props){
    /**
     * ini hanya snippet(potongan) code
     * kode yang lainnya tetap sama
     */

    //destructing props: state movies
    const {movies, setMovies } = props;

    function handleSubmit(e) {
      e.preventDefault();

      const movie = {
        id:nanoid(), title:title,
        year: Date, type: "Movie",
        poster: "https://picsum.photos/300/400",
      };

      //solved: how to add movie to movies
      setMovies([...movies, movie]);
    }
  }
  
  return (
    <div className={styles.movie}>
      <img className={styles.movie__image} src={movie.poster} alt={movie.title}></img>
      <h3 className={styles.movie__title}>{movie.title}</h3>
    </div>
  );
  
  function AddMovie(props) {
  function handleClick() {
    //menggunakan nanoid
    const movie = {
      id: nanoid(),
      title: "jigsaw",
      year: 2021,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    // kode lain setelahnya
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            ></img>
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div>
            <div className={styles.container}>
              <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                  {/**
                   * looping movies (array).
                   * render component movie dan kirim props movie
                   */}
                  {movies.map((movie) => {
                    return <Movie key={movie.id} movie={movie}></Movie>;
                  })}
                  <Movie title="Superman No Home" year="2022"></Movie>
                  <Movie title="Dark" year="2021"></Movie>
                  <Movie title="Turning Red" year="2022"></Movie>
                  <Movie title="The Batman" year="2022"></Movie>
                  <Movie title="Encanto" year="2021"></Movie>
                </div>
                {/** Element button diberikan event click: onClick */}
                <button onClick={handleClick}>Add Movie</button>
              </section>
            </div>
          </div>
          {/* Duplicate 10 below */}
        </div>
      </section>
    </div>
  );
export default Movies;
