exports.create = (req, res) => {
    return res.send({message: 'create handler'})
}

exports.list = (req, res) => {
    return res.send({message: 'list handler'})
}

exports.read = (req, res) => {
    return res.send({message: 'read handler'})
}

exports.update = (req, res) => {
    return res.send({message: 'update handler'})
}

exports.delete = (req, res) => {
    return res.send({message: 'delete handler'})
}

exports.deleteAll = (req, res) => {
    return res.send({message: 'delete all handler'})
}

exports.findAllFavorite = (req, res) => {
    return res.send({message: 'find all favorite handler'})
}