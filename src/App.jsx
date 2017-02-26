import React, { Component } from 'react';
import './App.css';
import CommentExampleComment from './CommentExampleComment';
import MenuExampleBasic from './MenuExampleBasic';
import Article from './Article';
import CardV from './Card';
import { Header, Segment } from 'semantic-ui-react'

export default class App extends Component {
	render() {
		return (
			<div>
				<header>
					<Segment inverted color='violet'><Header as='h1'><a href="" id='header-id'>Defekty Kaliskie</a></Header></Segment>
					
						<nav>
							<MenuExampleBasic />
						</nav>

				</header>



<div id="content">
<Article />
<CardV />
</div>




<div id="comments">
	<CommentExampleComment />
</div>

	<footer>
		<div className="wrapper">
			<ul>
				<li><h4>Get In Touch</h4></li>
				<li>Fusce dapibus, tellus comodo, tortor mauris condimentum fermentum, porta sem malesuada magna.</li>
				<li>Moonshine Street No: 14/05</li>
				<li>Light City, Jupiter</li>
				<li>0247 541 65 87</li>
				<li>support@longwave.com</li>
			</ul>
			<ul>
				<li><h4>Twitter</h4></li>
				<li >Donec ullamcorper metus auctor fringilla. Nullam quis risus eget.</li>
				<li >Donec ullamcorper metus auctor fringilla. Nullam quis risus eget.</li>
				<li >Donec ullamcorper metus auctor fringilla. Nullam quis risus eget.</li>
			</ul>
			<ul>
				<li><h4>Popular Posts</h4></li>
				<li>Vivamus sagittis lacus vel augue laoreet rutrum dolor auctor. <br />14 Nov, 2012</li>
				<li>Vivamus sagittis lacus vel augue laoreet rutrum dolor auctor. <br />14 Nov, 2012</li>
				<li>Vivamus sagittis lacus vel augue laoreet rutrum dolor auctor. <br />14 Nov, 2012</li>
			</ul>
			<ul>
				<li><h4>About Us</h4></li>
				<li>Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, misi erat porttior ligula, eget lacinia odio sem nec elit.</li>
				<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus curabitur blandit tempus.</li>
			</ul>
			<div id="copyright">&copy; 2013 Marble. All rights reserved. Theme by elemis</div>
		</div>
	</footer>

			</div>
		);
	}
}
