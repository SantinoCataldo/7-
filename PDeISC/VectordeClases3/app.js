class CZooAnimal {
    constructor(id, name, cageNumber, idTypeAnimal, weight) {
        this.IdAnimal = id;
        this.name = name;
        this.cageNumber = cageNumber;
        this.IdTypeAnimal = idTypeAnimal;
        this.weight = weight;
    }
}

const zooAnimals = [
    new CZooAnimal("79", "Tigre", 5, 1, 150),
    new CZooAnimal("530", "León", 2, 1, 180),
    new CZooAnimal("88", "Águila", 3, 2, 2),
    new CZooAnimal("202", "Serpiente", 4, 3, 80),
    new CZooAnimal("707", "Pantera", 5, 1, 100)
];

function countAnimalsInCage5Under3kg() {
    return zooAnimals.filter(animal => animal.cageNumber === 5 && animal.weight < 3).length;
}

function countFelineAnimalsBetweenCages2And5() {
    return zooAnimals.filter(animal => 
        animal.IdTypeAnimal === 1 && 
        animal.cageNumber >= 2 && 
        animal.cageNumber <= 5
    ).length;
}

function listAnimalNameInCage4Under120() {
    const animal = zooAnimals.find(animal => 
        animal.cageNumber === 4 && animal.weight < 120
    );
    return animal ? animal.name : "No se encontró ningún animal que cumpla los criterios";
}

function displayResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Cantidad de animales en la jaula 5 con peso menor a 3 kg: ${countAnimalsInCage5Under3kg()}</p>
        <p>Cantidad de animales tipo felino entre las jaulas 2 y 5: ${countFelineAnimalsBetweenCages2And5()}</p>
        <p>Nombre del animal en la jaula 4 con peso menor a 120: ${listAnimalNameInCage4Under120()}</p>
    `;
}

function displayAnimalTable() {
    const tableBody = document.querySelector('#animalTable tbody');
    zooAnimals.forEach(animal => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${animal.IdAnimal}</td>
            <td>${animal.name}</td>
            <td>${animal.cageNumber}</td>
            <td>${animal.IdTypeAnimal}</td>
            <td>${animal.weight}</td>
        `;
    });
}

window.onload = function() {
    displayResults();
    displayAnimalTable();
};