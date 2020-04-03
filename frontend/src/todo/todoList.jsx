import React from 'react';
import IconButton from '../template/inconButton';

export default props => {

    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={ todo._id }>
                <td className={ todo.done ? 'markedAsDone' : '' }>
                    { todo.description }
                </td>
                <td>
                    <IconButton 
                        style="success"
                        icon="check"
                        hide={ todo.done }
                        onClick={ () => props.handleMarkAsDone(todo._id)}
                    />

                    <IconButton 
                        style="warning"
                        icon="undo"
                        hide={ !todo.done }
                        onClick={ () => props.handleMarkAsPending(todo._id) }
                    />
                    <IconButton
                        style="danger"
                        icon="trash-o"
                        hide={ !todo.done }
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
                        Descrição
                    </th>
                    <th className="tableActions">
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    )
}