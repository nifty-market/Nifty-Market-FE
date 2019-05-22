import React from 'react';
import { Table } from 'reactstrap';

class Transactions extends React.Component {
	render() {
		return(
			<div className="transactions" >
				<h3>Transactions</h3>
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
	          <tr>
	            <th scope="row">1</th>
	            <td>Mark</td>
	            <td>Otto</td>
	            <td>@mdo</td>
	            <td>@mdo</td>
	          </tr>
	          <tr>
	            <th scope="row">2</th>
	            <td>Jacob</td>
	            <td>Thornton</td>
	            <td>@fat</td>
	            <td>@fat</td>
	          </tr>
	          <tr>
	            <th scope="row">3</th>
	            <td>Larry</td>
	            <td>the Bird</td>
	            <td>@twitter</td>
	            <td>@twitter</td>
	          </tr>
	        </tbody>
	      </Table>
	    </div>
		);
	}
}

export default Transactions;