import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import { products } from '../productData'
import CardProd from '../components/CardProd'

const Store = () => {
  return (
    <div>
        <h1>Welcome to my Store!</h1>
        <Row xs={1} md={3} className='g-4'>
            
            {products.map((i, idx) => (
              <Col align="center" key={idx}>
              <CardProd product={i}/>
              </Col>
            ))}
           
           

        </Row>

    </div>
  )
}

export default Store