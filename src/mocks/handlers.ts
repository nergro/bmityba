import { rest } from 'msw';

export const handlers = [
  // rest.post('/mail', (req, res, ctx) => {
  //   return res(
  //     // ctx.status(400),
  //     ctx.json({
  //       id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
  //       username: '',
  //       firstName: 'John',
  //       lastName: 'Maverick',
  //     })
  //   );
  // }),
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: 'You must add request handler.' }));
  }),
];
