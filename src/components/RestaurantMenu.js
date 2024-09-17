import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantsMenu = () =>{
    const [showIndex, setShowIndex] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
    
    if (resInfo === null) {
        return <Shimmer />;
    };
    const {name, cuisines, avgRatingString, sla, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    console.log("INFO:", resInfo?.cards[2]?.card?.card?.info);
    const {itemCards} = resInfo?.cards[4]?.groupedCard
    ?.cardGroupMap?.REGULAR?.
    cards[2]?.card?.card;
    console.log(itemCards);
    if (!itemCards || itemCards === 0) {
        return <p className="menu-items"> Oops!. No menu items available.</p>;
    }
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return(
        <div className="text-center">
            <h3 className="font-bold my-6 text-2xl">{name}</h3>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) => (<RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            />))}
        </div>
    );
};
export default RestaurantsMenu;