export default function App() {
  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <form>
        <div>
          <label htmlFor="todo">Add new todo:</label>
          <input type="text" id="todo" />
        </div>
        <input type="submit" value="Add todo" />
      </form>
      <ul>
        {/**
         * ====================
         * show all the todos
         * ====================
         *
         * replace the code below with your own implementation
         * */}
        <li>
          <label>
            <input type="checkbox" />
            finish today's homework
          </label>
          <button>Delete</button>
        </li>
        {/** ====================  */}
      </ul>
      <hr />
    </>
  );
}
