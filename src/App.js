import React from 'react';
import {Route} from 'react-router-dom';
import {Menu} from './component/Menu';
import {LandingPage} from './page/Landing';
import EmployeeDetailsPageConnected from './page/EmployeeDetails';
import EmployeesPageConnected from './page/EmployeesList';
import './App.module.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div class="container">
        <Menu />
        <div className="content">
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/employees" component={EmployeesPageConnected}/>
          <Route path="/employees/:id" component={EmployeeDetailsPageConnected}/>
        </div>
      </div>
    );
  }
}
