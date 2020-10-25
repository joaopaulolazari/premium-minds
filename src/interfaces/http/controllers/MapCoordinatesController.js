const { moveInMap, count, reset } = require('../../../app/services/MapCoordinatesService');

const sendCommandAction = async (req, res) => {
  try {
    const coordinate = await moveInMap(req.body);
    res.json({ message: `New movement accept in ${JSON.stringify(coordinate)}` });
  } catch (error) {
    res.send(error);
  }
};

const resetAction = async (req, res) => {
  try {
    await reset();
    res.json({ message: 'Game reseted.' });
  } catch (error) {
    res.send(error);
  }
};

const countAction = async (req, res) => {
  try {
    const countPokemon = await count();
    res.json({ message: `You have ${countPokemon} pokémon's now.` });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  countAction,
  sendCommandAction,
  resetAction
};
