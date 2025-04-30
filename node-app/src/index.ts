import express from 'express';
import { prisma } from './lib/db';
const app = express()
app.use(express.json())
app.get('/healthcheck',(req,res)=>{
    res.send("Server Running fine")
})
async function connectToDatabase() {
    try {
      await prisma.$connect();
      console.log('PostgreSQL connected via Prisma');
      app.listen(9000,()=>{
          console.log("Running Http on http://localhost:9000")
      })
    } catch (error) {
      console.error('❌ Error connecting to PostgreSQL:', error);
      process.exit(1); 
    }
}
connectToDatabase()
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
});