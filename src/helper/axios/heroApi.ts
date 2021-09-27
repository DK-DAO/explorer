import { APP_API } from '../../config/env/global';
import { IHeroCardList, IHeroDetails } from '../../config/type/hero';
import { IRecordList, IReponseRecord } from '../../config/type/response';
import axiosClient from './axiosClient';

const heroApi = {
  viewAllHero: (): Promise<IReponseRecord<IRecordList<IHeroCardList>>> => {
    const url = `${APP_API}/token`;
    return axiosClient.get(url);
  },
  viewHeroById: (nftTokenId: string): Promise<IReponseRecord<IHeroDetails>> => {
    const url = `${APP_API}/token/${nftTokenId} `;
    return axiosClient.get(url);
  },
};

export default heroApi;
