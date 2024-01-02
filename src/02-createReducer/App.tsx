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
      <div>
        <ul>{/** Display todos here */}</ul>
      </div>
      <hr />
    </>
  );
}
