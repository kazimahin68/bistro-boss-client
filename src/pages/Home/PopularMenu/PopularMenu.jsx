import { PulseLoader } from "react-spinners";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItems from "../../Shared/MenuItems";


const PopularMenu = () => {
    const [menu, loading] = useMenu([])
    // console.log(menu)
    const popular = menu.filter(item => item.category === 'popular');
    if (loading) {
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
        <div className="mt-20 max-w-screen-xl mx-auto">
            <SectionTitle
                heading={'Popular Menu'}
                subHeading={'--- Check it Out ---'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                {
                    popular.map(item => <MenuItems key={item._id} item ={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;