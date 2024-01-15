import "./App.css";
import LoginPage from "./pages/auth/login/login";
import SignInPage from "./pages/auth/signin/signIn";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <LoginPage />
      <SignInPage />
      <ToastContainer />
    </div>
  );
}
export default App;
