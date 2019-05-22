import React from 'react';
import { connect } from 'react-redux'
import { 
	Card, 
	CardImg, 
	CardText, 
	CardBody,
	CardTitle, 
	CardSubtitle, 
	Button 
} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { getData } from '../actions/'
 
class ItemsList extends React.Component {
	constructor() {
		super();

		this.state = {
			selectedCategory: '',
		}
	}

	componentDidMount() {
		this.props.getData();
	}

	render() {
		return(
			<div className="items-list" >
				<h2 className="title" >Market</h2>
				<Form className="filters" inline>
	        <FormGroup>
	          <Label className='label' for="exampleSelect">{`Catagory:   `}</Label>
	          <Input type="select" name="select" id="exampleSelect">
	            <option>Cards</option>
	            <option>Video Games</option>
	          </Input>
	        </FormGroup>
	      </Form>
				<div className="cards-container" >
					{this.props.items.map( item => { 
						return <Card className="text-center" key={item.id} >
			        <CardBody>
			        	<CardTitle>{item.name}</CardTitle>
			        </CardBody>
		        	<div className='img-container'> 
		        		<CardImg className="card-img" top width="100%" src={item.imgUrl} alt="Card image cap" />
		          </div>
			        <CardBody>
			          <CardText className='price'>$9.99</CardText>
			          <Button>Add to Wishlist</Button>
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

export default connect(mapStateToProps, { getData })(ItemsList);