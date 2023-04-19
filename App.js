"use strict";
exports.__esModule = true;
var firefly_sdk_1 = require("@hyperledger/firefly-sdk");
var firefly = new firefly_sdk_1["default"]({ host: 'http://localhost:5000' });
var apiName = 'asset_transfer';
var methodPath = 'GetAllAssets';
var request = { /* request data */};
var options = { /* options */};
var responsePromise = firefly.queryContractAPI(apiName, methodPath, request, options);
responsePromise.then(function (response) {
    if (Array.isArray(response)) {
        var owners = response.map(function (property) { return property.Owner; });
        var isTejaPresent = owners.some(function (name) { return name === 'teja'; });
        console.log(isTejaPresent);
    }
    else {
        console.error('response is not an array');
    }
})["catch"](function (error) {
    console.error(error);
});
