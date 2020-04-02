import React from 'react';
import IconButton from '../template/inconButton';

export default props => {

    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={ todo._id }>
                <td>
                    { todo.description }
                </td>
                <td>
                    <IconButton
                        style="danger"
                        icon="trash-o"
                        onClick={ () => props.handleRemove(todo._id) }
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Descri��o
                    </th>
                    <th>
                        A��es
                    </th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    )
}