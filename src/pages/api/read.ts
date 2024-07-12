//reading file from my github
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { filePath }: any = req.body;

  // Define GitHub repository details
  const owner = "Mortazasadat"; // Replace with the repo owner's username
  const repo = "murtaza";
  const auth_code = process.env.NEXT_PUBLIC_GITHUB_API_KEY;

  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/vnd.github.v3.raw",
        Authorization: `token ${auth_code}`,
      },
    });

    const fileContents = response.data;
    // const result = fileContents.replace(/tw-/gi, "");

    res.status(200).json({ content: fileContents });
  } catch (error: any) {
    console.error("Error fetching from GitHub:", error.message);
    res
      .status(error.response?.status || 500)
      .json({ error: "Failed to fetch file from GitHub" });
  }
}
