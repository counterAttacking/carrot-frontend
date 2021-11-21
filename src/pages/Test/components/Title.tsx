type TitleText = {
    title: string;
    subTitle?: string;
};

const Title = (text: TitleText) => {
    const { title, subTitle } = text;
    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <h3>{subTitle}</h3>
        </div>
    );
};

export default Title;