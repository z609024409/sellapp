import React, { Component } from 'react'

export default class map extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
              <div id='container' style={{ width: '100%', height: '100%' }}></div>
            </div>
        )
    }
    componentDidMount() {
        this.showcity()
    }
    showcity() {
        var map = new window.AMap.Map('container', {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        // that=this
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    // var cityinfo = result.city;
                    var citybounds = result.bounds;
                    map.setBounds(citybounds);
                }
            }
        });
    }
}
