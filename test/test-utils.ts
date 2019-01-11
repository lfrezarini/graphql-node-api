import * as chai from "chai";
import chaiHttp = require("chai-http");

import app from "../src/app";
import db from "../src/models";

chai.use(chaiHttp);
const expect = chai.expect;

const handleError = (error) => {
  const message: string = (error.response) ? error.response.res.text : error.message || error;
  return Promise.reject(`${error.name}: ${message}`);
};

export { app, chai, db, expect, handleError };