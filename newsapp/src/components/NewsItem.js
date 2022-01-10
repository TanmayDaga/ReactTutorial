import React, { Component } from 'react'

export class NewsItem extends Component {

    
    
    render() {
        let {title, description,imageUrl} = this.props;
        return (
            <div>
                <div className ="card my-3" style={{width:"18rem"}}>
   
                        <div className ="card-body">
                            <img src={imageUrl} className='card-img-top' alt='...'/>
                            <h5 className ="card-title">{title}</h5>
                            <p className ="card-text">{description}</p>
                            <a href="/" className ="btn btn-primary btn-sm">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
