import "dotenv/config";
import express from "express";
import UserController from "./app/controller/UserController";
import BullBoard from "bull-board";
import Queue from "./app/lib/Queue";
import BullBoard from "bull-board";

const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.use("/admin/queues", BullBoard.UI);

app.post("/user", UserController.store);

app.listen(3333, () => {
  console.log("Server running in localhost:3333.");
});
