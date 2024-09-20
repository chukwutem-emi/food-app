import { render } from "@testing-library/react"
import { act } from "react"
import RestaurantsMenu from "../RestaurantMenu";
import MENU_MOCK_DATA from "../mocks/mockRestaurantMenu.json";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MENU_MOCK_DATA);
        }
    })
})
it("Should load restaurant menu component", async () =>{
    await act( async() =>{
        render(<RestaurantsMenu />)
    })
})