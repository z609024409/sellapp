import React, { Component } from 'react'
import BScroll from 'better-scroll'
import city from '../json/city.json'

export default class locations extends Component {
    state = {
        citys: [],
        curIndex: 0,
        list: []
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100%' }}>
                <div id='left' style={{ width: '100%', height: '100%', overflow: 'scroll',marginTop:'20px' }}>
                    <ul className="content">
                        {this.state.citys.map((res, i) =>

                            <div id={res.title} key={res.title}>
                                <h4>{res.title}</h4>
                                {
                                    res.lists.map(obj =>
                                        <p key={obj}>{obj}</p>
                                    )}
                            </div>

                        )}

                    </ul>
                </div>
                <h3>城市</h3>
                <div ref='right' style={{ height: '100%', overflow: 'scroll', marginRight: '20px' }}>
                    {this.state.citys.map((res, i) =>
                        <p onClick={this.rightChoose} key={res.title}>
                            {res.title}
                        </p>
                    )}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            citys: city.city
        })
        this.toleft = new BScroll(document.getElementById("left"));
    }
       rightChoose = (e) => {
        //    var title=e.target.innerHTML
            this.toleft.scrollToElement(document.getElementById(e.target.innerHTML), 600);
        }
}
