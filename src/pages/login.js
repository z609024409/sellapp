import React, { Component } from 'react'
import { InputItem, Button, WingBlank, WhiteSpace, Flex } from 'antd-mobile'
import { Link } from "react-router-dom"
import { logins } from '../api/api'
export default class login extends Component {
    state = {
        username: '',
        pwd: ''
    }
    render() {
        let { username, pwd } = this.state
        return (
            <div style={{ backgroundColor: '#ffffff', height: '100%' }}>
                <div style={{ textAlign: 'center', padding: '45px 0' }}>
                    <img src={require('../assets/images/timg.jpg')} alt='' style={{ width: '150px', filter: 'drop-shadow(1100px 10px 10px #f5f5f9)' }}></img>
                </div>
                <WingBlank size="lg" style={{ backgroundColor: '#f5f5f9' }}>
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        value={username}
                        onChange={(val) => { this.setState({ username: val }) }}
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="sm" />
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        value={pwd}
                        onChange={(val) => { this.setState({ pwd: val }) }}
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                </WingBlank>
                <WingBlank>
                    <WhiteSpace size="xl" />
                    <Button type="primary" onClick={this.loginon.bind(this)} style={{ backgroundColor: '#00bc5b' }}>登录</Button>
                    <WhiteSpace size="xl" />
                    <Flex justify="between">
                        <Link to="/sign" style={{ color: '#00bc5b' }}>手机快速注册</Link>
                        <Link to="" style={{ color: '#00bc5b' }}>忘记密码？</Link>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
    loginon() {
        logins(this.state.username, this.state.pwd).then((res) => {
            if (res.data === 'ok') {
                // window.location.href = '/#/'
                console.log(this.props.history);
                
                this.props.history.push('/')
            } else {
                alert('请输入正确的用户名')
            }
        })
    }
}
