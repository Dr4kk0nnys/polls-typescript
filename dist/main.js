"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./routes/index"));
const vote_1 = __importDefault(require("./routes/vote"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use('/', index_1.default);
app.use('/vote', vote_1.default);
// Port's default value is 3000.
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
//# sourceMappingURL=main.js.map