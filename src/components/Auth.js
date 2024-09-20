import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Auth = () => {
  const authValue = useSelector((state) => state.auth.isAuthunticated);
  const dispatch = useDispatch();

  const handleForm = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleForm}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
