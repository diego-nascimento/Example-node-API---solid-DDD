import { MailTrapMailProvider } from "../../providers/Implementations/MailTrapProvider";
import { PostgressUserRepository } from "../../repositories/Implementations/PostgressUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailTrapMailProvider()
const postgressUserRepository = new PostgressUserRepository()

const createUserUseCase = new CreateUserUseCase(postgressUserRepository, mailtrapProvider)

const createUserCOntroller = new CreateUserController(createUserUseCase)

export {createUserCOntroller, createUserUseCase}