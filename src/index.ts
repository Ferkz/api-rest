import express from 'express';
import statusRouter from './routes/status.route';
import userRoute from './routes/user.route';
statusRouter
const app = express();
app.use(express.json());

app.use(userRoute);
app.use(statusRouter);
app.listen(3000,()=> {
    console.log("aplicação rodando na porta 3000");
});