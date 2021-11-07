import React from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

 const Item = ({prods}) => {
    return (
        
            <Card style={{ width: '18rem' }} key={prods.id} >
                                      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                                      <Card.Body>
                                        <Card.Title>{prods.modelo}</Card.Title>
                                        <Card.Text>
                                          Some quick example text to build on the card title and make up the bulk of
                                          the card's content.
                                        </Card.Text>
                                      </Card.Body>
                                      <ListGroup className="list-group-flush">
                                        <ListGroupItem>{prods.memoria}</ListGroupItem>
                                        <ListGroupItem>{prods.precio}</ListGroupItem>                                
                                      </ListGroup>  
                                      <Card.Body>
                                        <Card.Link href="#">Ver mas Detalles</Card.Link>                                       
                                      </Card.Body>
                                  </Card>
                    )
                }

  export default Item
        
   