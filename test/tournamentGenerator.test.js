// tournamentGenerator.test.js
import { expect } from 'chai';
import TournamentGenerator from '../src/tournamentGenerator.js';

describe('TournamentGenerator', () => {
    describe('generatePoules()', () => {
        it('devrait générer les poules avec le nombre approprié d\'équipes', () => {
            const teams = [
                { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
                { name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
                { name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
                { name: 'Équipe 4', players: ['Joueur 10', 'Joueur 11', 'Joueur 12'] }
            ];
            const tournamentGenerator = new TournamentGenerator(teams);
            tournamentGenerator.generatePoules();
            expect(tournamentGenerator.poules.length).to.equal(1); // Une seule poule générée dans cet exemple
        });

        it('devrait générer les poules avec le bon format', () => {
            const teams = [
                { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
                { name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
                { name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
                { name: 'Équipe 4', players: ['Joueur 10', 'Joueur 11', 'Joueur 12'] }
            ];
            const tournamentGenerator = new TournamentGenerator(teams);
            tournamentGenerator.generatePoules();
            expect(tournamentGenerator.poules.every(poule => poule.length === 4)).to.be.true; // Chaque poule devrait contenir 4 équipes
        });
    });

    describe('simulatePoulesMatches()', () => {
        it('devrait qualifier les équipes pour les phases finales', () => {
            const teams = [
                { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
                { name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
                { name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
                { name: 'Équipe 4', players: ['Joueur 10', 'Joueur 11', 'Joueur 12'] }
            ];
            const tournamentGenerator = new TournamentGenerator(teams);
            tournamentGenerator.generatePoules();
            tournamentGenerator.simulatePoulesMatches();
            expect(tournamentGenerator.finalStages.length).to.equal(1); // Une seule phase finale générée dans cet exemple
        });
    });

    describe('generateFinalStages()', () => {
        it('devrait générer les phases finales avec le bon format', () => {
            const teams = [
                { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
                { name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
                { name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
                { name: 'Équipe 4', players: ['Joueur 10', 'Joueur 11', 'Joueur 12'] }
            ];
            const tournamentGenerator = new TournamentGenerator(teams);
            tournamentGenerator.generatePoules();
            tournamentGenerator.simulatePoulesMatches();
            tournamentGenerator.generateFinalStages();
            expect(tournamentGenerator.finalStages.length).to.be.above(0); // Au moins une phase finale générée
        });
    });

    describe('generateTournament()', () => {
        it('devrait générer un tournoi complet', () => {
            const teams = [
                { name: 'Équipe 1', players: ['Joueur 1', 'Joueur 2', 'Joueur 3'] },
                { name: 'Équipe 2', players: ['Joueur 4', 'Joueur 5', 'Joueur 6'] },
                { name: 'Équipe 3', players: ['Joueur 7', 'Joueur 8', 'Joueur 9'] },
                { name: 'Équipe 4', players: ['Joueur 10', 'Joueur 11', 'Joueur 12'] }
            ];
            const tournamentGenerator = new TournamentGenerator(teams);
            const tournament = tournamentGenerator.generateTournament();
            expect(tournament).to.be.an('array').with.length.above(0); // Le tournoi généré doit contenir au moins une phase finale
        });
    });
});
