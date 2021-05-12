import React, {useCallback} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import Todos from '../components/Todos';
import {changeInput, insert, toggle, remove} from '../modules/todos';

const TodosContainer = () => { //{input, todos, changeInput, insert, toggle, remove}
    const {input, todos} = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }));

    const dispatch = useDispatch();
    const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
    const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)), [dispatch])

    return (
        <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove} />
    );
};

//비구조화 할당을 통해 todos를 분리하여
//state.todos.input 대신 todos.input을 사용
// const mapStateToProps = ({todos}) => ({
//     input: todos.input,
//     todos: todos.todos,
// });

// const mapDispatchToProps = dispatch => ({
//     changeInput: input => {
//         dispatch(changeInput(input))
//     },
//     insert: text => {
//         dispatch(insert(text))
//     },
//     toggle: id => {
//         dispatch(toggle(id))
//     },
//     remove: id => {
//         dispatch(remove(id))
//     }
// });

export default TodosContainer;

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TodosContainer);

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