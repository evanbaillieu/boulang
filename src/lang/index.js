import fr from './fr.js'

export const getLang = (lang) =>{
    switch(lang){
        case 'FR-FR':
            return fr;
        default:
            return fr;
    }
}

export const getBoisson = (produits) =>{
    return produits.boisson
}

export const getLivre = (produits) =>{
    return produits.boisson
}
