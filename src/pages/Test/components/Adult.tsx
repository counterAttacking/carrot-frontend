type AdultType = {
    age: number;
};

const Adult = (adultType: AdultType) => {
    const { age } = adultType;
    return (
        <section>
            {age >= 20 ? "성인" : "미성년자"}
        </section>
    );
};

export default Adult;