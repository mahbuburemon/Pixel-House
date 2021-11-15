
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Page/Home/Home/Home';
import Admin from './Page/Home/Shared/Admin/Admin/Admin';
import Login from './Page/Home/Login/Login/Login';
import Register from './Page/Home/Login/Register/Register';
import NotFound from './Page/Home/NotFound/NotFound';
import Products from './Page/Home/Products/Products';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Page/Home/Login/PrivateRoute/PrivateRoute';
import Footer from './Page/Home/Shared/Footer/Footer';
import Header from './Page/Home/Shared/Header/Header';
import Dashboard from './Page/Home/Dashboard/Dashboard/Dashboard';
import Purchase from './Page/Home/Purchase/Purchase';
import Blog from './Page/Home/Blog/Blog';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/products">
              <Products></Products>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
