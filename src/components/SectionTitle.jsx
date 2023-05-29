
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mb-12 text-center w-1/4 mx-auto">
            <h2 className="italic text-yellow-500 mb-3">{subHeading}</h2>
            <div>
                <hr  className="border-2"/>
                <h1 className="uppercase my-5 text-3xl font-bold">{heading}</h1>
                <hr className="border-2" />
            </div>
        </div>
    );
};

export default SectionTitle;