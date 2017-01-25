import shuffleArray from './shuffleArray'

export default function(max, min, count){
    var poolArray = [];
    
    if(count > (max - min)){
        return []
    }

    for (var index = min; index <= max; index++) {
        poolArray.push(index)
    }
    
    return shuffleArray(poolArray).slice(0, count).sort(function(a,b){return a - b}) 
}