// teamGenerator.test.js
import { expect } from 'chai';
import TeamGenerator from '../src/teamGenerator.js';

describe('TeamGenerator', () => {
    // Testons la génération d'équipes
    describe('generateTeams()', () => {
        it('devrait générer le bon nombre d\'équipes', () => {
            const players = ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4', 'Joueur 5', 'Joueur 6'];
            const playersPerTeam = 3;
            const teamGenerator = new TeamGenerator(players, playersPerTeam);
            teamGenerator.generateTeams();
            const generatedTeams = teamGenerator.getTeams();
            expect(generatedTeams.length).to.equal(2); // Dans cet exemple, 2 équipes devraient être générées
        });

        it('devrait avoir le nombre correct de joueurs par équipe', () => {
            const players = ['Joueur 1', 'Joueur 2', 'Joueur 3', 'Joueur 4', 'Joueur 5', 'Joueur 6'];
            const playersPerTeam = 3;
            const teamGenerator = new TeamGenerator(players, playersPerTeam);
            teamGenerator.generateTeams();
            const generatedTeams = teamGenerator.getTeams();
            expect(generatedTeams.every(team => team.players.length === playersPerTeam)).to.be.true; // Toutes les équipes devraient avoir le bon nombre de joueurs
        });
    });
});
