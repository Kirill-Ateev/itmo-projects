import headersTextPlain from '../app.js';
import mongoose from 'mongoose';

export default (express, User) => {
  const router = express.Router();

  router
    .route('/')
    .get(async (r) => r.res.json(await User.find()))
    .post(async (req, res) => {
      res.set(headersTextPlain);
      console.log(req.body)
      const { login, password, URL } = req.body;
      
      const newUser = new User({ login, password });

      try {
        await mongoose.connect(URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        await newUser.save();
        res.status(201).json({ 'Добавлено: ': login });
      } catch (e) {
        res.status(400).json({ Ошибка: `${e}` });
      }
    });

  router.route('/:login').get(async (r) => {
    const { login } = r.params;
    r.res.json(await User.find({ login }));
  });

  return router;
};
