import React, { useRef, useState } from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';


export const UpdateProfile = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false);
    const history = useHistory();

     function handleSubmit(e) {
        e.preventDefault();

        if( passwordRef.current.value !== passwordConfirmRef.current.value){
            return seterror('Las contraseñas no coinciden');
        }

        const promises = [];
        setloading(true);
        seterror('');


        if( emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value));
        }

        if( passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises).then( () => {
            history.push('/');
        }).catch(() => {
            seterror('No hemos actualizado tu cuenta')
        }).finally(()=> {
            setloading(false)
        })

        
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Modificar perfil</h2>
                
                    {
                        error && <Alert variant="danger">{error}</Alert>

                    }
                
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                        
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef}   placeholder="Dejalo en blaco para mantener lo mismo"/>
                        
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Confirmación Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef}  placeholder="Dejalo en blaco para mantener lo mismo" />
                        
                        </Form.Group>

                        <Button disabled={loading} type="submit" className="btn btn-info w-100">Editar</Button>
                    </Form>
                
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
             <Link to="/">Cancel</Link>
            </div>
        </div>
    )
}
