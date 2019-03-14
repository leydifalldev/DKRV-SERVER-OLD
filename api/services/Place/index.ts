import Joi from "joi";
import { getDatabase } from "../../db/access";
import { PlaceRepository } from "../../repositories";
import { Place, HttpPagerRequestOptions, ServiceResponse } from "../../defs";
import { placeSchema } from "./validator";
import { PagerFormatRequest } from "../../utils";

class PlaceService {
  async getRepository() {
    let databaseContext = await getDatabase();
    let repository = new PlaceRepository(databaseContext);
    return repository;
  }

  async add(place: Place): Promise<ServiceResponse> {
    let resultValidation = Joi.validate(place, placeSchema);
    let response: ServiceResponse;

    if (resultValidation.error) {
      response = {
        httpStatus: 400,
        error: resultValidation.error.details[0],
        results: null,
      }
      return response
    }

    let repository = await this.getRepository();
    let results = await repository.create(resultValidation.value);
    response = {
      httpStatus: 200,
      error: null,
      results: resultValidation.value
    }

    return response;
  }

  async getList(pageQuery: HttpPagerRequestOptions) {
    let repositoryParams = PagerFormatRequest(pageQuery);
    let repository = await this.getRepository();
    let result = await repository.get(repositoryParams);
    return {
      httpStatus: 200,
      results: result
    }
  }

}

export default new PlaceService();