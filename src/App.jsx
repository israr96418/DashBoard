import React from 'react'
import NavBar from './Components/NavigationBar/NavBar'
import SideBar from './Components/SideBar/SideBar'
import './App.css'
import Pages from './Components/Pages/Pages'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserList from './Components/Pages/UserList/UserList'
import User from './Components/Pages/Users/User'
import NewUser from './Components/Pages/NewUsers/NewUser'
import ProductList from './Components/Pages/ProductList/ProductList'
import Product from './Components/Pages/Product/Product'



function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <SideBar />

        <Switch>
          <Route exact path="/">
            <Pages />
          </Route>

          <Route path="/userlist">
            <UserList  />
          </Route>

          <Route  path="/user/:userId">
            <User />
          </Route>

          <Route  path="/NewUser">
            <NewUser />
          </Route>


          <Route  path="/productlist">
            <ProductList />
          </Route>

          {/* <Route  path="/product">
            <Product />
          </Route> */}
        </Switch>
      </div>

    </Router>
  )
}

export default App
