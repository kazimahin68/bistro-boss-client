import img from '../../../../assets/menu/banner3.jpg'

const MenuBanner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="w-3/4 mx-auto text-center text-white">
                <div className="bg-black bg-opacity-50 p-10 py-20">
                    <h1 className="mb-5 text-5xl font-bold">OUR MENU</h1>
                    <p className="mb-5 uppercase">Would you like to try a dish?</p>
                </div>
            </div>
        </div>
    );
};

export default MenuBanner;