const axios = require('axios');
const { expect } = require('chai');

describe('Interfaces :: HTTP :: Controllers :: MapCoordinatesController', () => {
  describe('#sendCommandAction', () => {
    it('First I reset the game', async () => {
      const res = await axios.post('http://localhost:3000/api/reset');
      expect(res.status).to.eql(200);
      expect(res.data.message).to.contains('Game reseted.');
    });

    it('Then I have 0 pokemon`s', async () => {
      const res = await axios.get('http://localhost:3000/api/count');
      expect(res.status).to.eql(200);
      expect(res.data.message).to.contains("You have 0 pokémon's now.");
    });

    it('When send valid command', async () => {
      const res = await axios.post('http://localhost:3000/api/send-command', { command: 'N' });
      expect(res.status).to.eql(200);
      expect(res.data.message).to.contains('New movement accept in');
    });

    it("Then I have 2 pokémon's", async () => {
      const res = await axios.get('http://localhost:3000/api/count');
      expect(res.status).to.eql(200);
      expect(res.data.message).to.contains("You have 2 pokémon's now.");
    });

    it('When send invalid command', async () => {
      try {
        await axios.post('http://localhost:3000/api/send-command', { command: 'R' });
      } catch ({ response: res }) {
        expect(res.status).to.eql(400);
        expect(res.data).to.contains('Error validating request body. "command" must be one of [N, S, L, O].');
      }
    });
  });
});
