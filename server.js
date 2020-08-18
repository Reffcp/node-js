const express= require('express');
const bodyParser= require('body-parser');
const router=express.Router();

var app= express();
app.use(bodyParser.json())
app.use(router)


router.get('/',(req,res) => {
    console.log(req.headers);
    res.send('Hola desde get');
})
router.post('/',(req,res) => {
    res.send('Hola desde get');
})
router.delete('/',(req,res) => {
    res.send('Hola desde get');
})
router.put('/',(req,res) => {
    res.send('Hola desde get');
})
router.patch('/',(req,res) => {
    res.send('Hola desde get');
})
// app.use('/',(req,res)=> {
//     res.send('Hola')
// });

app.listen(3000);
console.log('La app está escuchando en http://localhost:3000')