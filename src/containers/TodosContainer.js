import React from 'react';
import {connect} from 'react-redux';
import Todos from '../components/Todos';
import {changeInput, insert, toggle, remove} from '../modules/todos';

const TodosContainer = ({
    input,
    todos,
    changeInput, insert, toggle, remove
}) => {
    return (
        <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />
    );
};

//비구조화 할당을 통해 todos를 분리하여
//state.todos.input 대신 todos.input을 사용
const mapStateToProps = ({todos}) => ({
    input: todos.input,
    todos: todos.todos,
});

const mapDispatchToProps = dispatch => ({
    changeInput: input => {
        dispatch(changeInput(input))
    },
    insert: text => {
        dispatch(insert(text))
    },
    toggle: id => {
        dispatch(toggle(id))
    },
    remove: id => {
        dispatch(remove(id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosContainer);

// export default connect(
//     ({todos}) => ({
//         input: todos.input,
//         todos: todos.todos
//     }),
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove
//     }
// )(TodosContainer)