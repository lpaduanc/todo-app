import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/inconButton';

export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input
                type="text"
                id="description"
                className="form-control"
                placeholder="Adicione uma tarefa"
                value={ props.description }
                onChange={ props.handleChanges }
            />
        </Grid>

        <Grid cols="12 3 2">
            <IconButton
                style="primary"
                icon="plus"
                onClick={ props.handleAdd } 
            />
        </Grid>

    </div>
)