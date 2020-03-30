import React, { Component } from 'react'
import {WingBlank,InputItem,WhiteSpace,Button,Flex,Radio} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class sign extends Component {
    render() {
        return (
            <div style={{marginTop:'25px'}}>
               <WingBlank size="lg">
                    <InputItem
                        placeholder="请输入手机号"
                        clear
                    >
                    </InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        clear
                    >
                    </InputItem>
                    <InputItem
                        placeholder="请输入验证码"
                        clear
                        extra="获取验证码"
                    >
                        
                    </InputItem>
                    <WhiteSpace size="sm" />
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>我已同意 <span style={{color:'#00bc5b'}}>《用户服务协议》及《隐私权政策》</span></Radio>
                    <WhiteSpace size="xl" />
                    <Button type="primary" style={{backgroundColor:'#00bc5b'}}>注册</Button>
                    <WhiteSpace size="xl" />
                    <Flex justify="between">
                        <Link to="/login" style={{color:'#00bc5b'}}>已有账号</Link>
                        {/* <Link to="/sign">忘记密码？</Link> */}
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
