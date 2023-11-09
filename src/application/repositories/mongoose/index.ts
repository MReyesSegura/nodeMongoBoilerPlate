import mongoose from 'mongoose'
/* settings */
import { AppMongooseSettings } from './mongoose.settings'

mongoose.set('strictQuery', false)
mongoose.connect(
  AppMongooseSettings.uri
).catch((e) => {
  console.log(String(e))
})

/* client repo */
export const AppMongooseRepo = mongoose.connection

AppMongooseRepo.on('error', (e) => { console.log(String(e)) })
AppMongooseRepo.on('open', () => { console.log('db connection success!') })

/* exports */
export { Schema, model, Types, Model, SchemaTypes, Document } from 'mongoose'
