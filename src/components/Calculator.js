import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inputDigit, chooseOperator, calculate, clear } from '../redux/calculatorSlice';
import '../App.css'; // Можеш підключити власний CSS

function Calculator() {
    const { current, previous, operator } = useSelector((state) => state.calculator);
    const dispatch = useDispatch();

    return (
        <div className="calculator">
            <div className="display">
                <div className="previous">
                    {previous ? `${Number(previous).toLocaleString()} ${operator || ""}` : ""}
                </div>
                <div className="current">{current ? Number(current).toLocaleString() : 0}</div>
            </div>
            <div className="buttons">
                <button onClick={() => dispatch(clear())} className="span-two">AC</button>
                <button onClick={() => dispatch(chooseOperator('/'))}>/</button>
                <button onClick={() => dispatch(chooseOperator('*'))}>*</button>
                {[7, 8, 9].map(n => <button key={n} onClick={() => dispatch(inputDigit(n.toString()))}>{n}</button>)}
                <button onClick={() => dispatch(chooseOperator('-'))}>-</button>
                {[4, 5, 6].map(n => <button key={n} onClick={() => dispatch(inputDigit(n.toString()))}>{n}</button>)}
                <button onClick={() => dispatch(chooseOperator('+'))}>+</button>
                {[1, 2, 3].map(n => <button key={n} onClick={() => dispatch(inputDigit(n.toString()))}>{n}</button>)}
                <button onClick={() => dispatch(calculate())} className="span-two">=</button>
                <button onClick={() => dispatch(inputDigit('0'))}>0</button>
                <button onClick={() => dispatch(inputDigit('.'))}>.</button>
            </div>
        </div>
    );
}

export default Calculator;
