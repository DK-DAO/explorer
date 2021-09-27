import { AxiosResponse } from 'axios';

export interface IReponseRecord<T> extends AxiosResponse {
  success: boolean;
  result: T;
}

export interface IOrdering {
  column: string;
  order: 'asc' | 'desc';
}

export interface IPagination {
  offset: number;
  limit: number;
  order: IOrdering[];
}

export interface IRecordList<T> extends IPagination {
  total: number;
  records: T[];
}

export interface IReponseList<T> {
  success: boolean;
  result: IRecordList<T>;
}
