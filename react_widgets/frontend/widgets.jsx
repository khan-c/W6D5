import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Widgets />, root);
});

class Widgets extends React.Component {
	render() {
		return (
			<div>
				<Clock />
				<Tabs tabs = { tabs } />
			</div>
		);
	}
}


const tabs = [
		{
			title: "tab1",
			content: "this is tab 1"
		},
		{
			title: "tab2",
			content: "tab 2bular"
		},
		{
			title: "tab3",
			content: "tab 3bee"
		}
	];
