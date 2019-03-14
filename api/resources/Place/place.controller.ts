import { Request, Response } from "express";
import PlaceService from "../../services/Place";
import { Place } from "../../models/place.model";
import { Pager } from "../../utils";

export const AddPlaceCtrl = async (req: Request, res: Response) => {
  try {
    const { name, address, phone, step } = req.body;
    let place = new Place(name, address, phone, step);
    let response = await PlaceService.add(place);
    res.status(response.httpStatus).json(response);
  } catch (e) {
    console.log("ERROR", e);
    res.status(500).json(e);
  }
}

export const GetPlaceCtrl = async (req: Request, res: Response) => {
  try {
    let serviceResponse = await PlaceService.getList(req.query);
    let response = Pager(serviceResponse.results);
    res.status(serviceResponse.httpStatus).json(response);
  } catch (e) {
    res.status(500).json(e);
  }
}