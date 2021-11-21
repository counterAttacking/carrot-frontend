import { ChangeEvent, useState } from "react";

const HiddenName = () => {
    const [hidden, setHidden] = useState<string>("");
    const updateHidden = (event: ChangeEvent<HTMLInputElement>) => {
        let originName = event.currentTarget.value;
        if (originName.length >= 3) {
            const first = originName.substring(0, 1);
            const last = originName.substring(originName.length - 1, originName.length);
            const mid = "*".repeat(originName.length - 2);
            originName = first + mid + last;
        }
        setHidden(originName);
    };

    return (
        <section>
            <input type="text" onChange={updateHidden} />
            <article>{hidden}</article>
        </section>
    );
};

export default HiddenName;