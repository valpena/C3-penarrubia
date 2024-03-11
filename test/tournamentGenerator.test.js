// tournamentGenerator.test.js
import { expect } from 'chai';
import TournamentGenerator from '../src/tournamentGenerator.js';

describe('TournamentGenerator', () => {
    // Tests pour la détermination du gagnant du tournoi
    describe('getWinner()', () => {
        it('devrait retourner le nom de l\'équipe gagnante', () => {
            const teams = [
                { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
                { name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
                { name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
                { name: 'Équipe 4', players: ['Joueur 10', 'Joueur 11', 'Joueur 12'] }
            ];
            const tournamentGenerator = new TournamentGenerator(teams);
            tournamentGenerator.generateTournament();
            const winner = tournamentGenerator.getWinner();
            expect(winner).to.be.a('string').and.to.be.oneOf(['Équipe 1', 'Équipe 2', 'Équipe 3', 'Équipe 4']);
        });
    });

    // Tests pour la génération des prix pour les équipes gagnantes
    describe('generatePrizes()', () => {
        it('devrait générer des prix pour les équipes gagnantes', () => {
            const teams = [
                { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
                { name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
                { name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
                { name: 'Équipe 4', players: ['Joueur 10', 'Joueur 11', 'Joueur 12'] }
            ];
            const tournamentGenerator = new TournamentGenerator(teams);
            tournamentGenerator.generateTournament();
            const prizes = tournamentGenerator.generatePrizes();
            expect(prizes).to.be.an('array').with.lengthOf(4); // Il devrait y avoir un prix pour chaque équipe
        });
    });
});

