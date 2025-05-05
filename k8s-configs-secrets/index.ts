import express from 'express';

const app = express()
console.log(process.env.PORT,'port')
console.log(process.env.DATABASE_URL,'database')
app.get('/',(req,res)=>{
    res.json({
        db: process.env.DATABASE_URL,
        port: process.env.PORT
    })
})
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
});