import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUS from "./pages/ContactUS";
import ProductPage from "./pages/ProductPage";
import BillingPage from "./pages/BillingPage";
import PaymentPage from "./pages/PaymentPage";



export default function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/CartPage" element={<CartPage />} />
                    <Route path="/CheckoutPage" element={<CheckoutPage />} />
                   <Route path="/ContactUS" element={<ContactUS />} />
                    <Route path="/ProductPage" element={<ProductPage />} />
                    <Route path="/BillingPage" element={<BillingPage />} />
                    <Route path="/PaymentPage" element={<PaymentPage />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);



