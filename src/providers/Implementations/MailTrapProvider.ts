import { IMailProvider, IMessage } from './../IMailProvider';
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export class MailTrapMailProvider implements IMailProvider{

  private transporter: Mail

contructor(){
  this.transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "814a031d71332f",
      pass: "3f97e148197935"
    }
  })
}

  async sendMail(message: IMessage): Promise<void>{
    this.transporter.sendMail({
      to:{
        name: message.to.name,
        address: message.to.email
      },from:{
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}