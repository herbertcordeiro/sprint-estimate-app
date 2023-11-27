import {Api} from '@providers/index';
import {IUser} from '@interfaces/IUser';

const createUser = async (user: IUser) => await Api.post(`v1/users`, user);

const updateUser = async (id: number, user: IUser) => await Api.put<IUser>(`/v1/users/${id}`, user);

const getAllUsers = async () => await Api.get<IUser[]>(`v1/users`);

export const UserService = {
  createUser,
  updateUser,
  getAllUsers,
};
