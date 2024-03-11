// teamgenerator.js
class TeamGenerator {
  constructor(players, playersPerTeam = 3) {
    this.players = players;
    this.playersPerTeam = playersPerTeam;
    this.teams = [];
  }

  generateTeams() {
    let shuffledPlayers = [...this.players].sort(() => 0.5 - Math.random());
    let teamIndex = 0;

    while (shuffledPlayers.length > 0) {
      let teamPlayers = shuffledPlayers.splice(0, this.playersPerTeam);
      let teamName = `Équipe ${teamIndex + 1}`;
      let team = {
        name: teamName,
        players: teamPlayers,
      };
      this.teams.push(team);
      teamIndex++;
    }
  }

  getTeams() {
    return this.teams;
  }

  // Nouvelle méthode pour trier les équipes par nombre de joueurs
  sortTeamsByPlayerCount() {
    return this.teams.slice().sort((teamA, teamB) => teamA.players.length - teamB.players.length);
  }

  // Nouvelle méthode pour trouver une équipe par nom de joueur
  findTeamByPlayerName(playerName) {
    return this.teams.find(team => team.players.includes(playerName));
  }
}

export default TeamGenerator;
