import express, { Router } from 'express'
import cors from 'cors'
import { engine } from 'express-handlebars'
import router from "./router/routes";
import session from 'express-session';
import flash from 'connect-flash';

const server = express()

server.use("/", express.static("public"))
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(session({secret:"Akmal",resave: false, saveUninitialized: false}))
server.use(flash())

server.engine('.hbs', engine({ extname: ".hbs" }))
server.set('view engine', '.hbs')
server.set('views/partials', 'views')
server.set('views', './pages')

server.use(router)

const PORT = process.env.PORT || 8091;
server.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));