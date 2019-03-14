import { PagerRequestOptions, HttpPagerRequestOptions, RepositoryResponse } from "../defs";

export const PagerFormatRequest = (request: HttpPagerRequestOptions): PagerRequestOptions => {
  const skip: number = (request.nbItemsPerPage * request.currentPage) - request.nbItemsPerPage;
  const sort: Array<any> = [["name", "asc"]];

  return {
    skip: skip || 0,
    limit: +request.nbItemsPerPage || 10,
    sort: sort || null
  }
}

export const RepositoryFormatResponse = (data: any[], options: PagerRequestOptions): RepositoryResponse => {
  return {
    total: options.limit,
    totalCollection: data[0],
    limit: options.limit || 20,
    sort: options.sort,
    skip: options.skip,
    data: data[1],
  }
}

export const Pager = (result: RepositoryResponse) => {
  const currentPage = (result.skip + result.total) / result.total;
  const totalPages = Math.ceil(result.limit / result.total);
  return {
    totalPages: totalPages,
    totalCollection: result.totalCollection,
    currentPage: currentPage,
    nbItemsPerPage: result.total,
    sort: result.sort,
    data: result.data,
  }
}