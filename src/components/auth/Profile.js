import React, { useState } from 'react'
import {Card, Button, Alert} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import { CenteredContainer } from './CenteredContainer'

export const Profile = () => {

    const [error, seterror] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    
    
    const handleLogOut = async() => {
        seterror('');

        try{
            await logout();
            history.pushState('/login')
        }catch{
            seterror('No se ha podido cerrar la sesión')
        }
    }
    return (
        <CenteredContainer>
            <Card>

                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {
                            error && <Alert variant="danger">{error}</Alert>

                    }
                    <strong>Email: </strong> {currentUser.email}
                    <Link to='/update-profile' className="btn btn-primary w-100">
                        Modifica tu perfil
                    </Link>

                </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
               <Button variant="link" onClick={handleLogOut}>Log Out</Button>
            </div>
        </CenteredContainer>
    )
}
