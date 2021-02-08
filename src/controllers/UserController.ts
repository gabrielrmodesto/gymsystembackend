import UserServices from '../services/UserServices';

export default {
  async index() {
    return UserServices.index;
  },
};
