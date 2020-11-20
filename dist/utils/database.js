"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class Database {
    read() {
        return fs_1.default.readFileSync('database.txt', 'utf-8');
    }
    getVotesValue() {
        return this.read().split('=')[1];
    }
    // The default value to increase is one.
    increaseVotes(value = 1) {
        const votesNumber = Number(this.getVotesValue());
        fs_1.default.writeFileSync('database.txt', `votes=${votesNumber + 1}`);
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map