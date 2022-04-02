import express from 'express';

const router = express.Router();

//all routes starting with /users 
router.get('/', (req, res) => {
    res.send('Hello from route "/users"');
});

router.get('/user', (req, res) => {
    res.send('Hello from route "/users/user"');
})

export default router;