import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ItemList from "../Pages/ItemList/ItemsList";
import Header from "../Components/Header/Header";

const Routing = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/item-list" element={<ItemList />} />
                <Route />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;