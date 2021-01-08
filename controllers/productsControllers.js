module.exports = {
    getAll: function(req, res, next) {
        const productos = [
          {
            id:1,
            name:"Fiat 1"
          },
          {
            id:2,
            name:"Fiat 2"
          }
        ]
        res.json(productos);
    }
}