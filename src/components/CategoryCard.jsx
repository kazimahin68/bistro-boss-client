
const CategoryCard = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img src={image} alt="" />
            <p className="absolute right-0 mr-5 mt-4 bg-black text-white px-2 rounded-md">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title justify-center font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-3">
                    <button className="btn btn-outline border-0 border-b-4 border-yellow-600 text-yellow-600 hover:bg-slate-800 hover:text-yellow-600 uppercase">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;