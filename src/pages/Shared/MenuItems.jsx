
const MenuItems = ({item}) => {

    const {image, name, price, recipe} = item;

    return (
        <div className="flex space-x-5 items-center">
            <div className="h-24 w-28 pt-4">
                <img className="rounded-b-full rounded-tr-full" src={image} alt="" />
            </div>
            <div>
                <div className="flex justify-between">
                    <h2 className="uppercase text-2xl">{name} ---------------</h2>
                    <p className="text-yellow-500"> ${price}</p>
                </div>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItems;