import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const authValue = useSelector((state) => state.auth.isAuthunticated);
  return (
    <>
      <Header />
      {!authValue && <Auth />}
      {authValue && <UserProfile />}

      <Counter />
    </>
  );
}

export default App;
