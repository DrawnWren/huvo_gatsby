import React from 'react';
import Ajax from '../../../Ajax.js';
import './stylesheet.css';

export default class Gallery extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			gallery: [],
			loaded: false
		}
	}

	async componentDidMount(){
		try{
			let gallery = await Ajax.getAllGalleryImages();
			this.setState({
				gallery
			})
		}catch (e){
			console.error(e);
		}
	}


	render(){
		return(
			<div className='gallery-page'>
				<h3 className='gallery-tag'>Gallery</h3>
				{this.state.gallery.length <= 0 ? (
					<div className='gallery-container'>
						<h4>Check back soon for some new photos!</h4>
					</div>
				) : (
					<div className='gallery-container' style={this.state.loaded ? {}: {display: 'none'}}>
					{this.state.gallery.map(img => (
						<div key={img.id} className='gallery-single-image-container'>
							<img src={img.url} alt={img.caption} onLoad={()=> this.setState({loaded: true})}/>
							<div className='gallery-single-caption'>
								<p>{img.caption}</p>
							</div>
						</div>
					))}
					</div>
				)}
			</div>
		)
	}
}
