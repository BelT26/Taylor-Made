import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "GET") {
    const data = req.body;
  }
  const client = await MongoClient.connect(
    "mongodb+srv://HelenT:pfVcRZN0bFJMptOP@cluster0.6tfofs8.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("taylor-made");
  const projectCollection = db.collection("projects");
}

export default handler;
