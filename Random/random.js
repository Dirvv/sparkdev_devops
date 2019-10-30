const port = 8080;
const express = require("express")
const cors = require("cors")

//--- Express setup
const app = express();
app.use(cors())
app.use(express.static('client'))

const Prometheus = require('prom-client');
const collectDefaultMetrics = Prometheus.collectDefaultMetrics;
collectDefaultMetrics({
    timeout:5000
});

app.listen({ port: 9095 }, () => {
    console.log("Server ready at http://localhost:" + port)
})


app.get("/metrics", (req, res) => {
    res.end(Prometheus.register.metrics())
})