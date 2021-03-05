import React from 'react'
import { SignUp } from './auth/SignUp';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Profile} from './auth/Profile'
import {Login } from './auth/Login'
import { PrivateRoute } from '../Routes/PrivateRoute'
import {ForgotPassword} from './auth/ForgotPassword'
import { UpdateProfile } from './auth/UpdateProfile';
import { Dashboard } from './drive/Dashboard';


function App() {

  return (
      <Router>
            <AuthProvider>
                <Switch>

                  <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>

                  {/**Profile */}
                    <PrivateRoute  path="/user" component={Profile} />
                    <PrivateRoute  path="/update-Profile" component={UpdateProfile} />
                    
                    
                    {/**Authentication */}
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/forgot-password" component={ForgotPassword}/>
                </Switch>
            </AuthProvider>

          </Router>

    
         

    
  )

  
}

export default App;
