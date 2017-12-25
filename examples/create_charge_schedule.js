"use strict";
exports.__esModule = true;
var omise = require("../index")({
    publicKey: process.env.OMISE_PUBLIC_KEY,
    // secretKey: process.env.OMISE_SECRET_KEY,
    secretKey: 'skey_5a2glbtzhmy7r682qkt'
});
var schedule = {
    every: 2,
    period: 'day',
    start_date: '21-12-2017',
    end_date: '30-01-2018',
    charge: {
        amount: 5000,
        currency: 'thb'
    }
};
omise.schedule.create(schedule, function (err, resp) {
    console.log(err);
    console.log(resp);
});
