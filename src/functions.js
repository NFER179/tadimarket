import { getCategories } from "./firebase/db"

const menuItems = [
    'Monsters'
    , 'Spells'
    , 'Traps'
]

export async function getMenuItems() {
    // return menuItems
    return await getCategories()
}

export function formatPesosNumberWithDotsAndDecimals( number ) {
    if (isNaN(number)) {
        return '0,00';
    }

    const [integerPart, decimalPart] = number.toString().split('.');
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const formattedDecimal = (decimalPart ? decimalPart : '00').padEnd(2, '0');

    return `$ ${formattedInteger},${formattedDecimal}`;
};