import { middleware } from "express-openapi-validator";
import path from "path";
const OpenAPI=()=>{
    return middleware({
        apiSpec:path.join(__dirname,'../oas.yaml'),
        operationHandlers:path.join(__dirname,"../controllers"),
        validateRequests:true,
        validateResponses:{
            onError: (err, _body, req) => {
              console.log(err);      
            },
        }
    })
}
export default OpenAPI;