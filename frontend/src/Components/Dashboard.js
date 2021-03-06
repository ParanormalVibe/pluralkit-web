import React, { Component, Fragment as Frag } from 'react';
import System from './System';
import MemberList from './MemberList';
import Loading from './Loading';

class Dashboard extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			user: this.props.user, check: false};
	}

	async componentDidMount() {
		if(!this.state.user) {
			this.setState({user: null, check: true});
		} else {
			this.setState({check: true})
		}
	}

	render () {
		if(!this.state.check) {
			return (
				<Loading />
			);
		} else if(this.state.check && this.state.user) {
			return (
				<Frag>
				<h1 style={{textAlign: 'center'}}>System</h1>
				<System {...this.state.user} token={this.state.user.token} editable={true} />
				<div className="App-note">
				<p>
				<strong>Changes saved here may not be immediately reflected when using the bot on Discord.</strong>{" "}
				This is due to the bot caching data. If your changes aren't showing up, <strong>try editing{" "}
				a member (eg: [re]setting a displayname)</strong>. This will invalidate the cache and reflect{" "}
				your changes
				</p>
				</div>
				<h1 style={{textAlign: 'center'}}>Members</h1>
				<MemberList members={this.state.user.members} editable={true} token={this.state.user.token} />
				</Frag>
			);
		} else {
			return (
				<p>System not found D:</p>
			);
		}
	}
}

export default Dashboard;