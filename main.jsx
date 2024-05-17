import Hello from "./Hello"
/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */
function Main() {
  return (
    <main>
      {/**
       * Mengirim props ke component Hello.
       * nama props: name
       */}
      <Hello name="Rizki" />
      <Hello name="Rifqi" />
      <Hello name="Hannah" />
      <Hello name="Nathan" />
      <Hello name="Martha" />
    </main>
  );
}

export default Main;
