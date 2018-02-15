const express = require('express'),
    fileUpload = require('express-fileupload'),
    app = express(),
    path = require('path');



app.use(fileUpload());

app.post('/upload',(req,res)=>{
    if(req.files.img===undefined)
        return res.status(400).send('No file found');
    let file=req.files.img;
    let uploadpath = path.join(__dirname+"./../upload/"+file.name);
    file.mv(uploadpath, (err)=>{
        if(err)
            return res.status(400).send(err).end();


        res.status(200).send("Success")

    })
})

app.listen(3000,()=>{
    console.log('Port Started');
})