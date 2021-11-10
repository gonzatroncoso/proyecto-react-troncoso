import React  from 'react'

import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'

const ItemDetail = ({productos})  =>  {
    console.log(productos)

    return (
        <>

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="#"/>
            <Card.Body>
                <Card.Title> {productos} </Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">BOTON</Button>
            </Card.Body>
        </Card>
        </>
    )
}
export default ItemDetail;