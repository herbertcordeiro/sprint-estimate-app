import {UserRole} from '@models/common.models';

export interface IUser {
  id?: number;
  name: string;
  role: UserRole;
}
