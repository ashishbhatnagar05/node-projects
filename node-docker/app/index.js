const app = require('express')();

app.get('/', (_, res) => {
    res.send("Helllo.............");
})

app.listen(8888, () => console.log('Listening.........'))
