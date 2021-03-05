import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { AddFolderButton } from './Buttons/AddFolderButton'
import { NavComponent } from './NavComponent'

export const Dashboard = () => {
    return (
        <Fragment>
            <NavComponent />
            <Container fluid>
                <AddFolderButton />
            </Container>
            
            
        </Fragment>
    )
}
