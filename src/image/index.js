import concept from './boulanger.jpeg'


const getImage = (title) =>{
    switch(title){
        case "concept":
            return concept;
        default:
            break;
    }
}

export default getImage