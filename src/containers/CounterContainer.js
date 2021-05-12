import React, {useCallback} from 'react';
import {bindActionCreators} from 'redux';
import {connect, useSelector, useDispatch} from 'react-redux';
import Counter from '../components/Counter'
import {increase, decrease} from '../modules/counter';

const CounterContainer = () => { //{number, increase, decrease}
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
};

// const mapStateToProps = state => ({
//     number: state.counter.number
// });

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     }
// });

export default CounterContainer;

// connect(
//     state => ({
//         number: state.counter.number
//     }),
//     // 1) dispatch => ({
//     //     increase: () => dispatch(increase()),
//     //     decrease: () => dispatch(decrease())
//     // })

//     // 2) dispatch => 
//     //     bindActionCreators(
//     //         {increase, decrease},
//     //         dispatch
//     //     )
//     {increase, decrease} //두 번째 파라미터를 아예 객체 형태로 넣어 주면 connect 함수가 내부적으로 bindActionCreators 작업을 해줌
// )(CounterContainer);