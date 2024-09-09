const products = [
    {
        id: 1,
        nombreproducto: 'Laptop XPro',
        precio: 899.99,
        descripcion: 'Laptop de alto rendimiento con procesador Intel i7 y 16GB de RAM.',
        stock: 25,
        categoria: 'Electrónica',
        url_imagen: 'https://example.com/images/laptop_xpro.jpg'
    },
    {
        id: 2,
        nombreproducto: 'Auriculares Bluetooth',
        precio: 79.99,
        descripcion: 'Auriculares inalámbricos con cancelación de ruido y batería de larga duración.',
        stock: 50,
        categoria: 'Accesorios',
        url_imagen: 'https://example.com/images/auriculares_bluetooth.jpg'
    },
    {
        id: 3,
        nombreproducto: 'Smartphone Z10',
        precio: 699.99,
        descripcion: 'Smartphone con pantalla AMOLED de 6.5 pulgadas y 128GB de almacenamiento.',
        stock: 30,
        categoria: 'Electrónica',
        url_imagen: 'https://example.com/images/smartphone_z10.jpg'
    },
    {
        id: 4,
        nombreproducto: 'Teclado Mecánico RGB',
        precio: 129.99,
        descripcion: 'Teclado mecánico con retroiluminación RGB y teclas programables.',
        stock: 40,
        categoria: 'Accesorios',
        url_imagen: 'https://example.com/images/teclado_mecanico_rgb.jpg'
    },
    {
        id: 5,
        nombreproducto: 'Ratón Gaming Pro',
        precio: 59.99,
        descripcion: 'Ratón ergonómico para gaming con ajuste de DPI y retroiluminación LED.',
        stock: 60,
        categoria: 'Accesorios',
        url_imagen: 'https://example.com/images/raton_gaming_pro.jpg'
    },
    {
        id: 6,
        nombreproducto: 'Monitor UltraHD 27\'',
        precio: 349.99,
        descripcion: 'Monitor de 27 pulgadas con resolución UltraHD y tecnología IPS.',
        stock: 15,
        categoria: 'Electrónica',
        url_imagen: 'https://example.com/images/monitor_ultrahd_27.jpg'
    },
    {
        id: 7,
        nombreproducto: 'Cámara DSLR 24MP',
        precio: 799.99,
        descripcion: 'Cámara DSLR con sensor de 24 megapíxeles y lente intercambiable.',
        stock: 20,
        categoria: 'Fotografía',
        url_imagen: 'https://example.com/images/camara_dslr_24mp.jpg'
    },
    {
        id: 8,
        nombreproducto: 'Tableta 10\'',
        precio: 299.99,
        descripcion: 'Tableta con pantalla de 10 pulgadas, 64GB de almacenamiento y conectividad Wi-Fi.',
        stock: 35,
        categoria: 'Electrónica',
        url_imagen: 'https://example.com/images/tableta_10.jpg'
    },
    {
        id: 9,
        nombreproducto: 'Altavoces Bluetooth 2.1',
        precio: 99.99,
        descripcion: 'Sistema de altavoces Bluetooth 2.1 con sonido estéreo de alta calidad.',
        stock: 45,
        categoria: 'Audio',
        url_imagen: 'https://example.com/images/altavoces_bluetooth_2.1.jpg'
    },
    {
        id: 10,
        nombreproducto: 'Disco Duro Externo 1TB',
        precio: 119.99,
        descripcion: 'Disco duro externo de 1TB con conexión USB 3.0 para transferencia rápida de datos.',
        stock: 50,
        categoria: 'Almacenamiento',
        url_imagen: 'https://example.com/images/disco_duro_externo_1tb.jpg'
    }
]

/* TODO: Get all monster cards from this array. */
const YuGiOhMonsters = [
/*     'Effect Monster'
    , */ 'Flip Effect Monster'
    , 'Flip Tuner Effect Monster'
    , 'Gemini Monster'
    , 'Normal Monster'
/*     , 'Normal Tuner Monster'
    , 'Pendulum Effect Monster'
    , 'Pendulum Effect Ritual Monster'
    , 'Pendulum Flip Effect Monster'
    , 'Pendulum Normal Monster'
    , 'Pendulum Tuner Effect Monster'
    , 'Ritual Effect Monster'
    , 'Ritual Monster'
    , 'Spirit Monster'
    , 'Toon Monster'
    , 'Tuner Monster'
    , 'Union Effect Monster'
    , 'Fusion Monster'
    , 'Link Monster'
    , 'Pendulum Effect Fusion Monster'
    , 'Synchro Monster'
    , 'Synchro Pendulum Effect Monster'
    , 'Synchro Tuner Monster'
    , 'XYZ Monster'
    , 'XYZ Pendulum Effect Monster'
 */ ]

const YuGiOhSpells = [
    'Spell Card'
]

const YuGiOhTraps = [
    'Trap Card'
]

/* TODO: Add this cards catgories. */
/* 
"Skill Card"
"Token"
 */

// TODO: Function to future.
export const getProducts = () => {
    return new Promise( ( resolve ) => {
        setTimeout( () => {
            resolve( products )
        }, 500 );
    } )
}

const getCardsFrom = async ( endPoint ) => {
    
    let response = await fetch(endPoint)

    if( response.ok ) {
        let data = response.json()
        return data
    }
    else {
        return {}
    }
}

export const getYuGiOhAllCards = async () => {
    let endpoint = `https://db.ygoprodeck.com/api/v7/cardinfo.php`
    return getCardsFrom( endpoint )
}

export const getYuGiOhMonsterCards = async () => {
    let endpoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Flip Effect Monster'
    
    return getCardsFrom( endpoint )
}

export const getYuGiOhSpellsCards = async () => {
    let endpoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Spell Card'

    return getCardsFrom( endpoint )
}

export const getYuGiOhTrapCards = async () => {
    let endpoint = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Trap Card'

    return getCardsFrom( endpoint )
}

export const getYuGiOhCardById = async ( cardId ) => {
    let endpoint = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardId}`

    return getCardsFrom( endpoint )
}