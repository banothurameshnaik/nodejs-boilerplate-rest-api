import { mockApp } from './mock_helpers';

const app = mockApp();

describe('API /welcome', () => {
    test('Should get 200 OK', async () => {
        const url = '/';
        const res = await app.get(url);
        expect(res.statusCode).toEqual(200);
    });
});

describe('API /healthcheck', () => {
    test('Should get 200 OK', async () => {
        const url = '/healthcheck';
        const res = await app.get(url);
        expect(res.statusCode).toEqual(200);
    });
});

describe('API /notfoundurl', () => {
    describe('When url not found', () => {
        it('Should get 404 Not Found', async () => {
            const url = '/notfoundurl';
            const res = await app.get(url);
            expect(res.statusCode).toEqual(404);
        });
    });
});
