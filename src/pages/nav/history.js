import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Flex ,WingBlank} from 'antd-mobile'
import { IP } from '../../api/api'
class history extends Component {
    render() {
        return (
            <div>
                <WingBlank>
                <h3>浏览历史</h3>
                {this.props.list.map(res =>


                    <Flex align="start" style={{ marginTop: "10px" }} key={res.id}>
                        <img alt='' src={IP + res.imgs} style={{ height: '120px', width: '90px' }} />
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
            </div>
        )
    }
}

export default connect((state) => {
    return {
        list: state
    }
})(history)
