import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top HeadLines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title={"This is title"} description={"This is description"} />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title={"This is title"} description={"This is description"} />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title={"This is title"} description={"This is description"} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title={"This is title"} description={"This is description"} />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title={"This is title"} description={"This is description"} />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title={"This is title"} description={"This is description"} />
                    </div>
                </div>


            </div>
        )
    }
}

export default News
