import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;
    console.log(req.body)
    res.status(200).json({ message: `it's ok ${username}` });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ error: error.message });
    }
  }
};
