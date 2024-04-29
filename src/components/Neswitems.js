import React, { Component } from 'react'

export class Neswitems extends Component {
    render() {
      let {title, description,img , newsurl} = this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={!img?"https://prtimes.jp/i/130225/2/ogp/d130225-2-2956a96a524da7d4c899-0.png":img } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title?title:"There is some title"}...</h5>
                <p className="card-text">{description?description:"There is some Description"}...</p>
                <a href= {newsurl}  className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
  }
}

export default Neswitems
