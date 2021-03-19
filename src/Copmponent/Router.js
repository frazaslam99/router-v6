import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "./ShoesApp/Home"
import About from "./ShoesApp/About"
import Product from "./ShoesApp/product"
import ProductDetail from "./ShoesApp/ProductDetail"
import NavBar from "./ShoesApp/Navbar"


function configRouter() {
    return (
        <Router>
        <NavBar/>
            <Switch>
            <Route exact path="/" component={Product}/>
            <Route path="/about" component={About}/>
            <Route exact path="/product" component={Product}/>
            <Route path="/product/:id" component={ProductDetail}/>
            <Route path="" component={(()=><h3>404 Not Found</h3>)}/>


            </Switch>
        </Router>
    )
}

export default configRouter
