import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "PUT") {
    const { id } = req.query; 
    const { completed } = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin@cluster0.4ooptbe.mongodb.net/supercoders?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");

    try {
      const result = await todosCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { completed } }, // Update the completed field
        { returnOriginal: false } // Return the updated document
      );
      console.log(result,"result")
      res.status(200).json({ message: "Todo updated", todo: result.value });
    } catch (error) {
      console.error("Error updating todo:", error);
      res.status(500).json({ message: "Server error" });
    } finally {
      client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" }); // Method not allowed for other HTTP methods
  }
}

export default handler;
