// Quiz questions and logic
const QUIZ_QUESTIONS = [
    {
        id: 'adventure',
        title: 'Pick your vibe',
        options: [
            { text: 'Beach & Chill', scores: { goa: 2, andaman: 3, kerala: 2 } },
            { text: 'Mountains & Monasteries', scores: { ladakh: 3, coorg: 1, rishikesh: 2 } },
            { text: 'Desert & Forts', scores: { jaisalmer: 3, jaipur: 2, kutch: 2 } },
            { text: 'Temples & Traditions', scores: { varanasi: 3, agra: 1, hampi: 2 } },
        ]
    },
    {
        id: 'pace',
        title: 'What pace suits you?',
        options: [
            { text: 'Slow & Serene', scores: { kerala: 2, coorg: 2, varanasi: 2 } },
            { text: 'Balanced', scores: { jaipur: 1, goa: 1, agra: 1 } },
            { text: 'High-Energy', scores: { ladakh: 2, goa: 2, rishikesh: 2 } },
        ]
    },
    {
        id: 'season',
        title: 'When do you want to travel?',
        options: [
            { text: 'Winter (Nov–Feb)', scores: { jaipur: 1, goa: 2, jaisalmer: 2, kutch: 2, varanasi: 1 } },
            { text: 'Summer (Mar–Jun)', scores: { ladakh: 3, coorg: 2, andaman: 2 } },
            { text: 'Monsoon (Jul–Oct)', scores: { kerala: 2, coorg: 2, goa: 1 } },
        ]
    },
    {
        id: 'special',
        title: 'What "wow" is must-have?',
        options: [
            { text: 'Stargazing / Night Sky', scores: { kutch: 3, ladakh: 2 } },
            { text: 'World Wonder / Icon', scores: { agra: 3 } },
            { text: 'Coral & Snorkeling', scores: { andaman: 3 } },
            { text: 'Yoga / River Aarti', scores: { rishikesh: 2, varanasi: 2 } },
        ]
    }
];

class QuizManager {
    constructor() {
        this.currentQuestion = 0;
        this.answers = new Map();
        this.result = null;
    }

    reset() {
        this.currentQuestion = 0;
        this.answers = new Map();
        this.result = null;
    }

    selectAnswer(questionId, optionIndex) {
        this.answers.set(questionId, optionIndex);
    }

    hasAnswer(questionId) {
        return this.answers.has(questionId);
    }

    getAnswer(questionId) {
        return this.answers.get(questionId);
    }

    canGoNext() {
        const currentQ = QUIZ_QUESTIONS[this.currentQuestion];
        return this.hasAnswer(currentQ.id);
    }

    goNext() {
        if (this.currentQuestion < QUIZ_QUESTIONS.length - 1) {
            this.currentQuestion++;
            return false; // Not finished
        }
        return true; // Finished
    }

    goPrev() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
        }
    }

    calculateResult() {
        const scores = {};

        // Calculate scores for each destination
        for (const [questionId, optionIndex] of this.answers.entries()) {
            const question = QUIZ_QUESTIONS.find(q => q.id === questionId);
            if (question) {
                const option = question.options[optionIndex];
                Object.entries(option.scores).forEach(([destId, score]) => {
                    scores[destId] = (scores[destId] || 0) + score;
                });
            }
        }

        // Find the destination with highest score
        const sortedScores = Object.entries(scores).sort(([,a], [,b]) => b - a);
        const [bestDestId] = sortedScores[0];
        this.result = DESTINATIONS.find(d => d.id === bestDestId) || DESTINATIONS[0];
        
        return this.result;
    }

    getProgress() {
        return (this.currentQuestion / QUIZ_QUESTIONS.length) * 100;
    }

    getCurrentQuestion() {
        return QUIZ_QUESTIONS[this.currentQuestion];
    }
}