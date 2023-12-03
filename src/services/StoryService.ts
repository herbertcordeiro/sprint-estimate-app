import {Api} from '@providers/index';
import {IStory} from '@interfaces/IStory';

const createStory = async (story: IStory) => await Api.post(`v1/stories`, story);

const getOneStory = async (id: number) => await Api.get<IStory>(`v1/stories/${id}`);

const getAllByRoomId = async (id: number) => await Api.get<IStory>(`v1/stories/room/${id}`);

const deleteStory = async (id: number) => await Api.delete<IStory>(`v1/stories/${id}`);

export const StoryService = {
  createStory,
  getOneStory,
  getAllByRoomId,
  deleteStory,
};
