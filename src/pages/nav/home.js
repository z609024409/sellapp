import React, { Component } from 'react'
import { SearchBar, Carousel, WingBlank, WhiteSpace, Flex } from 'antd-mobile'
import { shops } from '../../api/api'
// import { Link } from 'react-router-dom'
export default class home extends Component {
    render() {
        return (
            <div style={{ height: '100%', overflow: 'scroll' }}>
                {/*  顶部搜索栏 */}
                {/* <ul className='content' style={{marginLeft:'none'}}> */}
                    <Flex justify="between" style={{ backgroundColor: '#00bc5b', padding: '5px 10px', width: '100%' }}>
                        <div onClick={this.getUrl.bind(this, 'maplist')}>{this.state.citys}▽</div>
                        <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} style={{ width: "70%", backgroundColor: '#00bc5b' }} />
                        <div onClick={this.getUrl.bind(this, 'locations')}>位置</div>
                    </Flex>
                    <Carousel autoplay={true} infinite>
                        {this.state.data.map(val => (
                            <div style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight}} key={val.id}>
                                <img src={val.src} style={{ width: '100%', verticalAlign: 'top' }} alt='' />
                            </div>
                        ))}
                    </Carousel>
                    <WhiteSpace size="sm" />
                    <WingBlank>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", textAlign: "center" }}>
                            {
                                this.state.list.map(res =>
                                    <div style={{ width: '23%' }} key={res.id}>
                                        <div className="sub-title" style={{ backgroundColor: res.col, padding: "5px", borderRadius: "50%", margin: '10px 0' }}><img alt='' src={res.src} style={{ width: '50px' }} /></div>
                                        <p>{res.titles}</p>
                                    </div>
                                )}
                        </div>
                    </WingBlank>
                    <WhiteSpace size="lg" />
                    <WingBlank>
                        <Flex align="start">
                            <span style={{ fontSize: '18px', color: '#00bc5b' }}>房产全百科</span><span>专业的买房政策</span>
                        </Flex>
                        <Flex justify="between" style={{ textAlign: "center" }}>
                            {
                                this.state.policy.map(res =>
                                    <div style={{ width: '22%' }} key={res.id}>
                                        <div className="sub-title" style={{ padding: "10px", borderRadius: "50%", margin: '10px 0' }}><img alt='' src={res.src} style={{ width: '40px' }} /></div>
                                        <p>{res.titles}</p>
                                    </div>
                                )}
                        </Flex>
                    </WingBlank>
                    <WhiteSpace size="lg" />
                    <WingBlank>
                        <span style={{ fontSize: '18px' }}> 猜你喜欢</span>
                        {this.state.shop.map(res =>
                            <Flex align="start" style={{ marginTop: "10px" }} key={res.id}>
                                <img alt='' src={require("../../assets/images/project/1.jpg")} style={{ height: '120px', width: '90px' }} />
                                <Flex justify="between" style={{ flex: 1 }}>
                                    <div style={{ marginLeft: '15px' }}>
                                        <h3>{res.name}</h3>
                                        <p>{res.area}.{res.range}</p>
                                        <p>{res.type}</p>
                                    </div>
                                    <div>
                                        <p style={{ color: '#ff1515', fontSize: '18px', fontWeight: 'bold' }}>{res.price}元/平</p>
                                    </div>
                                </Flex>
                            </Flex>
                        )}
                    </WingBlank>
                {/* </ul> */}
            </div>
        )
    }
    state = {
        data: [{ id: 1, src: require('../../assets/images/1.jpg') }, { id: 2, src: require('../../assets/images/2.jpg') }, { id: 3, src: require('../../assets/images/3.jpg') },],
        imgHeight: 176,
        list: [
            { id: 1, src: require('../../assets/images/新房 (1).png'), titles: '新房', col: '#ff5a5f' },
            { id: 2, src: require('../../assets/images/二手房.png'), titles: '二手房', col: '#a782b9' },
            { id: 3, src: require('../../assets/images/租房提取.png'), titles: '租房', col: '#f6d149' },
            { id: 4, src: require('../../assets/images/写字楼.png'), titles: '写字楼', col: '#f9db9f' },
            { id: 5, src: require('../../assets/images/消息 (1).png'), titles: '卖房', col: '#ffa650' },
            { id: 6, src: require('../../assets/images/飞行 旅游 出差 飞机 800.png'), titles: '海外房地产', col: '#57aff8' },
            { id: 7, src: require('../../assets/images/房地产.png'), titles: '小区房价', col: '#00e4dd' },
            { id: 8, src: require('../../assets/images/问答.png'), titles: '问答', col: '#d29bcb' }
        ],
        policy: [
            { id: 1, src: require('../../assets/images/dkw_贷款-31.png'), titles: '我要贷款' },
            { id: 2, src: require('../../assets/images/计算机 算数.png'), titles: '房贷计算' },
            { id: 3, src: require('../../assets/images/知识.png'), titles: '知识' },
            { id: 4, src: require('../../assets/images/扫一扫.png'), titles: '扫一扫' }
        ],
        citys: '定位中',
        shop: []
    }
    componentDidMount() {
        this.showCityInfo();
        shops().then(res => {
            this.setState({
                shop: res.data
            })
        })
    }
    showCityInfo() {
        //实例化城市查询类
        // console.log(window)
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity((status, result) => {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    this.setState({
                        citys: result.city
                    })
                }
            } else {
                document.getElementById('info').innerHTML = result.info;
            }
        });
    }
    getUrl(url) {
        // this.props.history.push(url)
        window.location.href = '/#/' + url
        // this.props.history.push(url)
    }
}
