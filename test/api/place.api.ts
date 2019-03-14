import app from "../../api/app";
import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
import { request, expect } from 'chai';
import 'mocha';
import config from "../../config";
const address = `${config.development.host}:${config.development.port}`
import PlaceService from "../../api/services/Place";

describe('API Place Request', () => {
  describe('GET /api/place', () => {
    it('should return response on call', async () => {
      const res = await request(address).get('/api/place');
      expect(res).to.have.status(200);
      expect(res).to.be.a('object');
      expect(res.body.data).to.be.a('array')
    });

    it('create place with this invalid phone should failed', async () => {
      let params = {
        ref: 'XXXXXXX',
        name: "XXXX",
        address: { street: "XX XXXXXX XXXX" },
        phone: "34435566"
      }
      //9 < {phone.length} <13,
      const res = await PlaceService.add(params);
      expect(res.httpStatus).to.be.eq(422);
      expect(res).to.be.a('object');
    });
  });

  describe('SERVICE Place Action', () => {
    it('should return response on call', async () => {
      const res = await PlaceService.getList({});
      expect(res.httpStatus).to.be.eq(200);
    });
  });
})