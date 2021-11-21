import { ChangeEvent, useState } from "react";

const ConditionalText = () => {
    const [text, setText] = useState<string>("");
    const updateText = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.currentTarget.value);
    };

    return (
        <section>
            <input type="text" onChange={updateText} />
            {text.length > 5 && <article>{text}</article>}
        </section>
    );
};

export default ConditionalText;