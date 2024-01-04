export default function App() {
  return (
    <div>
      <form>
        <input />
        <input type="submit" value="Add" />
      </form>
      <h2>Books:</h2>
      <ul>
        {/**
         * ====================
         * show all the books
         * ====================
         *
         * replace the code below with your own implementation
         * */}
        <li>
          <label>The hobbit</label>
          <button>Delete</button>
          <label>
            <input type="checkbox" /> Read
          </label>
        </li>
        {/** ==================== */}
      </ul>
    </div>
  );
}
