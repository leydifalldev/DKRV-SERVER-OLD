"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagerFormatRequest = (request) => {
    const skip = (request.nbItemsPerPage * request.currentPage) - request.nbItemsPerPage;
    const sort = [["name", "asc"]];
    return {
        skip: skip || 0,
        limit: +request.nbItemsPerPage || 10,
        sort: sort || null
    };
};
exports.RepositoryFormatResponse = (data, options) => {
    return {
        total: options.limit,
        totalCollection: data[0],
        limit: options.limit || 20,
        sort: options.sort,
        skip: options.skip,
        data: data[1],
    };
};
exports.Pager = (result) => {
    const currentPage = (result.skip + result.total) / result.total;
    const totalPages = Math.ceil(result.limit / result.total);
    return {
        totalPages: totalPages,
        totalCollection: result.totalCollection,
        currentPage: currentPage,
        nbItemsPerPage: result.total,
        sort: result.sort,
        data: result.data,
    };
};
