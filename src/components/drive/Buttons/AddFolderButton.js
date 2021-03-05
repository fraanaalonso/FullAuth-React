import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
export const AddFolderButton = () => {

    const [open, setopen] = useState(false);
    const [name, setname] = useState('')

    const handleInputChange = (e) => {
        setname(e.target.value)
    }

    const openMondal = () => {
        setopen(true)
    }

    const closeModal = () => {
        setopen(false);
    }

    return (
    <>
        <Button onClick={openMondal} variant='outline-success' size="sm">
            <FontAwesomeIcon icon={faFolderPlus} />
        </Button>
        <Modal show={open} onHide={closeModal}>
            <Form>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nombre carpeta</Form.Label>
                        <Form.Control 
                            type="text"
                            required
                            value={name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>

                </Modal.Footer>
            </Form>
        </Modal>
    </>
    )
}
