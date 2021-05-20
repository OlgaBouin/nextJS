import Layout from "./layout";
const LoginForm: React.FC = () => {
  return (
    <Layout>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="/favicon.ico" id="icon" alt="User Icon" />
          </div>

          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
            ></input>
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            ></input>
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
            ></input>
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div></Layout>)}

      export default LoginForm;