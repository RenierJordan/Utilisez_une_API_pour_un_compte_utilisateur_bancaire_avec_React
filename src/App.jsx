import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Signin from "./pages/Sign-in";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  return <div>{user ? <Home /> : <Signin />}</div>;
}

export default App;
