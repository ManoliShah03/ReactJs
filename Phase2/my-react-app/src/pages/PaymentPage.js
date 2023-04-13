import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './Payment.css';

export default class PaymentForm extends React.Component {
    state = {
        cvc: '', expiry: '', focus: '', name: '', number: '', isPaid: false, isSubmitted: false // add new state variable
    };

    handleInputFocus = (e) => {

        this.setState({focus: e.target.name});
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'number' && /\D/.test(value)) {
            alert('Please enter only numbers');
            e.target.value = value.replace(/\D/g, '');
            return;
        }

        if (name === 'name' && /[^a-zA-Z\s]/.test(value)) {

            alert('Please enter only letters');
            e.target.value = value.replace(/[^a-zA-Z]/g, '');
            return;
        }

        if (name === 'cvc') {
            if (/\D/.test(value)) {
                alert('Please enter only numbers');
                e.target.value = value.replace(/\D/g, '');
                return;
            }

        }


        this.setState({ [name]: value });
    };


    handleSubmit = (e) => {
        e.preventDefault();
        const {cvc, expiry, name, number} = this.state;

        if (!cvc || !expiry || !name || !number) {
            alert("Please fill out all fields");
            return;
        }

        if (cvc.length !== 3) {
            alert("Please enter a 3-digit CVV code");
            return;
        }
        if (number.length !== 16) {
            alert("Please enter a 16-digit card number");
            return;
        }


        this.setState({isPaid: true});
    };


    render() {
        const {isPaid, isSubmitted} = this.state;
        if (isPaid) {
            alert("Your order is successful!");

        } else {
            return (
                <div style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + 'Images/payment.jpg'})`
                }}>

                    <div className="PaymentForm">
                        {(!isSubmitted || (isSubmitted && this.state.number)) && (
                            <Cards
                                cvc={this.state.cvc}
                                expiry={this.state.expiry}
                                focused={this.state.focus}
                                name={this.state.name}
                                number={this.state.number}
                            />
                        )}
                        <form onSubmit={this.handleSubmit} className="f1">
                            <input
                                type="tel"
                                name="number"
                                className="crdnum"
                                placeholder="Card Number"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                maxLength="16"
                            />
                            <input
                                type="text"
                                className="crdnum"
                                name="name"
                                placeholder="Card Holder Name"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                maxLength="20"
                            />
                            <input
                                type="month"
                                name="expiry"
                                className="crdnum"
                                placeholder="expiry number"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                maxLength="4"
                            />
                            <input
                                type="tel"
                                className="crdnum"
                                name="cvc"
                                placeholder="ENTER CVV NUMBER"
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                maxLength="3"
                            />
                            <button type="submit" className="paymentbtn">Submit Payment</button>
                        </form>
                    </div>
                </div>

            );
        }
    }
}
