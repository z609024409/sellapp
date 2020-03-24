import React, { Component } from 'react'
import { InputItem, Button, WingBlank, WhiteSpace, Flex } from 'antd-mobile'
import { Link } from "react-router-dom"
import {logins} from '../api/api'
export default class login extends Component {
    state = {
        username: '',
        pwd: ''
    }
    render() {
        let { username, pwd } = this.state
        return (
            <div>
                <WingBlank size="lg">
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        value={username}
                        onChange={(val)=>{this.setState({username:val})}}
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="sm" />
                    <InputItem
                        placeholder="请输入密码"
                        clear
                        value={pwd}
                    onChange={(val)=>{this.setState({pwd:val})}}
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="xl" />
                    <Button type="primary" onClick={this.loginon.bind(this)}>small</Button>
                    <WhiteSpace size="xl" />
                    <Flex justify="between">
                        <Link to="/">手机快速注册</Link>
                        <Link to="/sign">忘记密码？</Link>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
    loginon() {
        logins(this.state.username, this.state.pwd).then((res) => {
            if (res.data === 'ok') {
                // window.location.href = '/#/'
                this.props.history.push('/')
            } else {
                alert('请输入正确的用户名')
            }
        })
    }
}
