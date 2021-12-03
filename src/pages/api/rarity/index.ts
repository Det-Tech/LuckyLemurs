import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "libs/mongodb";

type Data = {
  id: number;
  rarity: number;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) => {
  const client = await clientPromise;
  const db = client.db();
  const rarities = await db
    .collection("rarities")
    .find({}, { fields: { _id: 0, traits: 0 } })
    .toArray();
  res.status(200).json(rarities);
};

export default handler;
