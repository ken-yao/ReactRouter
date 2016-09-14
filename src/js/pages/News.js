import React from "react";
import { Link } from 'react-router';

export default class News extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            newsList: [
                {id: 1, title: 'news1', content: 'content1'},
                {id: 2, title: 'news2', content: 'content2'},
                {id: 3, title: 'news3', content: 'content3'},
                {id: 4, title: 'news4', content: 'content4'},
                {id: 5, title: 'news5', content: 'content5'}
            ]
        }
    }
    
	render(){
		return (
            <div>
                <h1>News</h1>
                <ul>
                    {
                        this.state.newsList.map((news) => {
                            return (
                                <li key={news.id}><Link to={`/news/${news.id}`}>[{news.id}] {news.title}</Link></li>
                            );
                        })
                    }
                </ul>
                {this.props.children}
            </div>
        );
	}
}