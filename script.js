const desayuno = {
    principal: [
        { name: 'croissant', price: 3 },
        { name: 'ensaimada', price: 2.5 },
        { name: 'pancake', price: 2 },
    ],
    extra: [
        { name: 'mermelada', price: 1.5 },
        { name: 'mantequilla', price: 1 },
        { name: 'miel', price: 2 },
    ],
    bebida: [
        { name: 'batido', price: 3 },
        { name: 'agua', price: 1 },
        { name: 'zumo', price: 2.5 },
    ]
};

const comida = {
    principal: [
        { name: 'macarrones', price: 6 },
        { name: 'sopa', price: 5 },
        { name: 'alubias', price: 5.5 },
    ],
    extra: [
        { name: 'bacalao', price: 7.5 },
        { name: 'entrecot', price: 9.5 },
        { name: 'anchoas', price: 6.5 },
    ],
    bebida: [
        { name: 'vino', price: 3.5 },
        { name: 'agua', price: 1 },
        { name: 'cerveza', price: 2.5 },
    ]
};

const cena = {
    principal: [
        { name: 'macarrones', price: 5.5 },
        { name: 'sopa', price: 4 },
        { name: 'alubias', price: 5 },
    ],
    extra: [
        { name: 'bacalao', price: 6.5 },
        { name: 'entrecot', price: 9 },
        { name: 'anchoas', price: 6 },
    ],
    bebida: [
        { name: 'vino', price: 3 },
        { name: 'agua', price: 1.5 },
        { name: 'cerveza', price: 2 },
    ]
};

const comentarios = [
    "Gran elección!",
    "Un clásico!",
    "Tiene usted un gusto excelente!",
    "La opción más popular!",
    "Curiosa elección!"
];

const getRandomComment = () => comentarios[Math.floor(Math.random() * comentarios.length)];

const menus = { desayuno, comida, cena };

let reserva = 0;

function showMenuOptions(menuType) {
    let options = menus[menuType]; 
    let principalOptions = options.principal.map((item, index) => `${index + 1}. ${item.name} - ${item.price}€`).join('\n');
    let extraOptions = options.extra.map((item, index) => `${index + 1}. ${item.name} - ${item.price}€`).join('\n');
    let bebidaOptions = options.bebida.map((item, index) => `${index + 1}. ${item.name} - ${item.price}€`).join('\n');
    
    let principalChoice = -1;
    let extraChoice = -1;
    let bebidaChoice = -1;

    while (principalChoice == -1) {
        principalChoice = parseInt(prompt(`Elija su plato principal (1, 2 o 3):\n${principalOptions}`), 10) - 1;
        if (principalChoice == 0 || principalChoice == 1 || principalChoice == 2) {
            alert(`${getRandomComment()}`);
            principal = options.principal[principalChoice];
        } else {
            alert("No disponemos del plato introducido.\nPor favor, inténtelo de nuevo.");
            principalChoice = -1;
        }
    }

    while (extraChoice == -1) {
        extraChoice = parseInt(prompt(`Elija su extra (1, 2 o 3):\n${extraOptions}`), 10) - 1;
        if (extraChoice == 0 || extraChoice == 1 || extraChoice == 2) {
            alert(`${getRandomComment()}`);
            extra = options.extra[extraChoice];
        } else {
            alert("No disponemos del plato introducido.\nPor favor, inténtelo de nuevo.");
            extraChoice = -1;
        }
    }

    while (bebidaChoice == -1) {
        bebidaChoice = parseInt(prompt(`Elija su bebida (1, 2 o 3):\n${bebidaOptions}`), 10) - 1;
        if (bebidaChoice == 0 || bebidaChoice == 1 || bebidaChoice == 2) {
            alert(`${getRandomComment()}`);
            bebida = options.bebida[bebidaChoice];
        } else {
            alert("No disponemos del plato introducido.\nPor favor, inténtelo de nuevo.");
            bebidaChoice = -1;
        }
    }
    
    let totalPrice = principal.price + extra.price + bebida.price;
    
    alert(`Su selección:
    Principal: ${principal.name} - ${principal.price}€
    Extra: ${extra.name} - ${extra.price}€
    Bebida: ${bebida.name} - ${bebida.price}€
    __________________________________________
    Precio total: ${totalPrice}€`);

    alert(`¡Gracias por confiar en nosotros!\n¡QUE APROVECHE!`)
}

alert("¡BIENVENIDO!\nDisponemos de menús de desayuno, comida y cena a su gusto.")

while (reserva == null || /\D/.test(reserva) || reserva < 6 || (reserva > 10 && reserva < 13) || (reserva > 20 && reserva < 23) || reserva > 24) {
    reserva = prompt("Le informamos que la reserva debe ser a en punto.\nDesayunos de 6 a 10.\nComidas de 13 a 16.\nCenas de 20 a 23.\nIntroduzca la hora deseada para la reserva:");
    if (reserva >= 6 && reserva <= 10) {
        menuType = "desayuno";
        alert("!Con nuestro desayuno tendrá energía para todo el día!");
        showMenuOptions(menuType);
    } else if (reserva >= 13 && reserva <= 16) {
        menuType = "comida";
        alert("!No hay nada como una buena comida para seguir el día a tope!");
        showMenuOptions(menuType);
    } else if (reserva >= 20 && reserva <= 23) {
        menuType = "cena";
        alert("Tras un día agotador, recupere energías con nosotros para dormir mejor.");
        showMenuOptions(menuType);
    } else {
        alert("La hora introducida no es correcta. \nPor favor, vuelva a intentarlo.");
    }
}