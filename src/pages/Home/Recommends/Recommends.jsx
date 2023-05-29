import { PulseLoader } from "react-spinners";
import SectionTitle from "../../../components/SectionTitle";
import CategoryCard from "../../../components/categoryCard";
import useMenu from "../../../hooks/useMenu";
import { useEffect, useState } from "react";

const Recommends = () => {
    const [menu, loading] = useMenu()
    const [displaySalad, setDisplaySalad] = useState([])
    useEffect(() => {
        const salad = menu.filter(item => item.category === 'salad')
        // const display = salad.slice(0 , 3)
        setDisplaySalad(salad)
    }, [menu])

    // console.log(displaySalad)

    const display = displaySalad.slice(0, 3)

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
            <SectionTitle heading={'Chef recommends'} subHeading={'--- Should Try ---'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    display.map(item => <CategoryCard key={item._id} item={item}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Recommends;