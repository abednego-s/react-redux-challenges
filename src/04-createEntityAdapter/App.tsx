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
         * remove this following code and replace with your own implementaion
         * */}
        <li>
          The hobbit <button>Delete</button>
          <input type="checkbox" />
        </li>
        {/** ==================== */}
      </ul>
    </div>
  );
}
