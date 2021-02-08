import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { IGmailAPIProvider, IMessage } from '../IGmailAPIProvider';

export class GmailApiProvider implements IGmailAPIProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({});
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
