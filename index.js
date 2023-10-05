'use strict'

const express = require('express')
const app = express()

require('dotenv').config()

const pi = (iterations) => {
    let pi = 0;
    for (let i = 0; i < iterations; i++) {
        // Leibniz formula
        pi += (4 / (2 * i + 1)) * (i % 2 === 0 ? 1 : -1);
    }
    return pi;
}

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is up on port 3000')
})

app.get('/', (req, res) => {
    const iterations = req.query.iterations || 10
    const result = pi(iterations + Math.trunc(Math.random() * iterations))

    console.log(`iterations: ${iterations}, result: ${result}`)

    res.send({
        iterations: iterations,
        pi: result
    })
})

