import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import StudentProfile from './components/StudentProfile';
import ViewStudents from './components/ViewStudents';
import AddSTUDENT from './components/AddStudent';


function App() {
	
return (
	
	
	<Router  >
	
     
   
	<Switch>
	<Route path = "/" exact component = {StudentProfile}></Route>
		<Route path='/student' component={StudentProfile} />
		<Route path='/add-STUDENT/:id' component={AddSTUDENT} />
		< Route path = "/view-STUDENT/:id" component={ViewStudents}/> 
		

    
    
		
	</Switch>



	</Router>


);
}

export default App;
