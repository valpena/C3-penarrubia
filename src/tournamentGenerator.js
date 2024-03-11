// tournamentgenerator.js
class TournamentGenerator {
    constructor(teams) {
        this.teams = teams;
        this.poules = [];
        this.finalStages = [];
    }

    generatePoules() {
        let shuffledTeams = [...this.teams].sort(() => 0.5 - Math.random());
        const nbPoules = Math.floor(shuffledTeams.length / 4);
        for (let i = 0; i < nbPoules; i++) {
            this.poules.push(shuffledTeams.splice(0, 4));
        }
        console.log("Poules générées :", this.poules);
    }

    simulatePoulesMatches() {
        let qualifiedTeams = [];
        this.poules.forEach(poule => {
            qualifiedTeams.push(...poule.slice(0, 2));
        });
        this.finalStages.push(qualifiedTeams);
        console.log("Équipes qualifiées pour les phases finales :", this.finalStages[0]);
    }

    generateFinalStages() {
        let currentStage = this.finalStages[0];
        while (currentStage.length > 1) {
            let nextStage = [];
            for (let i = 0; i < currentStage.length; i += 2) {
                let winner = currentStage[i + (Math.random() > 0.5 ? 0 : 1)];
                nextStage.push(winner);
            }
            this.finalStages.push(nextStage);
            currentStage = nextStage;
        }
        console.log("Phases finales :", this.finalStages);
    }

    generateTournament() {
        this.generatePoules();
        this.simulatePoulesMatches();
        this.generateFinalStages();
        return this.finalStages;
    }

    // Nouvelle méthode pour déterminer le gagnant du tournoi
    getWinner() {
        const finalStage = this.finalStages[this.finalStages.length - 1];
        return finalStage[0].name;
    }

    // Nouvelle méthode pour générer des prix pour les équipes gagnantes
    generatePrizes() {
        const winner = this.getWinner();
        const prizes = [];
        this.teams.forEach(team => {
            if (team.name === winner) {
                prizes.push({ team: team.name, prize: 'Médaille d\'or' });
            } else {
                prizes.push({ team: team.name, prize: 'Médaille de participation' });
            }
        });
        return prizes;
    }
}

export default TournamentGenerator;

