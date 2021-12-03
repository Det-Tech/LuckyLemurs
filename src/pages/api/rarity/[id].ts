import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "libs/mongodb";

type Data = {
  rarity: number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {
    query: { id },
    method,
  } = req;

  const client = await clientPromise;
  const db = client.db();

  switch (method) {
    case "GET":
      // Get data from your database
      const _id = typeof id === "string" ? parseInt(id) : -1;
      const lemur = await db
        .collection("rarities")
        .findOne({ id: _id }, { fields: { _id: 0, traits: 0 } });
      if (lemur) {
        res.status(200).json({ rarity: lemur.rarity });
      } else res.status(500).end("Error occurred");
      break;
    case "PUT":
    // Update or create data in your database
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
