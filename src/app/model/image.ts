import {Cat} from './cat';

export interface Image{
  id: number;
  data: Blob;
  cat: Cat;
}
