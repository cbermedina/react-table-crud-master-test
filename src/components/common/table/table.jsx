import React from "react";
import PropTypes from 'prop-types';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import "./table.css";

const table = ({ columns, data }) => {
	return (
		<table className="table">
			<TableHeader columns={columns}/>
			<TableBody data={data} columns={columns} />
		</table>
	);
};
table.protoType = {
    columns:PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};
export default React.memo(table);
