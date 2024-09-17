import { CDN_URL } from "../../utils/constant";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      sla,
      avgRating,
    } = resData?.info;
  return (
    <div className="m-4 p-4 w-80 break-words bg-slate-400 rounded-lg hover:bg-gray-500">
        <img className="food" alt="food image" src={CDN_URL + cloudinaryImageId} />

      <h3 className="font-bold py-3 text-white text-xl">{name}</h3>
      <h4>{cloudinaryImageId}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>${costForTwo}</h4>
      <h4>{sla?.slaString} minutes</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
export const withIsOpenLabel = (RestaurantCard) => {
  // it will return a new component
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">IsOpen</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;