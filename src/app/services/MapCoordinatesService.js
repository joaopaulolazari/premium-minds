const {
  getLastCoordinate,
  insertCoordinate,
  findCoordinate,
  removeCoordinate
} = require('../../infra/database/repository/MapCoordinatesRepository');

const moveInMap = async ({ command }) => {
  let lastCoordinate = await getLastCoordinate();

  if (!lastCoordinate) {
    await insertCoordinate({ x: 0, y: 0 });
    lastCoordinate = await getLastCoordinate();
  }

  let { x, y } = lastCoordinate;

  switch (command) {
    case 'N':
      y += 1;
      break;
    case 'S':
      y -= 1;
      break;
    case 'L':
      x += 1;
      break;
    case 'O':
      x -= 1;
      break;
    default:
      throw new Error('Invalid command.');
  }

  const existCoordinate = await findCoordinate({ x, y });
  if (existCoordinate) await removeCoordinate(existCoordinate);

  const newCoordinate = await insertCoordinate({ x, y });
  return newCoordinate;
};

module.exports = {
  moveInMap
};
