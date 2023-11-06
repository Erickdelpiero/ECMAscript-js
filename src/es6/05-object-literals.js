// Enahced object literals

function Usuario(user, age, country, Id){
    return {
        user,
        age,
        country,
        id: Id
    }
}

console.log(Usuario('Pedro', 12, 'CO', 'xc'));