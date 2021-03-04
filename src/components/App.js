import React from 'react'
import { SignUp } from './SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {DashBoard} from './DashBoard'
import {Login } from './Login'
import { PrivateRoute } from '../Routes/PrivateRoute'
import {ForgotPassword} from '../components/ForgotPassword'
import { UpdateProfile } from './UpdateProfile';


function App() {

  return (


    <Container 
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
      
      >
          <div className="w-100" style={{minHeight: "400px"}}      >
          <Router>
            <AuthProvider>
                <Switch>
                    <PrivateRoute exact path="/" component={DashBoard} />
                    <PrivateRoute  path="/update-Profile" component={UpdateProfile} />
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                </Switch>
            </AuthProvider>

          </Router>
          </div>

    </Container>


    
  )

  
}

export default App;
