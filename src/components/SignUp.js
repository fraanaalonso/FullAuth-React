import React, { useRef, useState } from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';


export const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp } = useAuth();
    const [error, seterror] = useState('')
    const [loading, setloading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if( passwordRef.current.value !== passwordConfirmRef.current.value){
            return seterror('Las contraseñas no coinciden');
        }

        try{
            seterror('');
            setloading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        }
        catch{
            seterror('No se ha podido crear la cuenta');
        }
        setloading(false);
        
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Registro</h2>
                
                    {
                        error && <Alert variant="danger">{error}</Alert>

                    }
                
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Confirmación Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        
                        </Form.Group>

                        <Button disabled={loading} type="submit" className="btn btn-info w-100">Registro</Button>
                    </Form>
                
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                Ya tienes cuenta? Indentifícate <Link to="/login">Log In</Link>
            </div>
        </div>
    )
}
