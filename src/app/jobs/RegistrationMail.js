import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      from: "Rodolfo Scarp <rodolfoscarp@gmail.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuário",
      html: `Ola ${user.name}, você esta recebendo este e-mail!`
    });
  }
};
