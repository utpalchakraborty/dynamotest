var AWS = require("aws-sdk");
require('dotenv').config()

AWS.config.update({
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_ENDPOINT,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
});

var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "auth_data",
    Key:{
        "app": "cmp",
        "user": "utpal"
    }
};

docClient.get(params, function(err, data) {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
});

docClient.scan({ TableName: "auth_data"}, function(err, data) {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
})