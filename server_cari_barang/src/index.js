const express = require('express')
const app = express()
const port = 3002
const axios = require('axios');
var cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/products/:id", async (req,res) => {
    let url = "https://node-service.caribarang.id/api/product/"+req.params.id;
    console.log("url : ",url);
    axios({
        url:url
    })
    .then((resp) => {
        // console.log(res.data);
        res.send(resp.data)
    })
    .catch((err) => {
        res.send(err);
    } )

    // res.send("masuk ..."+req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening on port wisnu 215 ${port}`)
})