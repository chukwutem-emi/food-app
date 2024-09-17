import { CDN_URL } from "../../utils/constant";
import { addItems } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItems(item));
    }

    return <div>
        {items.map((item) => (
            <div key={item?.card?.info?.id} className="border-black border-b-[1px] text-left p-2 m-2">
                <div className="py-2">
                    <div className="w-3/12 p-4 float-end">
                        <div>
                            <button className="bg-blue-950 text-white font-sans shadow-lg rounded-lg p-2" onClick={() => handleAddItem(item)}>Add +</button>
                        </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-full"/>
                    </div>
                    <span className="justify-start text-lg">{item?.card?.info?.name}</span>
                    <span>₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                </div>
                <p className="text-xs break-words">{item?.card?.info?.description}</p>
            </div>
        ))}
    </div>
}
export default ItemList;