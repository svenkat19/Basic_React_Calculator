import React, { useContext } from 'react';
import './KeyPad.css';
import CalciContex from '../../context/CalciContex';

let status = "";
const KeyPad: React.FC = () => {
    const context = useContext(CalciContex);

    if (!context) {
        throw new Error("KeyPad must be used within a CalciContex.Provider");
    }

    const { stored, setStored, current, setCurrent,setAlerter } = context;
    const addNum = (value: string): void => {
        if (current.includes(".") && value === '.')
            return;
        let temp = current;
        temp = temp + value;
        setCurrent(temp);
    };
    const arithmetic = (value: string): void => {
        if (stored && current == null)
            return;
        if (stored === null) {
            setStored(current);
            status = value;
            setCurrent(status)
            return
        }

        status = value;
        if (status === '+'.toString()) {
let temp=stored;
            setStored(current)
            setStored((parseFloat(temp) + parseFloat(current.slice(1))).toString());
            setCurrent(status);
            return;
        }
        else if (status === '-'.toString()) {
let temp=stored;
            setStored(current)
            setStored((parseFloat(temp) - parseFloat(current.slice(1))).toString());
            setCurrent(status);
            return;
        }
        else if (status === '*'.toString()) {
let temp=stored;
            setStored(current)
            setStored((parseFloat(temp) * parseFloat(current.slice(1))).toString());
            setCurrent(status);
            return;
        }
        else if (status === '/'.toString()) {
            if (parseFloat(current.slice(1)) === 0.0) {
                setAlerter(true);
                setCurrent("")
                setStored(null)
                return;
            }
let temp=stored;
            setStored(current)
            setStored((parseFloat(temp) / parseFloat(current.slice(1))).toString());
            setCurrent(status);
            return;
        }
        // equals()
        // setCurrent("")
    }
    const clearCalculation = (): void => {
        setCurrent("");
        setStored(null);
    };
    const equals = (): void => {
        if (current === null && stored === null) { return; }
        if (stored === null) {
            setStored(current);
            status = "";
            return
        }
        if (status === '+'.toString()) {
            setCurrent((parseFloat(stored) + parseFloat(current.slice(1))).toString());
            setStored(null);
            status = "";
            return;
        }
        else if (status === '-'.toString()) {
            setCurrent((parseFloat(stored) - parseFloat(current.slice(1))).toString());
            setStored(null);
            status = "";
            return;
        }
        else if (status === '*'.toString()) {
            setCurrent((parseFloat(stored) * parseFloat(current.slice(1))).toString());
            setStored(null);
            status = "";
            return;
        }
        else if (status === '/'.toString()) {
            if (parseFloat(current.slice(1)) === 0.0) {
                
                setAlerter(true)
                setCurrent("")
                setStored(null)
                return;
            }
            setCurrent((parseFloat(stored) / parseFloat(current.slice(1))).toString());
            setStored(null);
            status = "";
            return;
        }

    }
    return (
        <div className="calculator-container">
            <div className="calculator-keys">
                <div className="row">
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum("7")}>7</button>
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum("8")}>8</button>
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum("9")}>9</button>
                    <button type="button" className="btn btn-warning operator col-3" onClick={() => arithmetic("/")}>/</button>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum("4")}>4</button>
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum("5")}>5</button>
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum("6")}>6</button>
                    <button type="button" className="btn btn-warning operator col-3" onClick={() => arithmetic("*")}>*</button>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum("1")}>1</button>
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum("2")}>2</button>
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum("3")}>3</button>
                    <button type="button" className="btn btn-warning operator col-3" onClick={() => arithmetic("-")}>-</button>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum("0")}>0</button>
                    <button type="button" className="btn btn-light col-3" onClick={() => addNum(".")}>.</button>
                    <button type="button" className="btn btn-info equal col-3" onClick={() => { equals();}}>=</button>
                    <button type="button" className="btn btn-warning operator col-3" onClick={() => arithmetic("+")}>+</button>
                </div>
                <div className="row">
                    <button type="button" className="btn btn-danger clear col-12" onClick={clearCalculation}>C</button>
                </div>
            </div>
        </div>
    );
};

export default KeyPad;
