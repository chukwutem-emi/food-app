import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
//import useOnlineStatus from "../../../utils/useOnlineStatus";

it("should render header component with login button", () => {
    render(
        <BrowserRouter> 
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name:"Login"});
    //const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
});
it("should render header component with card item", () => {
    render(
        <BrowserRouter> 
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    //const cartItems = screen.getByText("Cart - (0 items)");
    // (/Cart/) => the two backward slash is called regex
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
});
jest.mock("../../../utils/useOnlineStatus", () => jest.fn());
describe("Header component - online status", () =>{
    it("should display '🟢' when online", () => {
        const useOnlineStatus = require("../../../utils/useOnlineStatus");
        useOnlineStatus.mockReturnValue(true);
        screen.debug()
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const statusState = screen.getByTestId("status");
        expect(statusState.textContent).toContain("🟢")
        console.log("STATUS:", statusState);
    });
    it("should display '🔴' when offline", () => {
        const useOnlineStatus = require("../../../utils/useOnlineStatus");
        useOnlineStatus.mockReturnValue(false);
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const statusState = screen.getByTestId("status");
        expect(statusState.textContent).toContain("🔴")
        console.log("STATUS2:", statusState);
    })
});
it("Should render user login and logout in the header component", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const btnClick = screen.getByTestId("btnName");
    expect(btnClick.textContent).toBe("Login");
    fireEvent.click(btnClick);
    expect(btnClick.textContent).toBe("Logout");
    fireEvent.click(btnClick);
    expect(btnClick.textContent).toBe("Logout");
})