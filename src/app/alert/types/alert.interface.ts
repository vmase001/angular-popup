import { AlertTypeEnum } from './alert.enum';

export interface AlertInterface {
  type: AlertTypeEnum;
  text: string;
}
