/* ========================================
   COLLOSCOPE 1BCPST1 - SCRIPT JAVASCRIPT
   Fichier: script.js
   ======================================== */

// Liste des 30 semaines de colles
const weeks = [
    { date: '15/9', type: 'info' },
    { date: '22/9', type: 'info' },
    { date: '29/9', type: 'anglais' },
    { date: '6/10' },
    { date: '13/10' },
    { date: '3/11' },
    { date: '10/11' },
    { date: '17/11' },
    { date: '24/11' },
    { date: '1/12' },
    { date: '8/12' },
    { date: '15/12' },
    { date: '5/1' },
    { date: '12/1' },
    { date: '19/1' },
    { date: '26/1' },
    { date: '2/2' },
    { date: '9/2' },
    { date: '16/2' },
    { date: '9/3' },
    { date: '16/3' },
    { date: '23/3' },
    { date: '30/3' },
    { date: '6/4' },
    { date: '13/4' },
    { date: '18/5' },
    { date: '25/5' },
    { date: '1/6' },
    { date: '8/6' },
    { date: '15/6' }
];

// Données complètes de toutes les colles avec leurs séquences de rotation
// Chaque séquence contient 15 groupes (pas de groupe 11) et se répète automatiquement
const colles = {
    'Sc. Physiques 1': {
        prof: 'M Launay',
        jour: 'Mercredi',
        horaire: '13h-14h',
        salle: 'R217',
        sequence: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    'Mathématiques 1': {
        prof: 'M Kameche',
        jour: 'Jeudi',
        horaire: '18h-19h',
        salle: 'R302',
        sequence: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    },
    'SVT 1': {
        prof: 'M Becan / M Morales',
        jour: 'Jeudi',
        horaire: '17h-18h30',
        salle: 'R304',
        sequence: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1]
    },
    'Sc. Physiques 2': {
        prof: 'M Bacrie / Narwa',
        jour: 'Jeudi',
        horaire: '18h-19h',
        salle: 'R028',
        sequence: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2]
    },
    'Mathématiques 2': {
        prof: 'M Plouviez',
        jour: 'Lundi',
        horaire: '17h-18h',
        salle: 'C397',
        sequence: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2]
    },
    'SVT 2': {
        prof: 'M Huet',
        jour: 'Lundi',
        horaire: '16h30-18h',
        salle: 'R215',
        sequence: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3]
    },
    'Anglais 2': {
        prof: 'M Meli',
        jour: 'Jeudi',
        horaire: '18h-19h',
        salle: 'C180',
        sequence: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3]
    },
    'Sc. Physiques 3': {
        prof: 'M Réocreux',
        jour: 'Mardi',
        horaire: '18h-19h',
        salle: 'R030',
        sequence: [ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4]
    },
    'Mathématiques 3': {
        prof: 'M Kameche',
        jour: 'Jeudi',
        horaire: '17h-18h',
        salle: 'R302',
        sequence: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4]
    },
    'SVT 3': {
        prof: 'M Vartanian',
        jour: 'Jeudi',
        horaire: '17h10-18h40',
        salle: 'R215',
        sequence: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5]
    },
    'Sc. Physiques 4': {
        prof: 'M Chapuis',
        jour: 'Mardi',
        horaire: '18h-19h',
        salle: 'R304',
        sequence: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6]
    },
    'Mathématiques 4': {
        prof: 'M Levadou',
        jour: 'Jeudi',
        horaire: '17h30-18h30',
        salle: 'R316',
        sequence: [ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6]
    },
    'SVT 4': {
        prof: 'M Huet',
        jour: 'Jeudi',
        horaire: '16h30-18h',
        salle: 'R217',
        sequence: [8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7]
    },
    'Anglais 4': {
        prof: 'M Delaby',
        jour: 'Mardi',
        horaire: '16h-17h',
        salle: 'C181',
        sequence: [8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7]
    },
    'Sc. Physiques 5': {
        prof: 'Mme Lepage',
        jour: 'Lundi',
        horaire: '16h30-17h30',
        salle: 'R217',
        sequence: [9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    'Mathématiques 5': {
        prof: 'M Decouvelaere',
        jour: 'Jeudi',
        horaire: '16h30-17h30',
        salle: 'R310',
        sequence: [9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    'SVT 5': {
        prof: 'Mme Algrain-Pitavy',
        jour: 'Jeudi',
        horaire: '17h30-19h',
        salle: 'R207',
        sequence: [10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    'Sc. Physiques 6': {
        prof: 'M Bacrie / Narwa',
        jour: 'Jeudi',
        horaire: '17h-18h',
        salle: 'R028',
        sequence: [11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    'Mathématiques 6': {
        prof: 'M Kameche',
        jour: 'Mardi',
        horaire: '18h-19h',
        salle: 'R302',
        sequence: [11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    'SVT 6': {
        prof: 'M Huet',
        jour: 'Vendredi',
        horaire: '16h30-18h',
        salle: 'R215',
        sequence: [12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    'Anglais 6': {
        prof: 'M Meli',
        jour: 'Lundi',
        horaire: '18h-19h',
        salle: 'C281',
        sequence: [12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    },
    'Sc. Physiques 7': {
        prof: 'M Champagne',
        jour: 'Jeudi',
        horaire: '17h-18h',
        salle: 'R011',
        sequence: [13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    'Mathématiques 7': {
        prof: 'Mme Guenard-Hug',
        jour: 'Mercredi',
        horaire: '18h-19h',
        salle: 'R312',
        sequence: [13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    'SVT 7': {
        prof: 'M Guitton',
        jour: 'Jeudi',
        horaire: '16h30-18h',
        salle: 'R205',
        sequence: [14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },
    'Sc. Physiques 8': {
        prof: 'M. Di Costanzo',
        jour: 'Vendredi',
        horaire: '16h-17h',
        salle: 'R103',
        sequence: [15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    },
    'Mathématiques 8': {
        prof: 'M Levadou',
        jour: 'Jeudi',
        horaire: '16h30-17h30',
        salle: 'R316',
        sequence: [15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    },
    'SVT 8': {
        prof: 'Mme Galardon / M Boutonnet',
        jour: 'Jeudi',
        horaire: '16h30-18h',
        salle: 'R209',
        sequence: [16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    'Anglais 8': {
        prof: 'M Meli',
        jour: 'Lundi',
        horaire: '17h-18h',
        salle: 'C281',
        sequence: [16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
};

// Remplir automatiquement le menu déroulant des semaines
const weekSelect = document.getElementById('weekSelect');
weeks.forEach((week, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `Semaine du ${week.date}`;
    weekSelect.appendChild(option);
});

// Fonction principale pour afficher les colles correspondantes
function displayResults() {
    const group = document.getElementById('groupSelect').value;
    const weekIndex = parseInt(document.getElementById('weekSelect').value);
    const resultsDiv = document.getElementById('results');

    // Vérifier si un groupe et une semaine ont été sélectionnés
    if (!group || isNaN(weekIndex)) {
        resultsDiv.innerHTML = '<div class="no-results">Sélectionnez un groupe et une semaine pour voir vos colles</div>';
        return;
    }

    const groupNum = parseInt(group);
    const foundColles = [];

    // Chercher toutes les colles pour ce groupe à cette semaine
    // La séquence se répète automatiquement grâce à l'opérateur modulo
    for (const [name, colle] of Object.entries(colles)) {
        const sequenceIndex = weekIndex % colle.sequence.length;
        if (colle.sequence[sequenceIndex] === groupNum) {
            foundColles.push({ name, ...colle });
        }
    }

    // Si aucune colle n'est trouvée
    if (foundColles.length === 0) {
        resultsDiv.innerHTML = '<div class="no-results">Aucune colle trouvée pour cette semaine</div>';
        return;
    }

    // Afficher toutes les colles trouvées
    resultsDiv.innerHTML = foundColles.map(colle => `
        <div class="colle-card">
            <div class="colle-title">${colle.name}</div>
            <div class="colle-info">
                <div class="info-row">
                    <span class="info-label">👨‍🏫 Professeur:</span>
                    <span>${colle.prof}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">📅 Jour:</span>
                    <span>${colle.jour}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">🕐 Horaire:</span>
                    <span>${colle.horaire}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">📍 Salle:</span>
                    <span>${colle.salle}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Attacher les événements de changement aux menus déroulants
document.getElementById('groupSelect').addEventListener('change', displayResults);
document.getElementById('weekSelect').addEventListener('change', displayResults);

