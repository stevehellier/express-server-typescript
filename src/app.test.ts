/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';

import app from './app';

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          message: 'Express + TypeScript Server',
        },
        done
      );
  });

  it('response withe 404 not found page', (done) => {
    request(app)
      .get('/banana')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        404,
        {
          message: 'Not found - /banana',
        },
        done
      );
  });
});
