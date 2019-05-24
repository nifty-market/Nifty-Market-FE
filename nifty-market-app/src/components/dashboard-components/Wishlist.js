import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
	Card, 
	CardImg, 
	CardText, 
	CardBody,
	CardTitle, 
	CardSubtitle, 
	Button 
} from 'reactstrap';

class Wishlist extends React.Component {
	render() {
		return(
			<div className="dash-section">
				<h4>Wishlist</h4>
				<div className="cards-container" >
					{this.props.wishlist.map( item => { 
						return <Card className="text-center" key={item.id} >
							<Link className="card-links" to={`/Market/${item.id}`}>
				        <CardBody>
				        	<CardTitle>{item.name}</CardTitle>
				        </CardBody>
			        	<div className='img-container'> 
			        		<CardImg className="card-img" top width="100%" src={item.imgUrl} alt="Card image cap" />
			          </div>
				        <CardBody>
				        	<CardText className='price'>$9.99</CardText>
				          <Button>Buy Now</Button>
				        </CardBody>
				      </Link>
			      </Card>
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ wishlist }) => ({
	wishlist
});

export default connect(mapStateToProps, {})(Wishlist);