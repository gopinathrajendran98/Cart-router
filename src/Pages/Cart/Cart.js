import React from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function BasicExample() {
  const list = [{
img1:"https://imagescdn.thecollective.in/img/app/product/8/879790-10555459.jpg?w=206&auto=format",    
title:"Shirt",
description:"Denim Shirt"
},{
  img1:"https://imagescdn.planetfashion.in/img/app/product/8/805374-9547582.jpg?auto=format&w=494.40000000000003",
title:"Pant",
description:"Jeans pant"
  }
  ]
  let navigate = useNavigate();
  const routeChange = () =>{
    let Details='/Details';
    navigate(Details)
  }
  return (
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 2 }).map((_, idx) => (
      <Col key={idx}>
    <div style={{display:"flex",alignItems:"left"}}>
    {
      list.map((obj)=>{
        return(
          <Card style={{ width:"400px",margin:"20px"}} onClick={routeChange}>
          <Card.Img variant="top" src={obj.img1} cap/>
          <Card.Body>
            <Card.Title>{obj.title}</Card.Title>
            <Card.Text>
              {obj.description}
            </Card.Text>
            <Button variant="primary">Add</Button>
          </Card.Body>
        </Card>
        )
      })
    }
    </div>
    </Col>
      ))}
    </Row>
  )
}
  
export default BasicExample;