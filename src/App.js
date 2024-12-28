import logo from "./logo.svg";
import "./App.css";
import DisplayProducts from "./components/displayProducts";
import AddProduct from "./components/addProduct";

function App() {
  return (
    <div className="App">
      <AddProduct />
      <DisplayProducts />
    </div>
  );
}

export default App;
