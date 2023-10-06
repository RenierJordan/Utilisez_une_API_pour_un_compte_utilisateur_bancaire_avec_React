import Home from "./pages/Home";
import Signin from "./pages/Sign-in";
import User from "./pages/User";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
