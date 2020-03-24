import React, { Component } from 'react'
// import { HashRouter, Switch, Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import Home from './nav/home'
import Chat from './nav/chat'
import History from './nav/history'
import Mine from './nav/mine'
export default class naviga extends Component {
    state = {
        selectedTab: 'redTab',
        subnav: [
            { id: 1, src: 'home1', selesrc: 'home', titles: '首页', component: <Home></Home> },
            { id: 2, src: 'chat1', selesrc: 'chat', titles: '微聊', component: <Chat></Chat> },
            { id: 3, src: 'history1', selesrc: 'history', titles: '足迹', component: <History></History> },
            { id: 4, src: 'mine1', selesrc: 'mine', titles: '我的', component: <Mine></Mine> },
        ]
    }
    render() {
        return (
            <div>
                <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494" //未选中的字体颜色
                        tintColor="#33A3F4"   //选中的字体颜色
                        barTintColor="white"   //标签栏背景颜色
                    >
                        {this.state.subnav.map(res =>
                            <TabBar.Item
                                title={res.titles}
                                key={res.id}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require("../assets/images/subnav/" + res.src + ".png")}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require("../assets/images/subnav/" + res.selesrc + ".png")}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === res.id}
                                badge={1}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: res.id,
                                    });
                                }}
                            >
                                {res.component}
                            </TabBar.Item>)}

                    </TabBar>

                </div>
                {/* <HashRouter>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='nav/chat' component={Chat} />
                        <Route path='nav/history' component={History} />
                        <Route path='nav/mine' component={Mine} />
                    </Switch>
                </HashRouter> */}
            </div>
        )
    }
}
