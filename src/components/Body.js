import { useContext, useEffect, useState } from "react";
import RestaurantCard, {withIsOpenLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
const Body = () => {
  //Local State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantCardOpen = withIsOpenLabel(RestaurantCard)
  // whenever State variable update, react triggers a reconciliation cycle(re-renders the component)
  const  {setUserName, loggedInUser} = useContext(userContext);
 
  console.log("Body rendered");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log("JSON1:", json)
    // console.log("JSON:",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // optional chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return(<h1 data-testid="offline" className="text-red-500 font-sans text-center mt-[10rem]">Oops!, it looks like you're offline!!!, please check your internet connection.</h1>)
  }
  // conditional rendering
  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }
    return (
      <div className="h-[100vh]">
        <div className="filter flex">
          <div className="search">
            <input data-testid="searchInput" autoComplete="on" id="search-box" type="text" className="search-box mt-8 border-2 border-solid border-blue-800 ml-[2rem] p-[0.3rem] outline-none" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
            }} />
            <button data-testid="search" className="search-btn bg-blue-900 text-white font-sans font-bold rounded-sm p-[0.5rem]" onClick={() => {
              // filter the restaurant cards and update the UI
              // searchText
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())  
              );
              console.log(filteredRestaurants)
              setFilteredRestaurants(filteredRestaurants)
            }}>Search</button>
          </div>
          <button className="filter-btn ml-4 bg-blue-950 font-bold mt-8 px-4 rounded-lg font-sans text-white" onClick={() => {
            // filter logic here
            const filterList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
            // to update the list
            setFilteredRestaurants(filterList);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="m-2 p-2 block">
          <label className="font-sans text-lg text-blue-950">UserName: </label>
          <input type="text" className="outline-none border-blue-400 rounded-lg border-[1px] p-2 text-center" autoComplete="on" autoFocus value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurants.length > 0 ? (filteredRestaurants.map((restaurants) => (
            <Link key={restaurants?.info?.id} to={"/restaurant/" + restaurants.info.id }>
              {restaurants.info.isOpen ? (<RestaurantCardOpen resData={restaurants}/>) :(<RestaurantCard resData={restaurants} />) }
            </Link> 
        ))) :(
          <p data-testid="notFound" className="text-red-500 font-sans font-bold text-lg text-center my-0 mx-auto">No restaurant found!</p>
        )}
        </div>
      </div>
    );
  };
  export default Body;