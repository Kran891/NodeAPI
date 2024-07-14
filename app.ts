import express from 'express'
import SwaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'
import { json } from 'body-parser'
import path from 'path'
import OpenAPI from './api/middlewares/open-api-middleware'
import jsonErrorMiddleware from './api/middlewares/json-error-middleware'
const DOCS=YAML.load(path.join(__dirname,"./api/oas.yaml"))
const app=express()
app.use(json())
app.use("/docs",SwaggerUI.serve,SwaggerUI.setup(DOCS))
app.use(OpenAPI())
app.use(jsonErrorMiddleware)
export {app}