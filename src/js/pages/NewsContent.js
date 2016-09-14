import React from "react";

export default class NewsContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newsList: [
                {id: 1, title: 'news1', content: 'content1'},
                {id: 2, title: 'news2', content: 'content2'},
                {id: 3, title: 'news3', content: 'content3'},
                {id: 4, title: 'news4', content: 'content4'},
                {id: 5, title: 'news5', content: 'content5'}
            ],
            news: {}
        }
    }
    
    componentDidMount(){
        for(var i=0; i < this.state.newsList.length; i++){
            if(this.state.newsList[i].id == parseInt(this.props.params.id)){
                this.setState({
                    news: this.state.newsList[i]
                })
            }
        }
    }
    
	render(){
        return (
            <div>
                <h1>NewsContent</h1>
                <p>{this.props.params.id}</p>
                <p>{this.state.news.content}</p>
            </div>
        );
	}
}