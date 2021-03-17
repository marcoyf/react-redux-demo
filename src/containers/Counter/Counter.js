import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState((prevState) => { return { counter: prevState.counter + 1 } })
    //             break;
    //         case 'dec':
    //             this.setState((prevState) => { return { counter: prevState.counter - 1 } })
    //             break;
    //         case 'add':
    //             this.setState((prevState) => { return { counter: prevState.counter + value } })
    //             break;
    //         case 'sub':
    //             this.setState((prevState) => { return { counter: prevState.counter - value } })
    //             break;
    //         default:
    //         // do nothing
    //     }
    // }

    render() {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler('inc')} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                {/* <CounterControl label="Decrement" clicked={() => this.counterChangedHandler('dec')} /> */}
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                {/* <CounterControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} /> */}
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                {/* <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} /> */}
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// which part of application state is interesting for us
const mapStateToProps = state => {
    return {
        // ctr: state.counter,
        // since we're now using combined Reducers in file index.js,
        // we need to tell React what Reducer we're refering to, in this case the ctr Reducer
        ctr: state.ctr.counter,
        
        // storedResults: state.results
        // here we're refering to the res Reducer
        storedResults: state.res.results
    };
};

// which Actions do I want to dispatch
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    };
};

// connect is a function that returns a hoc
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default Counter;