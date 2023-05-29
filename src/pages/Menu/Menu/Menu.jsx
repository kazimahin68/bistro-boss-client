import { Helmet } from "react-helmet-async";
import { PulseLoader } from "react-spinners";
import MenuBanner from "./MenuBanner/MenuBanner";
import useMenu from "../../../hooks/useMenu";
import MenuItems from "../../Shared/MenuItems";
import img1 from '../../../assets/menu/banner3.jpg';
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/pizza-bg.jpg'
import img4 from '../../../assets/menu/salad-bg.jpg'
import img5 from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../components/SectionTitle";
import SectionBanner from "../../Shared/SectionBanner";

const Menu = () => {
    const [menu, loading] = useMenu([])

    const offer = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    if(loading){
        return (
            <PulseLoader 
                className="text-center mt-20"
                color={'#36d7b7'}
                loading={loading}
                // cssOverride={override}
                size={10}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        )
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuBanner heading={'Our Menu'} subHeading={'Would you like to try a dish?'} img={img1}></MenuBanner>

            {/* Today's Offer Section */}
            <div className="mt-20">
                <SectionTitle heading={"Today's Offer"} subHeading={"--- Don't Miss ---"}></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 max-w-screen-xl mx-auto">
                    {
                        offer.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
            </div>

            {/* Dessert Section */}
            <div className="mt-20">
                <SectionBanner heading={'dessert'} subHeading={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={img2}></SectionBanner>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 max-w-screen-xl mx-auto">
                    {
                        dessert.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
            </div>

            {/* Pizza Section */}
            <div className="mt-20">
                <SectionBanner heading={'pizza'} subHeading={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={img3}></SectionBanner>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 max-w-screen-xl mx-auto">
                    {
                        pizza.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
            </div>

            {/* Salad Section */}
            <div className="mt-20">
                <SectionBanner heading={'salad'} subHeading={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={img4}></SectionBanner>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 max-w-screen-xl mx-auto">
                    {
                        salad.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
            </div>

            {/* Soup Section */}
            <div className="mt-20">
                <SectionBanner heading={'soup'} subHeading={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={img5}></SectionBanner>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 max-w-screen-xl mx-auto">
                    {
                        soup.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;