import { MongoClient } from "mongodb";

async function handler(req, res) {
  const data = req.body;
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.4ooptbe.mongodb.net/supercoders?retryWrites=true&w=majority"
  );
  const db = await client.db();
  const todosCollection = db.collection("todos");
  const result = await todosCollection.find().toArray();
  client.close();
  res.status(201).json(result);
}

export default handler;
