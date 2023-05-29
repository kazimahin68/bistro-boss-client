import img from '../../../assets/home/featured.jpg';
import { Parallax, Background } from 'react-parallax';

const Cover = () => {
    return (
        <Parallax className='hero xl:h-[700px] mt-20 bg-fixed max-w-screen-xl mx-auto' bgImage={img} strength={200}>
            <Background className="bg-black bg-opacity-50">
                <div className="text-center text-neutral-content">
                    <div className="px-32 py-12">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </Background>
        </Parallax>
    );
};

export default Cover;