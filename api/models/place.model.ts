import shortid = require("shortid");
const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$';

export class Place {
  public step: number;
  public ref: string;
  public name: string;
  //public schedule: Array<any>;
  public phone: string;
  public address: any;

  constructor(name: string, address: any, phone: string, step: number) {
    shortid.characters(characters);
    this.step = step;
    this.ref = shortid.generate();
    this.name = name;
    this.address = address;
    //this.schedule = schedule;
    this.phone = phone;
  }
}