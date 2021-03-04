import React, { useRef, useState } from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';


export const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, seterror] = useState('');
    const [loading, setloading] = useState(false);
    const history = useHistory();


    async function handleSubmit(e) {
        e.preventDefault();

        try{
            seterror('');
            setloading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        }
        catch{
            seterror('No se ha podido iniciar sesión');
        }
        setloading(false);
        
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                
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

                       

                        <Button disabled={loading} type="submit" className="btn btn-info w-100">Iniciar</Button>
                    </Form>

                    <div className="w-100 text-center mt-2">
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>
                
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                Necesitas una cuenta? <Link to="/signup">Registro</Link>
            </div>
        </div>
    )
}
