import React from 'react';
import './App.css';

enum ColorEnum {
    GREEN='green',
    YELLOW='yellow',
    RED='red',
}

const matrix: Array<Array<ColorEnum>> = [
    [ColorEnum.YELLOW, ColorEnum.YELLOW, ColorEnum.YELLOW],
    [ColorEnum.RED, ColorEnum.YELLOW, ColorEnum.RED],
    [ColorEnum.YELLOW, ColorEnum.RED, ColorEnum.YELLOW],
]

function App() {
    return (
        <div className="App">
            <div className="color-matrix">
              {matrix.flat(1).map((color: ColorEnum) => <div className={color.toString()}>&nbsp;</div>)}
            </div>
        </div>
    );
}

export default App;
