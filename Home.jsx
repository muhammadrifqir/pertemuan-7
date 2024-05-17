function Main() {
    /**
     * ini hanya snippet(potongan) code
     * kode yang lainnya tetap sama
     */

    /**
     * mengangkat stave movies: lifting state
     * dari component movies ke component home
     * agar bisa digunakan oleh component yang lain
     */
    const [movies, setMovies] = useState(data);

    return (
        <main>
            <hero></hero>
            <Movies movies={movies} setMovies={setMovies}></Movies>
            <AddMovieForm movies={movies} setMovies={setMovies}></AddMovieForm>
        </main>
    );
}

/**
 * Membuat component home
 * menampilkan halaman home
 * menampung navbar, main, dan footer component
 */
function Home () {
    return (
        <>
        <h1>Halaman Home</h1>
        </>
    );
}

export default Home;