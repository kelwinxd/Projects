import dotenv from 'dotenv';
import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import mainRoutes from  './server/routes/main.js' 

// Carregar as variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;  // Coloque o process.env.PORT antes do 5000 para garantir a precedência


app.use(express.static('public'))

// templating engine
app.use(expressEjsLayouts)
app.set('layout','./layouts/main')
app.set('view engine', 'ejs')


app.use('/',mainRoutes)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
