import React from 'react';
import Wishlist from './dashboard-components/Wishlist.js';
import MyItems from './dashboard-components/MyItems.js';
import Transactions from './dashboard-components/Transactions.js'

class Dashboard extends React.Component {
	render() {
		return(
			<div className="dashboard-page">
				<h2 className="title">Dashboard</h2>
				<div className="dashboard">
					<Wishlist />
					<MyItems />
					<Transactions />
				</div>
			</div>
		);
	}
}

export default Dashboard;

