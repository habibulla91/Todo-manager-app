import { Router } from 'express';

export const appRoutes = Router();

appRoutes.get('/', (req, res) => {
  res.send('App is running');
});