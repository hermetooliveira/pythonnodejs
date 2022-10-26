var express = require('express');
var bodyParser = require('body-parser');
  
var app = express();
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
  
app.post("/veiculos", (req, res) => {
  
    // Retrieve array form post body
    var placa = req.body.placa;
    console.log(placa);   
  
    // Return json response
    if(placa == 'PNM9200'){
        res.json({ modelo: 'GOL PRATA', situacao: 'ROUBO/FURTO!' });
    }
    if(placa == 'OSA0670'){
        res.json({ modelo: 'GOL PRETO', situacao: 'VEÍCULO REGULAR' });
    }
    
});
  
// Server listening to PORT 3000
console.log('Runnig on port 3000')
app.listen(3000);