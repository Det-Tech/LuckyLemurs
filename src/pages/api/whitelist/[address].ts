import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "libs/mongodb";

type Data = {
  quantity: number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {
    query: { address: address },
    method,
  } = req;

  const client = await clientPromise;
  const db = client.db();

  switch (method) {
    case "GET":
      // Get data from your database
      const _address = typeof address === "string" ? address : "";
      const user = await db
        .collection("whitelist")
        .findOne({ address: _address }, { fields: { _id: 0 } });
      if (user) {
        res.status(200).json({ quantity: user.quantity });
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
