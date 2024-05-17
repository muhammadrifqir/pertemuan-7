import { useState } from "react";
// import component alert
import Alert from "../Components/Alert/Alert";

function AddMovieForm(props) {
  /**
   * ini hanya snippet (potongan) code
   * kode yang lainnya tetap sama
   */

  // membuat state title
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
}

function Alert(props) {
  /**
   * children adalah props khusus
   * berisi konten/children yang ada di dalam component
   */
  const {children} = props;

  return (
    <div>
      <span>{children}</span>
    </div>
  )
}



  /**
   * membuat fungsi handleTitle
   * dijalankan ketika nilai input berubah
   */
  function handleTitle(e) {
    /**
     * jalankan fungsi setTitle
     * set title nilai baru: input saat ini
     */
    setTitle(e.target.value);
  }

  // membuat state date
  const [date, setDate] = useState("");
  /**
   * membuat fungsi handledate
   * dijalankan ketika nilai input berubah
   */

  function handleDate(e) {
    /**
     * jalankan fungsi setDate
     * set data nilai baru: input saat ini
     */
    setDate(e.target.value);
  }

  return (
    <input
      id="date"
      type="text"
      // memberikan value input: date
      value={date}
      //memberikan event onChange
      onChange={handleDate}
    >
    /**
    * membuat inline if: operator &&
    * jika istitleeror true maka render eror
    */

      {isDateError && <Alert>Date Wajib Diisi</Alert> }
    </input>
  );

  function handleSubmit(e) {
    // jika title kosong, set isTitleeror menjadi true
    if (title === "") {
      setIsTitleError(true);
    }
    // jika date kosong, set isdateeror menjadi true
    else if (date === "") {
      setIsDateError(true);
    }
    // jika tidak, push movie dan set eror menjadi false
    else {
    const movie = {
      id: nanoid(), title: title,
      year: date, type: "Movie",
      poster: "https://picsum.photod/300/400",
    };
    setMovies([...movies, ,movie]);

    // set eror menjadi false
    setIsTitleError(false);
    setIsDateError(false);
    }
  }

  return <form onSubmit={handleSubmit}></form>;
}
return (
  <input
    id="title"
    type="text"
    // memberikan value input: title
    value={title}
    //memberikan event onChange
    onChange={handleTitle}
  >
    /**
    * membuat inline if: operator &&
    * jika istitleeror true maka render eror
    */
    {isTitleError && <Alert>Title Wajib Diisi</Alert>}
    
  </input>
);

export default Alert;