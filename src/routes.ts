import { createUserCOntroller } from './useCases/CreateUser';
import { Router } from "express";

const router = Router()

router.post('/users', (request, response)=>{
  return createUserCOntroller.handle(request, response)
})

export {router}
