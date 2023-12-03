import {StoryStatus} from '@models/common.models';

export interface IStory {
  id?: number;
  estimate: string;
  description: string;
  status: StoryStatus;
  roomId?: number;
}
