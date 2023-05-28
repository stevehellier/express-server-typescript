/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';

import app from '../../app';

describe('GET /', () => {
  it('responds with a 401 and "not authed" message', (done) => {
    request(app)
      .get('/authtest')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        401,
        {
          message: 'not authed',
        },
        done
      );
  });
  it('responds with a 200 and "authed" message', (done) => {
    request(app)
      .get('/authtest')
      .set('Accept', 'application/json')
      .set('Authorization', 'Basic dGVzdDp0ZXN0')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          message: 'authed',
        },
        done
      );
  });
});
