import React from 'react'
import {Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Landing() {

  // function defenition
  // redirect cheyyan useNavigate use cheyyuka

  const navigate=useNavigate()

  const handleNavigate=()=>{

    navigate('/home')

  }


  return (
    <div>

  <Row className='align-items-center'>

    <Col></Col>
    
    <Col lg={6}>

    <h1>WELCOME TO VIDEOOO.COM</h1>

<p style={{textAlign:'justify'}}>where user can their favourite videooos.user can upload my youtube videos by copy and paste  their url in to Videooo.com will allow to add and remove their uploaded videos 
and also arrange them in different categories by drag and drop it is free try it now!!!</p>

<button onClick={handleNavigate} className='btn btn-success'>Click Here to Know More</button>

    </Col>



    <Col lg={5}>

    <img className='img-fluid' width={'500px'} height={'350px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgN2bmGVRTsAvxqusA8PIEp-ucJjr7i58uXg&usqp=CAU" alt="no image" />

    </Col>


  </Row>

    </div>
  )
}

export default Landing