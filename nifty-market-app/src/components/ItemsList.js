import React from 'react';
import { connect } from 'react-redux'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
 
class ItemsList extends React.Component {
	render() {
		return(
			<div className="items-list">
				<h2 className="title" >Title</h2>
				<div className="cards-container" >
					{this.props.items.map( item => { 
						return <Card key={item.id}>
			        <CardImg top width="100%" src="item.img" alt="Card image cap" />
			        <CardBody>
			          <CardTitle>{item.name}</CardTitle>
			          <CardText>{item.description}</CardText>
			          <Button>Buy Now</Button>
			        </CardBody>
			      </Card>
					})}
				</div>
			</div>
		);
	}
} 

const mapStateToProps = ({ items }) => ({
	items
});

export default connect(mapStateToProps, {})(ItemsList);