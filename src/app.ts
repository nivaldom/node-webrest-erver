/*HTTP1*/ 
/*
import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {

    console.log(req.url);

    if( req.url === '/' ){

        const htmlFile = fs.readFileSync('./public/index.html','utf-8');
        res.writeHead(200, {'Content-Type' : 'text-html'});
        res.end(htmlFile);
        return;
    }
    
    if(req.url?.endsWith('.js')){
        res.writeHead(200, {'Content-Type' : 'application/javascript'});
    }
    else if(req.url?.endsWith('.css')){
        res.writeHead(200, {'Content-Type' : 'text/css'});
    }

    const responseContent = fs.readFileSync(`./public${ req.url }`,'utf-8');
    res.end(responseContent);
});

server.listen(4000, () => {
    console.log('Server running on port 4000')
});

*/

import { mainModule } from "process";

/*HTTP2*/ 

/*
import http2 from 'http2';
import fs from 'fs';

const server = http2.createSecureServer( {
    key:  fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.crt')
},(req, res) => {
    console.log(req.url);

    if( req.url === '/' ){

        const htmlFile = fs.readFileSync('./public/index.html','utf-8');
        res.writeHead(200, {'Content-Type' : 'text-html'});
        res.end(htmlFile);
        return;
    }
    
    if(req.url?.endsWith('.js')){
        res.writeHead(200, {'Content-Type' : 'application/javascript'});
    }
    else if(req.url?.endsWith('.css')){
        res.writeHead(200, {'Content-Type' : 'text/css'});
    }

    

    try {
        const responseContent = fs.readFileSync(`./public${ req.url }`,'utf-8');
        res.end(responseContent);
    } catch (error) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }

});

server.listen(4000, () => {
    console.log('Server running on port 4000')
});
*/

/* Con Express */
import { Server } from './presentation/server'
import { envs } from "./config/envs";
(() => {
    main();
})();

function main(){
    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    });

    server.start();
}