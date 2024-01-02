export default function App() {
  return (
    <>
      <h1>Counter App</h1>
      <hr />
      <center>
        <h2 data-testid="counter">0</h2>
        <button data-testid="incrementBtn">Increment</button>
        <button>Decrement</button>
        <hr />
        <label htmlFor="counter">Amount:</label>
        <input type="text" id="counter" />
        <button data-testid="incrementByAmountBtn">Increment by Amount</button>
      </center>
      <hr />
    </>
  );
}
