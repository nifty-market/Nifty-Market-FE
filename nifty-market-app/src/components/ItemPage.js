import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class ItemPage extends React.Component {
	constructor() {
		super()
		this.state = {
	    item: {},
	    user: {}
	  };
	}

  componentDidMount() {
		const thisItem = this.props.items.filter(item => 
				(parseInt(item.id) === parseInt(this.props.match.params.id))
	  	)[0]

    this.setState({
    	item: thisItem,
	  	user: thisItem.user
    })
  }

	render() {
		return(
			<div className='item-page'>
				{console.log(this.state.item)}
				<h1 className="title" >{this.state.item.name}</h1>
				<div className="mid-container">
					<img className="item-img" src={this.state.item.imgUrl} />
					<div className="buy-now-section">
						<h2>$9.99</h2>
						<Button>Buy Now</Button>
						<Button>Add to Wishlist</Button>
					</div>
				</div>

				<div className="lower-container">
					<h5>Seller: {this.state.user.username}</h5>
					<h6>{this.state.item.description}</h6>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ items }) => ({
	items
});

export default connect(mapStateToProps, {  })(ItemPage);