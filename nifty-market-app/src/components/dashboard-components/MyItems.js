import React from 'react';
import { connect } from 'react-redux';

import { Table } from 'reactstrap';
import {
	Card, 
	CardImg, 
	CardText, 
	CardBody,
	CardTitle, 
	CardSubtitle, 
	Button 
} from 'reactstrap';

class MyItems extends React.Component {

	componentDidMount() {
		console.log(this.props.userItems)
	}

	render() {
		return(
			<div>
				<Table dark>
	        <thead>
	          <tr>
	            <th>#</th>
	            <th>Item</th>
	            <th>Price</th>
	            <th>Date</th>
	          </tr>
	        </thead>
	        <tbody>
	          	{this.props.userItems.map((item, i) => {
	          		return <tr key={item.id}>
			            <th scope="row">{i+1}</th>
			            <td>{item.name}</td>
			            <td>$9.99</td>
			            <td>date</td>
		          	</tr>
	          	})}
	        </tbody>
	      </Table>
			</div>
		);
	}
}

const mapStateToProps = ({ userItems }) => ({
	userItems
});

export default connect(mapStateToProps, {})(MyItems);