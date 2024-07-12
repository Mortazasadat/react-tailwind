// pages/api/read-local-file.ts
//reading my file from local file
import { promises as fs } from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { filePath } = req.body;

  if (!filePath || typeof filePath !== "string") {
    return res
      .status(400)
      .json({ error: "File path is not set or is invalid" });
  }

  // Construct the full path to the file
  const fileFullPath = path.join(process.cwd(), filePath);

  try {
    const fileContents = await fs.readFile(fileFullPath, "utf-8");
    res.status(200).json({ content: fileContents });
  } catch (error) {
    console.error("Error reading local file:", error);
    res
      .status(500)
      .json({ error: "Failed to read file from local file system" });
  }
}
