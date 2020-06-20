import ky from 'ky';

export const travelsApi = ky.create({
  prefixUrl: '/',
});
