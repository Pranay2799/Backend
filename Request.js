const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/home'){
        res.write('<html>')
        res.write('<head><title>My code </title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        return res.end('')

    }
    if(url==='/about'){
        res.write('<html>')
        res.write('<head><title>My code </title></head>')
        res.write('<body><h1>Welcome To About us Page</h1></body>')
        res.write('</html>')
        return res.end('')

    }
    if(url==='/node'){
        res.write('<html>')
        res.write('<head><title>My code </title></head>')
        res.write('<body><h1>Welcome To my Node Js Project</h1></body>')
        res.write('</html>')
        return res.end('')

    }


    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My name </title></head>')
    res.write('<body><h1>Shreya</h1></body>')
    res.write('</html>')
    res.end('')
    
});
server.listen(4000);