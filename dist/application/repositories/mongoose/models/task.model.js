"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = require("../../mongoose");
const task_schema_1 = require("./schemas/task.schema");
task_schema_1.TaskSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.updatedAt = new Date(Date.now());
        next();
    });
});
task_schema_1.TaskSchema.post('save', function (doc) {
    console.log(`[User][${String(doc._id)}] Datos de tarea creados/actualizados: ${JSON.stringify(doc.toJSON())}`);
});
exports.TaskModel = (0, mongoose_1.model)('task', task_schema_1.TaskSchema);
