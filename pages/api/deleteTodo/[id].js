import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query; // Extract the todo ID from the request query
    console.log(id,"id")

    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin@cluster0.4ooptbe.mongodb.net/supercoders?retryWrites=true&w=majority"
    );
    const db = client.db();
    const todosCollection = db.collection("todos");

    try {
      const result = await todosCollection.deleteOne({ _id:new ObjectId(id) });

      if (result.deletedCount === 0) {
        // If no document found with the given ID
        return res.status(404).json({ message: "Todo not found" });
      }

      res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
      console.error("Error deleting todo:", error);
      res.status(500).json({ message: "Server error" });
    } finally {
      client.close();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" }); // Method not allowed for other HTTP methods
  }
}

export default handler;
