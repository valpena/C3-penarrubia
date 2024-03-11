// teamGenerator.test.js
import { expect } from 'chai';
import TeamGenerator from '../src/teamGenerator.js';

describe('TeamGenerator', () => {
    describe('sortTeamsByPlayerCount()', () => {
        it('devrait trier les équipes par nombre de joueurs croissant', () => {
            const players = ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4', 'Joueur 5', 'Joueur 6'];
            const teamGenerator = new TeamGenerator(players);
            teamGenerator.generateTeams();
            const sortedTeams = teamGenerator.sortTeamsByPlayerCount();
            const sortedPlayerCounts = sortedTeams.map(team => team.players.length);
            expect(sortedPlayerCounts).to.eql([3, 3]); // Il y a seulement deux équipes générées
        });
    });

    describe('findTeamByPlayerName()', () => {
        it('devrait trouver l\'équipe contenant un joueur donné', () => {
            const players = ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4', 'Joueur 5', 'Joueur 6'];
            const teamGenerator = new TeamGenerator(players);
            teamGenerator.generateTeams();
            const playerName = 'Joueur 3';
            const team = teamGenerator.findTeamByPlayerName(playerName);
            expect(team).to.exist; // L'équipe contenant le joueur donné devrait être trouvée
            expect(team.players).to.include(playerName); // L'équipe trouvée devrait contenir le joueur donné
        });
    });
});
