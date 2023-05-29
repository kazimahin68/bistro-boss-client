import SectionTitle from "../../../components/SectionTitle";
import image from '../../../assets/home/featured.jpg';


const Featured = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-fixed mt-20 max-w-screen-xl mx-auto" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content">
                    <div>
                        <SectionTitle heading={'Featured'} subHeading={'--- Read it Out ---'}></SectionTitle>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center w-3/4 mx-auto space-x-10">
                        <img className="w-full md:w-1/2" src={image} alt="" />
                        <div className="w-full md:w-1/2">
                            <h1 className="mb-5 text-2xl font-bold">March 20, 2023</h1>
                            <h3 className="uppercase text-xl">WHERE CAN I GET SOME?</h3>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-outline border-0 border-b-4 border-white text-white hover:bg-slate-800 hover:text-yellow-600 uppercase">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;