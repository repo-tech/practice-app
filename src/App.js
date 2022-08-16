import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyListGroup from "./components/MyListGroup";
import NavbarState from "./context/NavbarState";
import MyForm from "./components/MyForm";
import Demo from "./example/Demo";
function App() {
  return (
    <>
      <NavbarState>
        {/* <MyNavbar />
        <MyListGroup />
        <MyForm/> */}

        <Demo/>
      </NavbarState>
    </>
  );
}

export default App;
