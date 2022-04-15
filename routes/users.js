import express from 'express';
import mysql from 'mysql';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'bradi123',
    database : "ticket-reservation"
  });

const router = express.Router();


const options = {
    definition: {
        openapi : '3.0.0',
        info : {
            title : 'Ticket Reservation Project',
            version : '1.0.0'
        },
        servers : [
            {
            url : 'http://localhost:5050/'
            }
    ]
    },
    apis : ['routes/users.js']
}


const swaggerSpec = swaggerJsDoc(options)
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//Route for getting all users
/**
 * @swagger
 * /users:
 *  get:
 *      summary: This API is used to get all users API
 *      description: This API is used to get all users API
 *      responses:
 *          '200':
 *              description: testing get method
 */
router.get('/', (req, res) => {
    con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
    });

//Route for getting all usernames
/**
 * @swagger
 * /users/usernames:
 *  get:
 *      summary: This Api is used to get usernames 
 *      description: This Api is used to get usernames
 *      responses:
 *          '200':
 *              description: testing get method
 */
router.get('/usernames', (req, res) => {
    con.query("SELECT username FROM users", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });
});


// router.get('/:id', (req, res) => {
//     con.query("SELECT * FROM users WHERE id = "+req.params.id;, function (err, result, fields) {
//         if (err) throw err;
//         // if there is no error, you have the result
//         res.send(result);
//       });
// })

export default router;