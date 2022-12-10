import _ from 'underscore';
/**
 * 
 * @param {array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {array<String>} retorna un arreglo de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta es obligatorio');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);

    return deck;
}