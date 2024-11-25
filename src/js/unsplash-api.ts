import axios from 'axios';

type ParamsTypes = {
  orientation: 'landscape' | 'portrait' | 'squarish';
  content_filter: 'low' | 'high';
  page: number;
  per_page: number;
  query: string;
};

type ApiTypes<T> = {
  results: T[];
  total: number;
  total_pages: number;
};

const KEY: string = '7QaC31QWQatTvaiGVBFYsWoswGiVg-edIcET13XO0oA';
axios.defaults.baseURL = 'https://api.unsplash.com/';

const defaultConfig = {
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${KEY}`,
  },
};

async function fetchImages<T>(
  query: string,
  page: number
): Promise<ApiTypes<T>> {
  const params: ParamsTypes = {
    orientation: 'landscape',
    content_filter: 'low',
    per_page: 15,
    query,
    page,
  };

  const response = await axios.get<ApiTypes<T>>('search/photos', {
    ...defaultConfig,
    params,
  });

  return response.data;
}

export default fetchImages;
