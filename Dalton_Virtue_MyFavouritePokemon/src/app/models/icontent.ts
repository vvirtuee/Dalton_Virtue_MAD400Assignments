export interface IContent {
  id: number;
  id?: number;  //modified IContent to accept undefined id values
  title: string;
  description?: string;
  author: string;
  imgSrc?: string;
  type: string;
  tags?: string[];
}
