import fs from 'fs';

class Database {
    read() {
        return fs.readFileSync('database.txt', 'utf-8');
    }

    getVotesValue() {
        return this.read().split('=')[1];
    }

    // The default value to increase is one.
    increaseVotes(value: number=1) {
        const votesNumber = Number(this.getVotesValue());

        fs.writeFileSync('database.txt', `votes=${votesNumber + 1}`);
    }
}

export default Database;