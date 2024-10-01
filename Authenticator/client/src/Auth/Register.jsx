import React from 'react'
import {Card, Flex, Form, Typography, Input, Button} from 'antd'
import  RegisterImg  from '../assets/astro1.png'


import { Link } from 'react-router-dom';

const Register = () => {

  const handleRegister = (values) => {
         console.log(values);
         
  }
  return (
    <Card className='form-container'>
      <Flex gap='large' align='center'>
        { /*Form*/ }
        <Flex vertical flex={1}>
         <Typography.Title level={3} strong className='title'>Create an account</Typography.Title>
         <Typography.Text type='secondary' strong className='slogan'>join us!</Typography.Text>
         <Form layout='vertical' onFinish={handleRegister} className='slogan' autoComplete='off'>
          {/* Name */}
              <Form.Item 
              label="Full name"
              name='name'
              rules={
                [
                  {
                    required:true,
                    message:'please enter your full name'
                  }
                ]
              }
              >
               <Input placeholder='full name'/>
              </Form.Item>

              {/* Email */}
              <Form.Item 
              label="Email"
              name='email'
              rules={
                [
                  {
                    required:true,
                    message:'please enter your email'
                  },
                  {
                    type:'email',
                    message:'Invalid email!'
                  }
                ]
              }
               validateTrigger="onBlur"
              >
               <Input placeholder='Email'/>
              </Form.Item>

                {/* Email */}
                <Form.Item 
              label="Password"
              name='password'
              rules={
                [
                  {
                    required:true,
                    message:'please enter your password'
                  }
                ]
              }
               validateTrigger="onBlur"
              >
              <Input.Password size='large' placeholder='Enter Your password'/>
              </Form.Item>
              <Form.Item>
                <Button
                type='primary'
                htmlType='submit'
                size='large'
                className='btn'
                >Create Account</Button>
              </Form.Item>

              <Form.Item>
                <Link to="/login">
                <Button
                size='large'
                className='btn'
                >Login</Button>
                </Link>
              </Form.Item>
        </Form>
        </Flex>

        

       
        <Flex align='center'>
        <img src={RegisterImg} alt="" className='auth-img'/>
        </Flex>
      </Flex>
    </Card>
  )
}

export default Register