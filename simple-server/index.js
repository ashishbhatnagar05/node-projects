const app = require('express')();

app.get('/', (_, res) => {
    res.send("Helllo.............");
})

app.listen(9999, () => console.log('Listening.........'))
