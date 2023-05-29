
import { Parallax} from 'react-parallax';

const SectionBanner = ({heading, subHeading, img}) => {
    return (
        <Parallax className='hero min-h-screen mt-20' bgImage={img} strength={200}>
                <div className="w-3/4 mx-auto text-center text-white">
                <div className="bg-black bg-opacity-50 p-10">
                    <div className="px-32 py-12">
                        <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
                        <p className="mb-5">{subHeading}</p>
                    </div>
                </div>
                </div>
        </Parallax>
    );
};

export default SectionBanner;