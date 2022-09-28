import {Game} from "../types/Game";

class FakeService {

  // Fausse API
  private games: Game[] = [
    {id: 1, title: 'The Last of Us'}
  ];

  getGames(): Game[] {
    return this.games;
  }

  createGame(new_game: Game): Game {
    //
    //
    //
    this.games.push(new_game);
    return new_game;
  }

  getGameById(id: number): Game | undefined {
    return this.games.find(jeu => jeu.id === id);
  }

}

const fakeService =  new FakeService();
export default fakeService; // objet
