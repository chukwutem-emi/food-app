import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import useOnlineStatus from "../../../utils/useOnlineStatus";

// making mock function- making fetching function exactly the same as the one our browser gave us (i.e fetch)
global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA)
        }
    })
});
// test("mock data is loaded correctly", () => {
//     expect(MOCK_DATA).toHaveLength(8); // Example check
//   });

// it("should render an error message when internet connection is off", () => {
//     render(<Body />);
//     screen.debug()
//     const offline = screen.getByText("Oops!, it looks like you're offline!!!, please check your internet connection.");
//     expect(offline).toBeInTheDocument();
// })
it("should render the body component with search", async () => {
    await act(async () => render(<BrowserRouter>
        <Body />
    </BrowserRouter>));
    screen.debug();
    const cardBeforeSearch = screen.getAllByTestId("resCard");
    console.log("card before search:", cardBeforeSearch.length);
    expect(cardBeforeSearch.length).toBe(8);
    const searchBtn = screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value: "Chinese Wok"}});
    fireEvent.click(searchBtn);
    await waitFor(() =>{
        screen.debug()
        // screen should load one res card
        const cardAfterSearch = screen.getAllByTestId("resCard");
        expect(cardAfterSearch.length).toBe(1)
        
    })
})
it("should render all the top rated restaurants", async () => {
    await act(async () => render(<BrowserRouter>
        <Body />
    </BrowserRouter>));
    screen.debug();
    const cardBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardBeforeFilter.length).toBe(8);

    const topRated = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRated)
    await waitFor(() =>{
        screen.debug();
        // screen should load one res card
        const cardAfterFilter = screen.getAllByTestId("resCard");
        expect(cardAfterFilter.length).toBe(5)

    })
})
jest.mock("../../../utils/useOnlineStatus");

it("should render offline message in the body component", () => {
    useOnlineStatus.mockReturnValue(false);
    act(() => {
        render(
           <Body /> 
        )
    });
    const offlineMsg = screen.getByTestId("offline");
    expect(offlineMsg).toBeInTheDocument();
    expect(offlineMsg).toHaveTextContent("Oops!, it looks like you're offline!!!, please check your internet connection.");
});
