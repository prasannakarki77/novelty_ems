import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import { UserProvider } from "./Context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <UserProvider>
          <Body />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
