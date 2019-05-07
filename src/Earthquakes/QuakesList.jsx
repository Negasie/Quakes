import React, { Component } from 'react';



const QuakesList = (props) => {

	const quakesList = props.quakes.map((info, i) => {
		return (
			<div key ={i}>

			<ul>
			<li >Location: {props.info}</li>
			</ul>
			</div>
		)
	});

return (
	<div><h4>Earthquakes List</h4>
		<ul>
		{quakesList}
		</ul>

	</div>
		)
};





export default QuakesList;