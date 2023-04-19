const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello, Welcome to the server");
});
app.post('/auth', (req, res) => {
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
            var isUserPresent = owners.some(function (name) { return name === req.body.username; });
            console.log(isUserPresent);
            res.json(isUserPresent);

        }
    })["catch"](function (error) {
        console.error(error);
    });
});

app.post('/BalanceOf', (req, res) => {
    console.log(req.body);
    let userData = [
        {username: "teja", value: "eDUwOTo6Q049dGVqYSxPVT1jbGllbnQ6OkNOPWZhYnJpY19jYS5vcmcxLmV4YW1wbGUuY29tLE9VPUh5cGVybGVkZ2VyIEZpcmVGbHksTz1vcmcxLmV4YW1wbGUuY29tLEw9UmFsZWlnaCxTVD1Ob3J0aCBDYXJvbGluYSxDPVVT"}, 
        {username: "prajakta", value: "eDUwOTo6Q049cHJhamFrdGEsT1U9Y2xpZW50OjpDTj1mYWJyaWNfY2Eub3JnMS5leGFtcGxlLmNvbSxPVT1IeXBlcmxlZGdlciBGaXJlRmx5LE89b3JnMS5leGFtcGxlLmNvbSxMPVJhbGVpZ2gsU1Q9Tm9ydGggQ2Fyb2xpbmEsQz1VUw=="}, 
        {username: "resha", value: "eDUwOTo6Q049cmVzaGEsT1U9Y2xpZW50OjpDTj1mYWJyaWNfY2Eub3JnMS5leGFtcGxlLmNvbSxPVT1IeXBlcmxlZGdlciBGaXJlRmx5LE89b3JnMS5leGFtcGxlLmNvbSxMPVJhbGVpZ2gsU1Q9Tm9ydGggQ2Fyb2xpbmEsQz1VUw=="},
        {username: "smayan", value: "eDUwOTo6Q049c21heWFuLE9VPWNsaWVudDo6Q049ZmFicmljX2NhLm9yZzEuZXhhbXBsZS5jb20sT1U9SHlwZXJsZWRnZXIgRmlyZUZseSxPPW9yZzEuZXhhbXBsZS5jb20sTD1SYWxlaWdoLFNUPU5vcnRoIENhcm9saW5hLEM9VVM="},
        {username: "rahul", value: "eDUwOTo6Q049cmFodWwsT1U9Y2xpZW50OjpDTj1mYWJyaWNfY2Eub3JnMS5leGFtcGxlLmNvbSxPVT1IeXBlcmxlZGdlciBGaXJlRmx5LE89b3JnMS5leGFtcGxlLmNvbSxMPVJhbGVpZ2gsU1Q9Tm9ydGggQ2Fyb2xpbmEsQz1VUw=="},
        {username: "sahithi", value: "eDUwOTo6Q049c2FoaXRoaSxPVT1jbGllbnQ6OkNOPWZhYnJpY19jYS5vcmcxLmV4YW1wbGUuY29tLE9VPUh5cGVybGVkZ2VyIEZpcmVGbHksTz1vcmcxLmV4YW1wbGUuY29tLEw9UmFsZWlnaCxTVD1Ob3J0aCBDYXJvbGluYSxDPVVT"},
        {username: "ujwala", value: "eDUwOTo6Q049dWp3YWxhLE9VPWNsaWVudDo6Q049ZmFicmljX2NhLm9yZzEuZXhhbXBsZS5jb20sT1U9SHlwZXJsZWRnZXIgRmlyZUZseSxPPW9yZzEuZXhhbXBsZS5jb20sTD1SYWxlaWdoLFNUPU5vcnRoIENhcm9saW5hLEM9VVM="},
        {username: "vashista", value: "eDUwOTo6Q049dmFzaGlzdGEsT1U9Y2xpZW50OjpDTj1mYWJyaWNfY2Eub3JnMS5leGFtcGxlLmNvbSxPVT1IeXBlcmxlZGdlciBGaXJlRmx5LE89b3JnMS5leGFtcGxlLmNvbSxMPVJhbGVpZ2gsU1Q9Tm9ydGggQ2Fyb2xpbmEsQz1VUw=="}
    ];
    let user = userData.find(user => user.username === req.body.account);
    var firefly_sdk_1 = require("@hyperledger/firefly-sdk");
    var firefly = new firefly_sdk_1["default"]({ host: 'http://localhost:5000' });
    var apiName = 'token_erc_20';
    var methodPath = 'BalanceOf';
    var request = {
        "input": {
        "account": user.value
      }};
    var options = { /* options */};
    var responsePromise = firefly.queryContractAPI(apiName, methodPath, request, options);
    responsePromise.then(function (response) {
        res.json(response)
        console.log(response)
    })["catch"](function (error) {
        console.error(error);
    });
});

app.post('/AssetsForSale', (req, res) => {
    var firefly_sdk_1 = require("@hyperledger/firefly-sdk");
    var firefly = new firefly_sdk_1["default"]({ host: 'http://localhost:5000' });
    var apiName = 'asset_transfer';
    var methodPath = 'GetAssetsForSale';
    var request = { /* request data */};
    var options = { /* options */};
    var responsePromise = firefly.queryContractAPI(apiName, methodPath, request, options);
    responsePromise.then(function (response) {
        res.json(response)
        console.log(response)
    })["catch"](function (error) {
        console.error(error);
    });
});

app.post('/SetAssetForSale', (req, res) => {
    var firefly_sdk_1 = require("@hyperledger/firefly-sdk");
    var firefly = new firefly_sdk_1["default"]({ host: 'http://localhost:5000' });
    var apiName = 'asset_transfer';
    var methodPath = 'SellAsset';
    console.log(req.body.assetId)
    console.log(req.body.name)
    var request = {
        "input": {
            "assetID": req.body.assetId,
            "price": "50",
            "seller": req.body.name
        }
    }
    var options = { /* options */};
    firefly.invokeContractAPI(apiName, methodPath, request, options);
    console.log("asset is set for sale")
});
app.post('/BuyAsset', (req, res) => {
    var firefly_sdk_1 = require("@hyperledger/firefly-sdk");
    var firefly = new firefly_sdk_1["default"]({ host: 'http://localhost:5000' });
    var apiName = 'asset_transfer';
    var methodPath = 'ReadAsset';
    var request = {
        "input": {
            "id": req.body.assetId
        }
    }
    var options = { /* options */};
    var responsePromise=firefly.queryContractAPI(apiName, methodPath, request, options);
    responsePromise.then(function (response) {
        console.log(response)
        res.json(response)
    })["catch"](function (error) {
        console.error(error);
    });
});

app.post('/Transfer', (req, res) => {
    let userData = [
        {username: "teja", value: "eDUwOTo6Q049dGVqYSxPVT1jbGllbnQ6OkNOPWZhYnJpY19jYS5vcmcxLmV4YW1wbGUuY29tLE9VPUh5cGVybGVkZ2VyIEZpcmVGbHksTz1vcmcxLmV4YW1wbGUuY29tLEw9UmFsZWlnaCxTVD1Ob3J0aCBDYXJvbGluYSxDPVVT"}, 
        {username: "prajakta", value: "eDUwOTo6Q049cHJhamFrdGEsT1U9Y2xpZW50OjpDTj1mYWJyaWNfY2Eub3JnMS5leGFtcGxlLmNvbSxPVT1IeXBlcmxlZGdlciBGaXJlRmx5LE89b3JnMS5leGFtcGxlLmNvbSxMPVJhbGVpZ2gsU1Q9Tm9ydGggQ2Fyb2xpbmEsQz1VUw=="}, 
        {username: "resha", value: "eDUwOTo6Q049cmVzaGEsT1U9Y2xpZW50OjpDTj1mYWJyaWNfY2Eub3JnMS5leGFtcGxlLmNvbSxPVT1IeXBlcmxlZGdlciBGaXJlRmx5LE89b3JnMS5leGFtcGxlLmNvbSxMPVJhbGVpZ2gsU1Q9Tm9ydGggQ2Fyb2xpbmEsQz1VUw=="},
        {username: "smayan", value: "eDUwOTo6Q049c21heWFuLE9VPWNsaWVudDo6Q049ZmFicmljX2NhLm9yZzEuZXhhbXBsZS5jb20sT1U9SHlwZXJsZWRnZXIgRmlyZUZseSxPPW9yZzEuZXhhbXBsZS5jb20sTD1SYWxlaWdoLFNUPU5vcnRoIENhcm9saW5hLEM9VVM="},
        {username: "rahul", value: "eDUwOTo6Q049cmFodWwsT1U9Y2xpZW50OjpDTj1mYWJyaWNfY2Eub3JnMS5leGFtcGxlLmNvbSxPVT1IeXBlcmxlZGdlciBGaXJlRmx5LE89b3JnMS5leGFtcGxlLmNvbSxMPVJhbGVpZ2gsU1Q9Tm9ydGggQ2Fyb2xpbmEsQz1VUw=="},
        {username: "sahithi", value: "eDUwOTo6Q049c2FoaXRoaSxPVT1jbGllbnQ6OkNOPWZhYnJpY19jYS5vcmcxLmV4YW1wbGUuY29tLE9VPUh5cGVybGVkZ2VyIEZpcmVGbHksTz1vcmcxLmV4YW1wbGUuY29tLEw9UmFsZWlnaCxTVD1Ob3J0aCBDYXJvbGluYSxDPVVT"},
        {username: "ujwala", value: "eDUwOTo6Q049dWp3YWxhLE9VPWNsaWVudDo6Q049ZmFicmljX2NhLm9yZzEuZXhhbXBsZS5jb20sT1U9SHlwZXJsZWRnZXIgRmlyZUZseSxPPW9yZzEuZXhhbXBsZS5jb20sTD1SYWxlaWdoLFNUPU5vcnRoIENhcm9saW5hLEM9VVM="},
        {username: "vashista", value: "eDUwOTo6Q049dmFzaGlzdGEsT1U9Y2xpZW50OjpDTj1mYWJyaWNfY2Eub3JnMS5leGFtcGxlLmNvbSxPVT1IeXBlcmxlZGdlciBGaXJlRmx5LE89b3JnMS5leGFtcGxlLmNvbSxMPVJhbGVpZ2gsU1Q9Tm9ydGggQ2Fyb2xpbmEsQz1VUw=="}
    ];
    let user = userData.find(user => user.username === req.body.owner);
    let user1= userData.find(user => user.username === req.body.username);
    console.log(req.body)
    var firefly_sdk_1 = require("@hyperledger/firefly-sdk");
    var firefly = new firefly_sdk_1["default"]({ host: 'http://localhost:5000' });
    var apiName = 'token_erc_20';
    var name;
    var methodPath = 'TransferFrom';
    var request = {
        "input": {
            "from": user1.value,
            "to": user.value,
            "value": req.body.price
        }
    };
    var options = { /* options */};
    var responsePromise=firefly.invokeContractAPI(apiName, methodPath, request, options);
    responsePromise.then(function (response) {
        console.log(response)
        res.json("Payment is done successfully")
    })["catch"](function (error) {
        console.error(error);
    });
});

app.post('/sellasset', (req, res) => {
    console.log(req.body);
    var firefly_sdk_1 = require("@hyperledger/firefly-sdk");
    var firefly = new firefly_sdk_1["default"]({ host: 'http://localhost:5000' });
    var apiName = 'asset_transfer';
    var methodPath = 'TransferAsset';
    var request = {
        "input": {
            "id": req.body.assetId,
            "newOwner": req.body.newOwner        
    }
    }
    var options = { /* options */};
    var responsePromise = firefly.invokeContractAPI(apiName, methodPath, request, options);
    responsePromise.then(function (response) {
        console.log(response)
        res.json("Payment is done successfully")
    })["catch"](function (error) {
        console.error(error);
    });
});

app.post('/GetMyAssets', (req, res) => {
    console.log(req.body);
    var firefly_sdk_1 = require("@hyperledger/firefly-sdk");
    var firefly = new firefly_sdk_1["default"]({ host: 'http://localhost:5000' });
    var apiName = 'asset_transfer';
    var methodPath = 'GetAllAssets';
    var request = { /* request data */};
    
    var assetsArray = []
    var responsePromise = firefly.queryContractAPI(apiName, methodPath, request);
    responsePromise.then(function (response) {
      console.log(response);
      let assetsArray = [];
      for (let i = 0; i < response.length; i++) {
        if (response[i].Owner === req.body.username) {
          assetsArray.push(response[i]);
        }
      }
      console.log(assetsArray);
      res.json(assetsArray);
    })["catch"](function (error) {
      console.error(error);
    });
  });
