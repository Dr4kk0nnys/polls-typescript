import Database from '../utils/database'
const database = new Database()

import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    database.increaseVotes()
    res.send({"success": true, "votes": database.getVotesValue()});
});

export default router;