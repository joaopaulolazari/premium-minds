const { expect } = require('chai');

const MapCoordinatesService = require('../../../../src/app/services/MapCoordinatesService');

describe('App :: Services :: MapCoordinatesService', () => {
  describe('When insert first coordinate to North', () => {
    it('Have coordinate 0, 1', async () => {
      const coordinate = await MapCoordinatesService.moveInMap({ command: 'N' });
      expect(coordinate.x).to.eql(0);
      expect(coordinate.y).to.eql(1);
    });

    it("And have 2 pokémon's", async () => {
      const countPokemon = await MapCoordinatesService.count();
      expect(countPokemon).to.eql(2);
    });

    it('If return to South the coordinate is 0, 0', async () => {
      const coordinate = await MapCoordinatesService.moveInMap({ command: 'S' });
      expect(coordinate.x).to.eql(0);
      expect(coordinate.y).to.eql(0);
    });

    it("And have 2 pokémon's", async () => {
      const countPokemon = await MapCoordinatesService.count();
      expect(countPokemon).to.eql(2);
    });

    it('When reset collection', async () => {
      await MapCoordinatesService.reset();
      const countPokemon = await MapCoordinatesService.count();
      expect(countPokemon).to.eql(0);
    });
  });
  describe('When insert incorrect command', async () => {
    it('Returns error invalid command', async () => {
      try {
        await MapCoordinatesService.moveInMap({ command: 'R' });
      } catch (error) {
        expect(error.message).to.eql('Invalid command.');
      }
    });
  });
});
