type PhotoType = {
    address: string;
    description: string;
};

const Photo = (photoType: PhotoType) => {
    const { address, description } = photoType;
    return (
        <section>
            <img src={address} />
            <article>{description}</article>
        </section>
    );
};

export default Photo;