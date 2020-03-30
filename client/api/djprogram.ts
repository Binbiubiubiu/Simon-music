// eslint-disable-next-line @typescript-eslint/no-unused-vars
import request from '@/utils/request';
import mockDjProgram from './mock/djprogram';

export interface DjProgramModel {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: null;
  program: {
    dj: {
      nickname: string;
    };
    radio: {
      name: string;
    };
  };
  alg: string;
}

export const queryDjProgram = async () => {
  type ReturnBodyType = {
    code: number;
    category: number;
    result: DjProgramModel[];
  };
  // const returnBody = (await request.get<{}, ReturnBodyType>('/personalized/djprogram')).result;
  // return returnBody;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (mockDjProgram as any).result;
};
