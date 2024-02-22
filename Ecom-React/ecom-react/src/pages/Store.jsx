import React from 'react'
import {Row, Col} from 'react-bootstrap'

const Store = () => {
  return (
    <div>
        <h1>Welcome to my Store!</h1>
        <Row xs={1} md={3} className='g-4'>
            <Col align="center">
            <h1>Product 1</h1>
            </Col>
            <Col align="center">
            <h1>Product 2</h1>
            </Col>
            <Col align="center">
            <h1>Product 3</h1>
            </Col>

        </Row>

    </div>
  )
}

export default Store