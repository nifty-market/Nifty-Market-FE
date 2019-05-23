import React from 'react';
import { connect } from 'react-redux';

import { Table } from 'reactstrap';

class Transactions extends React.Component {
	render() {
		return(
			<div className="transactions" >
				<h4>Transactions</h4>
				<Table dark>
	        <thead>
	          <tr>
	            <th>#</th>
	            <th>Image</th>
	            <th>Item</th>
	            <th>Price</th>
	            <th>Date</th>
	          </tr>
	        </thead>
	        <tbody>
	          {this.props.transactions.map((item, i) => {
	          		return <tr key={item.id}>
			            <th scope="row">{i+1}</th>
			            <td><img height='40px' src={item.imgUrl}></img></td>
			            <td>{item.name}</td>
			            <td>${item.price}</td>
			            <td>date</td>
		          	</tr>
	          	})}
	        </tbody>
	      </Table>
	    </div>
		);
	}
}

const mapStateToProps = ({ transactions }) => ({
	transactions
});

export default connect(mapStateToProps, {})(Transactions);