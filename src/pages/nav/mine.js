import React, { Component } from 'react'
import { List, WingBlank, Flex, WhiteSpace } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
export default class mine extends Component {
    state = {
        list: [
            { id: 1, src: 'integral', title: '我的积分' },
            { id: 2, src: 'subscription', title: '我的订阅' },
            { id: 3, src: 'relation', title: '微聊联系人' },
            { id: 4, src: 'computers', title: '房贷计算器' },
            { id: 5, src: 'star', title: '我的房子' },
            { id: 6, src: 'record', title: '我的看房记录' },
            { id: 7, src: 'mine', title: '我的问答' },
            { id: 8, src: 'install', title: '设置' },
        ],
        backpack: [
            { id: 1, src: 'bag', title: '钱包' },
            { id: 2, src: 'privilege', title: '优惠' },
            { id: 3, src: 'grades', title: '积分' },
        ]
    }
    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#58c9fc' }}>
                    <div>
                        <WhiteSpace size="sm" />
                        <WingBlank>
                            <Flex>
                                <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src={require('../../assets/images/head.jpg')} alt=''></img>
                                <div style={{ marginLeft: '15px' }}>
                                    <h1>登录 /注册</h1>
                                    <p>可以与经纪人发起聊天</p>
                                </div>
                            </Flex>
                        </WingBlank>
                    </div>
                    <div style={{paddingBottom:'20px'}}>
                        <WingBlank>
                            <Flex justify="between">
                                {this.state.backpack.map(res =>
                                    <div style={{textAlign:'center',color:'#ffffff'}} key={res.id}>
                                        <p>8</p>
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ width: '40px' }} src={require('../../assets/images/mine/' + res.src + '.png')} alt='' />
                                            <p>{res.title}</p>
                                        </div>
                                    </div>
                                )}
                            </Flex>
                        </WingBlank>
                    </div>
                </div>
                <div>
                    {this.state.list.map((res) =>
                        <List className="my-list" key={res.id}>
                            <Item
                                arrow="horizontal"
                                thumb={require('../../assets/images/mine/' + res.src + '.png')}
                                multipleLine
                                onClick={() => { }}
                            >
                                <Brief>{res.title}</Brief>
                            </Item>
                        </List>
                    )}
                    <List className="my-list">
                        <Item
                            arrow="horizontal"
                            multipleLine
                            onClick={() => { }}
                        >
                            <Brief>意见反馈</Brief>
                        </Item>
                    </List>
                </div>
            </div>
        )
    }
}
