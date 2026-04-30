import { createContext } from "react"
import { Data } from "../config/data";


export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = '$'
    const delivery_fee = 10
    const value = { products: Data, currency, delivery_fee }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;