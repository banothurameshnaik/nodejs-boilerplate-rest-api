import mongoose from 'mongoose';
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import app from '../src/index';

const sandbox = sinon.createSandbox();

chai.should(); // initialize chai
chai.use(sinonChai); // set up chai with sinon assertion
chai.use(chaiHttp); // set up chai with ability to create a mock server

const { expect } = chai;

export const serverMock = () => {
    const server = chai.request(app);
    server.keepOpen();
    return server;
};

const server = serverMock();

export {
    chai,
    sandbox,
    server,
    expect,
    mongoose,
};
