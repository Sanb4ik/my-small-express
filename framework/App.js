const http = require('http');
const EventEmitter = require('events')

module.exports= class App{
    constructor(){
        this.emitter = new EventEmitter();
        this.server = this._createServer();
    }

    addRoute(router) {
        Object.keys(router.endpoints).forEach(path =>{
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach((method) =>{
                const handler = endpoint[method];
                this.emitter.on(this._getRouteMask(path, handler),(req, res) =>{
                    handler(req, res)
                })
            })
        })
    }
    _createServer(){
        return http.createServer((req,res)=>{
            const emitted = this.emitter.emit(this._getRouteMask(req.url,req.method),req,res)
            if(!emitted){
                res.end(req.url)
            }
        })
    }
    _getRouteMask(path, method){
        return `[${path}]:${method}`;
    }
    listen(port,callback){
        this.server.listen(port,callback)
    }
}