import { APP_API } from '../../config/env/global';
import { IHeroCardList, IHeroDetails } from '../../config/type/hero';
import { IRecordList, IReponseRecord } from '../../config/type/response';
import axiosClient from './axiosClient';

const heroApi = {
  viewAllHero: () => {
    const url = `${APP_API}/token`;
    return axiosClient.get<IReponseRecord<IRecordList<IHeroCardList>>>(url);
  },
  viewHeroById: (nftTokenId: string) => {
    const url = `${APP_API}/token/${nftTokenId} `;
    return axiosClient.get<IHeroDetails>(url);
  },
};

export default heroApi;
