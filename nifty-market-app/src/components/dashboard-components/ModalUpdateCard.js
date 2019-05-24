import React from 'react';
import { connect } from 'react-redux';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { newCard } from '../../actions/'


class ModalAddNewCard extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      modal: false,
	    newCard: {
	    	name: '',
	      price: '',
	      category: '',
	      subcategory: '',
	      description: ''
    	}
    };

    this.toggle = this.toggle.bind(this);
  }

	toggle() {
    this.setState(prevState => ({
    	...this.state,
      modal: !prevState.modal
    }));
  }

  handleChange = e => {
  	console.log(e.target.value)
  	this.setState({
  		...this.state,
  		newCard: {
  			...this.state.newCard,
  			[e.target.name]: e.target.value
  		}
  	})
  }

  handleSubmit = e => {
  	e.preventDefault();
  	this.props.newCard(this.state.newCard);
  }

	render() {
		return(
			<div className="my-items dash-section"><Button className='update' onClick={this.toggle}>Update</Button>
        <Button color="success" onClick={this.toggle}>Add An Item</Button>
	        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
	          <ModalHeader  toggle={this.toggle}>Add a Card</ModalHeader>
	          <ModalBody>
	          <Form>
			        <FormGroup>
			          <Label for="Name">Name</Label>
			          <Input onChange={this.handleChange} type="text" name="name" id="name" placeholder="" />
			        </FormGroup>
			        <FormGroup>
			          <Label for="price">Price</Label>
			          <Input onChange={this.handleChange} type="text" name="price" id="price" placeholder="" />
			        </FormGroup>
		          <FormGroup>
			          <Label for="category">Category</Label>
			          <Input onChange={this.handleChange} type="select" name="category" id="category" >
			            <option></option>
			            <option>card</option>
			            <option>gameitem</option>
			            <option>videogame</option>
			          </Input>
			        </FormGroup>
			        <FormGroup>
			          <Label for="subcategory">Subcategory</Label>
			          <Input onChange={this.handleChange} type="select" name="subcategory" id="subcategory">
			            <option></option>
			            <option>Magic</option>
			            <option>YuGiOh</option>
			            <option>Pokemon</option>
			            <option>Runescape</option>
			            <option>Guild Wars 2</option>
			            <option>Diablo III</option>
			            <option>Diablo III</option>
			            <option>First Person Shooter</option>
			            <option>RPG</option>
			            <option>Fighting</option>
			            <option>Adventure</option>
			          </Input>
			        </FormGroup>
			        <FormGroup>
			          <Label for="description">Description</Label>
			          <Input onChange={this.handleChange} type="textarea" name="description" id="description" />
			        </FormGroup>
			      </Form>
	          </ModalBody>
	          <ModalFooter>
	            <Button color="primary" onClick={this.handleSubmit}>Add +</Button>{' '}
	            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
	          </ModalFooter>
	        </Modal>
			</div>
		)
	}
}

export default connect(null, { newCard })(ModalAddNewCard);
