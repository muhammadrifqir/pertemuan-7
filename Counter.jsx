function Counter() {
  // membuat variable result
  let result = 0;

  /**
   * membuat fungsi handleClick
   * dijalankan ketika button diklik
   */
  function handleClick() {
    result = result + 1;
  }

  //membuat event click pada button
  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Counter;
