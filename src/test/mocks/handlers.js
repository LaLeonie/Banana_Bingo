import { rest } from 'msw';
import plants from './plants';

const url = `https://api.airtable.com/v0/apprXnCLMqQbaOEvK/Table%201?api_key=${process.env.REACT_APP_API_KEY}`;

export const handlers = [
  rest.get(url),
  (req, res, ctx) => {
    return res(ctx.json(plants));
  },
];
