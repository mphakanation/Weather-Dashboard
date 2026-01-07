const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const getWeather = async (req, res, next) => {
  try {
    const city = req.query.city;
    if (!city) return res.status(400).json({ error: 'City is required' });

    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      return res.status(data.cod).json({ error: data.message });
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports = { getWeather };
