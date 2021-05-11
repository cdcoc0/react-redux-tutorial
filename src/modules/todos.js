import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; //인풋 값 변경
const INSERT = 'todos/INSERT'; // 새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; //todo를 체크 or 체크해제
const REMOVE = 'todos/REMOVE'; //todo를 제거

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const insert = createAction(INSERT, text => ({id: id++, text, done: false}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input
// });

// let id = 3; //inset가 호출될 때마다 1씩 더해짐
// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false
//     }
// });
// export const toggle = id => ({
//     type: TOGGLE,
//     id
// });
// export const remove = id => ({
//     type: REMOVE,
//     id
// });

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

const todos = handleActions (
    {
        //[CHANGE_INPUT]: (state, action) => ({...state, input: action.payload}),
        [CHANGE_INPUT]: (state, {payload: input}) => //({...state, input}),
            produce(state, draft => {
                draft.input = input;
            }),
    
        //[INSERT]: (state, action) => ({...state, todos: state.todos.concat(action.payload)}),
        [INSERT]: (state, {payload: todo}) => //({...state, todos: state.todos.concat(todo)}),
            produce(state, draft => {
                draft.todos.push(todo);
            }),
    
    
        // [TOGGLE]: (state, action) => ({...state, 
        //     todos: state.todos.map(
        //         todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo)}),
        [TOGGLE]: (state, {payload: id}) => //({...state, 
            // todos: state.todos.map(
            //     todo => todo.id === id ? {...todo, done: !todo.done} : todo)}),
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id ===id);
                todo.done = !todo.done;
            }),

        // [REMOVE]: (state, action) => ({...state, 
        //     todos: state.todos.filter(todo => todo.id !== action.payload)})
        [REMOVE]: (state, {payload: id}) => //({...state, 
            //todos: state.todos.filter(todo => todo.id !== id)})
            produce(state, draft => {
                const index = draft.todos.findIndex(todo => todo.id === id);
                draft.todos.splice(index, 1);
            })
    },
    initialState
);

// function todos(state = initialState, action) {
//     switch(action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo => 
//                     todo.id === action.id ? {...todo, done: !todo.done} : todo
//                 )
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };
//         default:
//             return state;
//     }
// }

export default todos;