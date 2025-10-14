import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    current: '0',
    previous: null,
    operator: null,
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        inputDigit: (state, action) => {
            if (state.current === '0') {
                state.current = action.payload;
            } else {
                state.current += action.payload;
            }
        },
        chooseOperator: (state, action) => {
            if (state.previous === null) {
                state.previous = state.current;
                state.current = '0';
            } else if (state.operator) {
                const prev = parseFloat(state.previous);
                const curr = parseFloat(state.current);
                switch (state.operator) {
                    case '+':
                        state.previous = (prev + curr).toString();
                        break;
                    case '-':
                        state.previous = (prev - curr).toString();
                        break;
                    case '*':
                        state.previous = (prev * curr).toString();
                        break;
                    case '/':
                        state.previous = (curr !== 0 ? prev / curr : 0).toString();
                        break;
                    default:
                        break;
                }
                state.current = '0';
            }
            state.operator = action.payload;
        },
        calculate: (state) => {
            const prev = parseFloat(state.previous);
            const curr = parseFloat(state.current);
            if (!state.operator) return;
            switch (state.operator) {
                case '+':
                    state.current = (prev + curr).toString();
                    break;
                case '-':
                    state.current = (prev - curr).toString();
                    break;
                case '*':
                    state.current = (prev * curr).toString();
                    break;
                case '/':
                    state.current = (curr !== 0 ? prev / curr : 0).toString();
                    break;
                default:
                    break;
            }
            state.previous = null;
            state.operator = null;
        },
        clear: (state) => {
            state.current = '0';
            state.previous = null;
            state.operator = null;
        },
    },
});

export const { inputDigit, chooseOperator, calculate, clear } = calculatorSlice.actions;
export default calculatorSlice.reducer;
