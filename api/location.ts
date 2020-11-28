import request from '@/utils/request';
export interface Location {
  thumbnail: string;
  address: string;
  name: string;
  id: string;
  rating: number;
}

const locationApi = {
  get: async ({
    page = 1,
    q,
  }): Promise<{ total: number; results: Location[] }> => {
    return request.get(`/locations?perPage=6&page=${page}&q=${q}`);
  },
};

export default locationApi;
