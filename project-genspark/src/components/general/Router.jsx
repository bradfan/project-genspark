import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from "../pages/Header";

import Footer from "../pages/Footer";

class RouterComponent extends Component {
    render() {
        return(
            <div>
             <Router>
                 <Header />
                     {/* <Switch>
                         <Route exact path="/"><WelcomeComponent name="Everett"/></Route>                       
                         <Route path="/theEmployee/:id" component={AddEmployee} />
                         <Route path="/employee/:id/:jobTitle" component={UpdateEmployeeComponent} />
                         <Route path="/EmployeeRegistry" exact component={EmployeeRegistryComponent} />
                     </Switch> */}
                 <Footer /> 
             </ Router>
             </div>
        )
    } 
 }
 
 export default RouterComponent; 