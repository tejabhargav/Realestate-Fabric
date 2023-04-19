import FireFly from '@hyperledger/firefly-sdk';
import {FireFlyContractAPIQueryRequest, FireFlyCreateOptions, FireFlyContractQueryResponse } from '@hyperledger/firefly-sdk';


var firefly_sdk_1 = require("@hyperledger/firefly-sdk");
    var firefly = new firefly_sdk_1["default"]({ host: 'http://localhost:5000' });
    var apiName = 'asset_transfer';
    var methodPath = 'SellAsset';
    var request = {
        "input": {
            "assetID": "1",
            "price": "50",
            "seller": "Prajakta"
        }
    }
    var options = { /* options */};
    firefly.invokeContractAPI(apiName, methodPath, request, options);