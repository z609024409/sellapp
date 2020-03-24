import React, { Component } from 'react'
import { Button } from 'antd-mobile'
export default class chat extends Component {
    render() {
        return (
            <div style={{position:'relative'}}>
                <div style={{position:"absolute", textAlign: 'center', top: 0, bottom: 0, left: 0, right: 0,margin:'auto', marginTop:'45%'}}>
                    <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={require('../../assets/images/head.jpg')} alt=''></img>
                    <p>置业顾问：<span></span></p>
                    <p>专业服务诚信做人诚心做事</p>
                    <Button type="primary" size="small">我要聊天</Button>
                </div>
            </div>
        )
    }
}
