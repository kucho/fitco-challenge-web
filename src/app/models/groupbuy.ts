import { Timestamp } from 'rxjs';

export interface Groupbuy {
  id?: string;
  name: string;
  album: string;
  description: string;
  price: number;
  createdAt: Date;
  releaseDate?: Date;
}
