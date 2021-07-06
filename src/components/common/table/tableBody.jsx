import React from "react";
import PropTypes from 'prop-types';
import _ from "lodash";
const tableBody = ({ data, columns }) => {
    const renderCell = (item, column) => {
        if (column.content) return column.content(item);
        return _.get(item, column.path);
    }
    const createKey = (column,columnIndex) => {
        return `${columnIndex}${(column.path || column.key)}`;
    }
    const setClass = (item,column)=>{
        return item.checked && column.setColor? "checked-item" : "";
    };
    const renderTd = (column,item,columnIndex)=>{
        return <td
            key={createKey(column,columnIndex)}
            className={setClass(item,column)}
            onClick={item.checked && column.isDetail?()=>column.isDetail(item):()=>{}} >
            {
                column.homologate?
                    column.homologate(renderCell(item, column)):
                    renderCell(item, column)
            }
        </td>
    };
    return (
        <tbody>
        {
            data.map((item,index) => (
                <tr key={index} >
                {
                    columns.map((column, columnIndex) => (renderTd(column,item,`${index}-${columnIndex}`)))
                }
                </tr>
            ))
        }
        </tbody>
    );
}
tableBody.protoType = {
    columns:PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
};
export default React.memo(tableBody);