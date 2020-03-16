export default {
  key: "UserReport",
  options: {
    delay: 3000
  },
  async handle({ data }) {
    const { user } = data;
    console.log(user);
  }
};
