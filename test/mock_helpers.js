import request from 'supertest';
import app from '../src/app';

// Application mocking
export const mockApp = () => request(app);
