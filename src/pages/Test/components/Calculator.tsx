import { useState } from "react";
import Pad from "./Pad";

const Calculator = () => {
    const [expression, SetValue] = useState("");
    const updateValue = (value: string) => {
        if (value === "=") {
            SetValue(eval(expression));
        } else {
            SetValue(expression + value);
        }
    };

    return (
        <section>
            <section>
                <Pad keyName="7" callback={updateValue} />
                <Pad keyName="8" callback={updateValue} />
                <Pad keyName="9" callback={updateValue} />
            </section>
            <section>
                <Pad keyName="4" callback={updateValue} />
                <Pad keyName="5" callback={updateValue} />
                <Pad keyName="6" callback={updateValue} />
            </section>
            <section>
                <Pad keyName="0" callback={updateValue} />
                <Pad keyName="1" callback={updateValue} />
                <Pad keyName="2" callback={updateValue} />
                <Pad keyName="3" callback={updateValue} />
            </section>
            <section>
                <Pad keyName="+" callback={updateValue} />
                <Pad keyName="-" callback={updateValue} />
                <Pad keyName="*" callback={updateValue} />
                <Pad keyName="/" callback={updateValue} />
                <Pad keyName="=" callback={updateValue} />
            </section>
            <article>{expression}</article>
        </section>
    );
};

export default Calculator;
