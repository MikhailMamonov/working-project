import { ResponseStatus } from '../../types/response-status';

export interface DialogData {
  responseStatus: ResponseStatus;

  firstErrorDate: Date;

  retriesCount: number;
}
