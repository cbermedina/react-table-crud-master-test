
import React from "react";
import PropTypes from 'prop-types';

const tableHeader = (props) => {
    return (
        <thead>
            <tr>
                {props.columns.map((column) => (
                    <th key={column.path || column.key}>
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
tableHeader.protoType = {
    columns:PropTypes.object.isRequired
};
export default React.memo(tableHeader);
