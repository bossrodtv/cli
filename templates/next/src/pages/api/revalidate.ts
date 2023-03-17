import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const paths = req.body.paths as string[];

  if (!paths || paths.length <= 0) return res.status(400).json({ message: 'paths is required' });

  /* All the paths you pass in the payload will be force revalidated. */
  for (const path of paths) {
    await res.revalidate(path);
  }

  res.status(200).json({ revalidate: true });
}
