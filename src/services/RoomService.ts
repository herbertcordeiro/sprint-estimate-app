import {Api} from '@providers/index';
import {IRoom} from '@interfaces/IRoom';

const createRoom = async (room: IRoom) => await Api.post(`v1/rooms`, room);

const getOneRoom = async (id: number) => await Api.get<IRoom>(`v1/rooms/${id}`);

const getOneByInviteId = async (id: string) => await Api.get<IRoom>(`v1/rooms/join/${id}`);

export const RoomService = {
  createRoom,
  getOneRoom,
  getOneByInviteId,
};
