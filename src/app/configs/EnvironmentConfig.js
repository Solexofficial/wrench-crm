const dev = {
  API_ENDPOINT_URL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/',
};

const prod = {
  API_ENDPOINT_URL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/',
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return dev;
    case 'production':
      return prod;
    default:
      break;
  }
};

export const env = getEnv();
