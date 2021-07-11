import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import Products from "./component/Products";
import Header from "./component/Header";
import {
  changeByCategory,
  getAllProdcutsFromDb,
  idProdcuts,
} from "./reducers/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "./component/Erorr";
import Loading from "./component/Loading";
import ProdcutsID from "./component/ProdcutsID";
import Cart from "./component/Cart";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(idProdcuts());
    dispatch(getAllProdcutsFromDb());
  }, []);
  const products = useSelector((state) => state.inital.Products);
  const idProducts = useSelector((state) => state.inital.idProducts);
  return !products.length === 0 ? (
    <Loading />
  ) : (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/products/:id"
          render={(props) => <ProdcutsID idProducts={idProducts} {...props} />}
        ></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/error" component={Error} />
        <Route path="/cart" component={Cart} />
        <Redirect to="/error" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
