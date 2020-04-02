import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL ='http://localhost:3003/api/todos';

export default class Todo extends Component {
    /**
     * Necessário fazer o bind do this, pois, o click é feito em outro componente
     * fazendo com que o this fique vazio.
     * Chamando a classe super com as propriedades da mesma, é possível fazer o bind
     * do this e amarra-lo a fução atual
     * @param {"Todo"} props 
     */
    constructor(props) {
        super(props);

        //estado inicial do objeto
        this.state = {
            description: '',
            list: [],
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.refresh();
    }

    refresh() {
        axios.get(`${ URL }?sort=-createdAt`)
            .then(resp => this.setState({
                ...this.state,
                description: '',
                list: resp.data,
            }))
    }

    handleChanges(e){
        this.setState({
            ...this.state,
            description: e.target.value,
        });   
    }

    handleAdd() {
        const description = this.state.description;

        axios.post(URL,{
            description
        })
        .then(
            resp => this.refresh()
        )
    }

    handleRemove(id) {
        axios.delete(`${ URL }/${ id }`)
            .then(
                resp => this.refresh()
            )
    }

    render() {
        return(
            <div>
                <PageHeader
                    name="Tarefas"
                    small="Cadastro"
                />

                <TodoForm
                    handleAdd={ this.handleAdd }
                    handleChanges={ this.handleChanges }
                    description={ this.state.description }
                />
                <TodoList
                    list={ this.state.list }
                    handleRemove={ this.handleRemove }
                />
            </div>
        );
    };
}