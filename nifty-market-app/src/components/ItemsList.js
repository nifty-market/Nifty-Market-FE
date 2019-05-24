import React from 'react';
import { Link } from 'react-router-dom'
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
			selectedCategory: 'all',
			selectedSubCategory: 'all',
			filteredItems: []
		}
	}

	componentDidMount() {
		this.setState({
			...this.state,
			filteredItems: this.props.items,
		})
	}

	changeCategory = e => {
		// console.log(this.props.items);
		let newCategory = e.target.value.toLowerCase().replace(/[s ]/g, '');

		console.log(newCategory);

		let filtered = 
		this.state.selectedCategory !== 'all' ? 
		( this.props.items.filter(item => String(item.category) === String(newCategory)) ) : 
		( this.props.items )

		console.log("filtered:"+filtered);
		this.setState({
			...this.state,
			selectedCategory: newCategory,
			filteredItems: filtered
		})
	}

	changeSubCategory = e => {
		let newSubCategory = e.target.value.toLowerCase().replace(' ', '');

		console.log(newSubCategory);

		let filtered = 
		this.state.selectedCategory === 'al' ?
		(this.props.items) :
		(this.props.items.filter(item => String(item.subcategory) === String(newSubCategory))) 

		console.log("filtered:"+ filtered);
		this.setState({
			...this.state,
			selectedSubCategory: newSubCategory,
			filteredItems: filtered
		})
	}

	render() {
		console.log(this.props.items)		
		return(
			<div className="items-list" >
				<h2 className="title" >Market</h2>

				//Filters
				<Form className="filters" inline>
	        <FormGroup>
	          <Label className='label' for="exampleSelect">{'Category:'}</Label>
	          <Input onChange={this.changeCategory} type="select" name="select" id="exampleSelect">
	            <option>All</option>
	            <option>Cards</option>
	            <option>Game Items</option>
	            <option>Video Games</option>
	          </Input>
	          
	          {this.state.selectedCategory !== 'all' && <Label className='label' for="exampleSelect">{'Sub-Category:'}</Label>}
	          {this.state.selectedCategory==='card' && <Input onChange={this.changeSubCategory} type="select" name="select" id="exampleSelect">
	            <option>All</option>
	            <option>Magic</option>
	            <option>YuGiOh</option>
	            <option>Pokemon</option>
	          </Input>}
	          {this.state.selectedCategory==='gameitem' && <Input onChange={this.changeSubCategory} type="select" name="select" id="exampleSelect">
	            <option>All</option>
	            <option>Runscape</option>
	            <option>Guild Wars 2</option>
	            <option>Diablo III</option>
	          </Input>}
	          {this.state.selectedCategory==='videogame' && <Input onChange={this.changeSubCategory} type="select" name="select" id="exampleSelect">
	            <option>All</option>
	            <option>First Person Shooter</option>
	            <option>RPG</option>
	            <option>Fighting</option>
	            <option>Adventure</option>
	          </Input>}
	        </FormGroup>
	      </Form>

	      //Item display
				<div className="cards-container" >
					{this.state.filteredItems.map( item => { 

						//Card
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
				          <Button>Add to Wishlist</Button>
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

const mapStateToProps = ({ items }) => ({
	items
});

export default connect(mapStateToProps, { getData })(ItemsList);