import { useState, ChangeEvent, MouseEvent } from "react";

const Adder = () => {
    const [operand1, setOperand1] = useState<number>(0);
    const [operand2, setOperand2] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const operand1Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOperand1(Number.parseInt(event.currentTarget.value));
    };
    const operand2Change = (event: ChangeEvent<HTMLInputElement>) => {
        setOperand2(Number.parseInt(event.currentTarget.value));
    };
    const calcClick = (event: MouseEvent<HTMLButtonElement>) => {
        setResult(operand1 + operand2);
    }

    return (
        <section>
            <input type="text" onChange={operand1Change} />
            +
            <input type="text" onChange={operand2Change} />
            <button onClick={calcClick}>=</button>
            {result}
        </section>
    );
};

export default Adder;