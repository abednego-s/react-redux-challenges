import { useSelector } from "react-redux";
import { fetchUser } from "./userSlice";
import { AppState, useAppDispatch } from "./store";

export default function App() {
  const dispatch = useAppDispatch();
  const userData = useSelector((state: AppState) => state.user);

  return (
    <>
      <h1>User Data</h1>
      <div>
        <button
          onClick={() => dispatch(fetchUser(1))}
          data-testid="fetchUserBtn1"
        >
          Fetch user data (success)
        </button>
        <button
          onClick={() => dispatch(fetchUser(2))}
          data-testid="fetchUserBtn2"
        >
          Fetch user data (fail)
        </button>
      </div>
      <div>
        {userData.status === "error" ? <div>{userData.error}</div> : null}
        {userData.data ? (
          <>
            <h2>User data:</h2>
            <div>{userData.data?.name}</div>
            <div>{userData.data?.email}</div>
          </>
        ) : null}
      </div>
    </>
  );
}
