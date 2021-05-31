const dev = {
  API_ENDPOINT_URL: "https://watercooler.staging.jafton.com",
};

const prod = {
  API_ENDPOINT_URL: "https://watercooler.staging.jafton.com",
};

const test = {
  API_ENDPOINT_URL: "https://watercooler.staging.jafton.com",
};

const getEnv = () => {
  switch (process.env.NODE_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    case "test":
      return test;
    default:
      break;
  }
};

export const env = getEnv();
