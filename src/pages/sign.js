import React, { Component } from 'react'
import {WingBlank,InputItem,WhiteSpace,Button,Flex,Radio} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class sign extends Component {
    render() {
        return (
            <div>
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
                        placeholder="请输入密码"
                        clear
                    >
                    </InputItem>
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>我已同意</Radio>
                    <WhiteSpace size="xl" />
                    <Button type="primary">注册</Button>
                    <WhiteSpace size="xl" />
                    <Flex justify="between">
                        <Link to="/login">已有账号</Link>
                        {/* <Link to="/sign">忘记密码？</Link> */}
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
