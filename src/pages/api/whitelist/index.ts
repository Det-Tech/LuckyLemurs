import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "libs/mongodb";

type Data = {
  discord: string;
  twitter: string;
  address: string;
  quantity: number;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) => {
  const client = await clientPromise;
  const db = client.db();
  const whitelist = await db
    .collection("whitelist")
    .find({}, { fields: { _id: 0 } })
    .toArray();
  res.status(200).json(whitelist);
};

export default handler;
