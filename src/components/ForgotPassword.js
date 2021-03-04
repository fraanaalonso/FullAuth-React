import React, { useRef, useState } from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';


export const ForgotPassword = () => {

    const emailRef = useRef();
    const { reset } = useAuth();
    const [error, seterror] = useState('');
    const [loading, setloading] = useState(false);
    const [message, setmessage] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();

        try{
            seterror('');
            setloading(true);
            await reset(emailRef.current.value);
            setmessage('El email se ha enviado correctamente. Revisa tu bandeja de entrada')
        }
        catch{
            seterror('No se ha podido resetear la contraseña');
        }
        setloading(false);
        
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                
                    {
                        error && <Alert variant="danger">{error}</Alert>

                    }

{
                        message && <Alert variant="success">{message}</Alert>

                    }
                
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        
                        </Form.Group>


                       

                        <Button disabled={loading} type="submit" className="btn btn-info w-100">Reset</Button>
                    </Form>

                    <div className="w-100 text-center mt-2">
                        <Link to="/login">Login</Link>
                    </div>
                
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                Necesitas una cuenta? <Link to="/signup">Registro</Link>
            </div>
        </div>
    )
}
