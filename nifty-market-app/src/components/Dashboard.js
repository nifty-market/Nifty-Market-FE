import React from 'react';
import Transactions from './dashboard-components/Transactions.js'

class Dashboard extends React.Component {
	render() {
		return(
			<div className="dashboard-page">
				<h2 className="dashboard-title">Dashboard</h2>
				<div className="dashboard">
					<h3>My Items</h3>
					<h3>Wishlist</h3>
					<Transactions />
				</div>
			</div>
		);
	}
}

export default Dashboard;