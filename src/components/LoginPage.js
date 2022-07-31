import React from 'react'
import {Checkbox, Form, Input,Button } from 'antd';
import '../App.css'
import "antd/dist/antd.css";
import { useState } from 'react';
const LoginPage = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
  
const Logindata={
    "email": email,
    "password": password
  }

  async function fetchData(){
    await fetch('https://reqres.in/api/login', {
        method: 'POST', body: JSON.stringify({"email":email,"password":password})
        ,headers: {
          "Content-type": "application/json; charset=UTF-8"
      }})
         .then(response => response.json())
         .then(data => {
         console.log(data) 
         })
  }

  const handleLogin=()=>{
    console.log(Logindata)
    fetchData()
  }
  return (
    <>
   <nav className="navbar">
    <h2>ATools</h2>
   </nav>
    <div className="container">
    <div className="formContainer">
      <h1>Welcome back</h1>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input  placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} size='large' />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
        size='large'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
      </Form.Item>
      <Form.Item>
    <Button type="primary" onClick={handleLogin} block>
      Login
    </Button>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="">
          Forgot password?
        </a>
      </Form.Item>
    </Form>
    </div>
    <div className="imgContainer">
    </div>
    </div>
    </>
  )
}

export default LoginPage