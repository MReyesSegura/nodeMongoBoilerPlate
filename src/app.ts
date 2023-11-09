/* aliases an environment variables */
import 'dotenv/config'

import express, { type Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import session from 'express-session'
import bodyParser from 'body-parser'
import http from 'http'
import { clientMiddleware } from './application/middlewares/client.middleware'

import userRoutes from './routes/user.routes'

/* app class */
export class AppServer {
  public app: Application

  private readonly server: http.Server

  constructor () {
    this.app = express()

    this.server = http.createServer(this.app)

    /* init methods */
    this.config()
    this.routes()
  }

  config (): void {
    this.app.set('port', process.env.PORT ?? 5050)
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(clientMiddleware)
    this.app.use(express.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(
      session({
        secret: '123456@@@', // Change this to a strong, unique secret
        resave: true,
        saveUninitialized: true
      })
    )

  }


  routes (): void {

    this.app.use('/assets', express.static(path.resolve(__dirname, '../public')))
 
    this.app.use('/api/user', userRoutes)

  }

  public start (): void {
    this.server.listen(this.app.get('port'), () => {
      console.log(`Server listening on \x1b[34mhttp://localhost:${this.app.get('port') as string}\x1b[0m`)
    })
  }
}
