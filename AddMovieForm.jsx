import { useState } from "react";
// import component alert
import Alert from "../Components/Alert/Alert";
import { nanoid } from "nanoid";

function AddMovieForm(props) {
  /**
   * ini hanya snippet (potongan) code
   * kode yang lainnya tetap sama
   */

  // membuat state: istitleerror, isdateerror
  const [IsTitleError, setIsTitleError] = useState(false);
  const [IsDateError, setIsDateError] = useState(false);
  
  // membuat state title
  const [title, setTitle] = useState("");

  /**
   * membuat fungsi handtitle 
   * dijalankan ketika nilai input berubah
   */

  function handleTitle(e) {
    /**
     * jalankan fungsi settitle
     * set title nilai baru: input saat ini
     */
    return (
      <input
        id="title"
        type="text"
        // memberikan value input: title
        value={title}
        //memberikan event onChange
        onChange={handleTitle}
      />
      )
  
      /**
       * membuat inline if: operator &&
       * jika istitleerror true maka render error
       */
      {IsTitleError && <Alert>title wajib diisi</Alert>}
      setTitle(e.target.value);

      function handleDate(e) {
        /**
         * jalankan fungsi setdate
         * set date nilai baru: input saat ini
         */
        return (
          <input
            id="date"
            type="text"
            // memberikan value input: date
            value={date}
            //memberikan event onChange
            onChange={handleDate}
          />
        )
        /**
       * membuat inline if: operator &&
       * jika istitleerror true maka render error
       */
      {IsDateError && <Alert>date wajib diisi</Alert>}
        setDate(e.target.value);
      }

      function handleSubmit (e) {
        // jika title kosong, set istitleerror ,menjadi true
        if (title === "") {
          setIsTitleError(true);
        }
        // jika date kosong, set isdateerror menjadi true
        else if (date === "") {
          setIsDateError(true);
        }
        // jika tidak, push movie dan set eror menjadi false
        else {
          const movie = {
            id: nanoid(), title: title,
            year: date, type: "Movie",
            poster: "https://picsum.photos/300/400",
          };
          setMovies([...movies, movie]);

          // set eror menjadi false
          setIsTitleError(false);
          setIsDateError(false);
        }
      }
  };

export default AddMovieForm;
