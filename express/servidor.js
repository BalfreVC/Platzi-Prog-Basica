var expressLib = require("express");
var applicacion = expressLib();

applicacion.get('/', inicio); 
applicacion.get('/cursos', cursos); 

function inicio (req, res) {
    res.send('Bienvenidos a <strong>Ivana.com</strong> <br/>Primer pagina con Node en mi Lap!!!');
}

function cursos (req, res) {
    res.send('<p> Aqui se mostraran los cursos </p>');
}

applicacion.listen(8989);