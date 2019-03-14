export interface RepositoryResponse {
  totalCollection: number,
  total: number;
  limit: number,
  sort: Array<any>;
  skip: number;
  data: any[];
}