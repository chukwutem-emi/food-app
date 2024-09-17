import { data } from "autoprefixer";
import ItemList from "./ItemList";
const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            {/* header */}
            <div className="w-6/12 shadow-lg bg-gray-50 p-4 mx-auto my-6">
                <div className="flex cursor-pointer" onClick={handleClick}>
                    <div>
                        <span className="font-bold text-lg font-sans">{data?.title} ({data?.itemCards?.length})</span> 
                        {showItems ? <ItemList items={data?.itemCards} /> : null}
                    </div>
                    <span>⬇️</span>
                </div>
            </div>
        </div>
    )
}; 
export default RestaurantCategory;