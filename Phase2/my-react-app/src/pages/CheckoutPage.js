import React, { useState } from "react";
import './Checkout.css';
function CheckoutPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
    };

    const handleZipChange = (event) => {
        setZip(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "PaymentPage/";
        // You can add your logic for submitting the form data here
    };

    return (
        <div className="checkout-page">
            <h2>Billing Details</h2>
            <form className="form-container" onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={handleFirstNameChange} required />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={handleLastNameChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} required />
                </label>
                <label>
                    Phone:
                    <input type="tel" value={phone} onChange={handlePhoneChange} required />
                </label>
                <label>
                    Address:
                    <input type="text" value={address} onChange={handleAddressChange} required />
                </label>
                <label>
                    City:
                    <input type="text" value={city} onChange={handleCityChange} required />
                </label>
                <label>
                    State:
                    <input type="text" value={state} onChange={handleStateChange} required />
                </label>
                <label>
                    Zip:
                    <input type="text" value={zip} onChange={handleZipChange} required />
                </label>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
}

export default CheckoutPage;
