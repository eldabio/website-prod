import { sql } from '@vercel/postgres';
import { z } from 'zod';

const JoinSchema = z.object({
  email: z.string().email().max(128),
});

/**
 * @type {import('next').NextApiHandler}
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
  }

  try {
    const body = JoinSchema.safeParse(JSON.parse(req.body));

    if (!body.success) {
      return res.status(400).send(body.error.message);
    }

    await sql`INSERT INTO emails (email) VALUES (${body.data.email}) ON CONFLICT DO NOTHING`;

    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(500).send('An unexpected error occured');
  }
}
