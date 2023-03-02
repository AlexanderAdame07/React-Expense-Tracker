import React from 'react';
import Table from 'react-bootstrap/Table'

function Display ({ expenseArray }) {
   
   const deleteRow = (e) => {
        const target = e.target.parentElement.parentElement;
        target.remove();
   }


   expenseArray.sort((a, b) => a.date < b.date ? 1 : -1);

    const expenseTable = expenseArray.map((expense) => {
        return (
            <tr id={Math.random()} key="id">
                <td>{expense.type}</td>
                <td>{expense.vendor}</td>
                <td>{expense.date}</td>
                <td>${parseFloat(expense.amount).toFixed(2)}</td>
                <td><button id="button" onClick={deleteRow}>X</button></td>
            </tr>
        )
    })

    return (
        <Table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Vendor</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                { expenseTable }
            </tbody>
        </Table>
    )
}

export default Display;