const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    //Recuperando dados formulario
    const params = Array(
        request.body.title,
        request.body.description
    );

    const query = "INSERT INTO bd_apisuber(title, description) VALUES(?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
             .status(201)
             .json({
                success: true,
                message: "Sucesso!",
                data: resulsts
             })
        } else {
            response
             .status(400)
             .json({
                success: false,
                message: "Ops, erro"
             })
        }
    })
}

module.exports = {
    storeTask
}