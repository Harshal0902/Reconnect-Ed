import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

export default function Donate() {

    const loadScript = (src) => {
        return new Promise((resovle) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resovle(true);
            };

            script.onerror = () => {
                resovle(false);
            };

            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async (amount) => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("You are offline... Failed to load Razorpay SDK");
            return;
        }

        const options = {
            key: "RAZORPAY_TEST_KEY",
            currency: "INR",
            amount: amount * 100,
            name: "APP NAME",
            description: "Thanks for purchasing",

            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert("Payment Successfully");
            },
            prefill: {
                name: "APP NAME",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className='text-white'>
            <div className='grid place-items-center'>
                <h1 className='text-5xl'>Donate</h1>
                <div className='bg-secondary w-36 h-1'></div>
            </div>

            <div className='grid place-items-center py-10 text-2xl'>Donate to NGO for helping people with mental illness.
            </div>

            <div className='flex flex-wrap flex-col-2 justify-around w-full px-16'>

                <div className="m-8">
                    <div className="w-72 h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg" onClick={() => displayRazorpay(500)}>
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold ">Donate Rs. 500</div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="w-72 h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg" onClick={() => displayRazorpay(1000)}>
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold ">Donate Rs. 1000</div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="w-72 h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg" onClick={() => displayRazorpay(5000)}>
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold ">Donate Rs. 5000</div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="w-72 h-56 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg" onClick={() => displayRazorpay(5000)}>
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold ">Custom</div>
                    </div>
                </div>

            </div>

        </div>
    )
}
