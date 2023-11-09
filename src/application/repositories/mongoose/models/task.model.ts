import { model } from '../../mongoose'
import { type ITask, type TTaskModel } from './schemas/dtos/tasks.dto'
import { TaskSchema } from './schemas/task.schema'

TaskSchema.pre('save', async function (next) {
  this.updatedAt = new Date(Date.now())
  next()
})

TaskSchema.post('save', function (doc) {
  console.log(`[User][${String(doc._id)}] Datos de tarea creados/actualizados: ${JSON.stringify(doc.toJSON())}`)
})

export const TaskModel = model<ITask, TTaskModel>('task', TaskSchema)
