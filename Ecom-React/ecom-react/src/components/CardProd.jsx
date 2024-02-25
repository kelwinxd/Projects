import React from 'react'
import {Card, Button, Form, Row, Col} from 'react-bootstrap'

const CardProd = (props) => {

  const product = props.product
  return (
    <Card>
       <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button>Add to cart</Button>
        </Card.Body> 
    </Card>
  )
}

export default CardProd