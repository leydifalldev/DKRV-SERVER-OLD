export interface PagerRequestOptions {
    skip?: number;
    limit?: number;
    sort?: Array<any>,
}

export interface HttpPagerRequestOptions {
    currentPage?: number;
    nbItemsPerPage?: number;
    sort?: Array<any>,
}

export interface Page<T> {
    total: number,
    page: number,
    nbItemsPerPage: number,
    data: T[]
}