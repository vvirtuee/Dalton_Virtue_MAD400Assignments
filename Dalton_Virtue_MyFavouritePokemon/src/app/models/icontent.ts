export interface IContent {
  id: number;
  id?: number;  //modified IContent to accept undefined id values
  title: string;
  description?: string;
  author?: string;  //decided to make this optional since Game Freak is consistent with them all.
  imgSrc?: string;
  type: string;
  tags?: string[];
}
