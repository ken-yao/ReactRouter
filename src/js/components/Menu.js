import React from "react";
import { Link } from 'react-router';

export default class Menu extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            menus: [
                {title: '首页', url: '/'},
                {title: '关于我们', url: '/about'},
                {title: '服务范围', url: '/services'},
                {title: '新闻中心', url: '/news'},
                {title: '联系我们', url: '/contact'}
            ]
        }    
    }
    
	render(){
		return (
            <div>
                <nav>
                    <ul>
                        {
                            this.state.menus.map((menu) => {
                                return (
                                <li><Link to={menu.url}>{menu.title}</Link></li> 
                                );
                            })
                        }
                    </ul>
                </nav>
                {this.props.children}
            </div>
		);
	}
}