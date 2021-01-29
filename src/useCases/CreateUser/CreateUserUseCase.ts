import { ICreateUserRequestDTO } from './createUserDTO';
import { IUserRepository } from './../../repositories/IUserRepository';
import {User} from '../../entities/User'
import {IMailProvider} from '../../providers/IMailProvider'

export class  CreateUserUseCase {
  private userRepository: IUserRepository
  private mailProvider: IMailProvider

  constructor(userRepository: IUserRepository, mailProvider: IMailProvider){
    this.userRepository = userRepository
    this.mailProvider = mailProvider
  }

  async execute(data: ICreateUserRequestDTO){
    const UserAlreadyExists = await this.userRepository.findByEmail(data.email)

    if(UserAlreadyExists){
      throw new Error('User already exists')
    }
    const user = new User(data)
    await this.userRepository.save(user)
    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: "Equipe do meu APP",
        email: "team@team.com"
      },
      subject: "Seja bem vindo a plataforma",
      body: "<p>Voce ja pode usar saporra</p>"
    })
  }
}