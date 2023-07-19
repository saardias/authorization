const serverName: string = "autorization-server";
const serverVersion = "0.1";

type Env = Record<string, any>;
interface Envs {
  test: Env
  dev: Env
  int: Env
  prod: Env
}

const test: Env = {
  serverName,
  serverVersion,
  port: 8080
};

/* eslint-disable */

const dev: Env = {
  serverName,
  serverVersion,
  port: 8080,
};

const int: Env = { serverName, serverVersion, port: 8080 };

const prod: Env = { serverName, serverVersion, port: 8080 };

const envs: Envs = {
  test,
  dev,
  int,
  prod,
};

let config: Env = dev;

const env: keyof typeof envs =
  (process.env.NODE_ENV &&
    (process.env.NODE_ENV.trim() as keyof typeof envs)) ||
  ("dev" as keyof typeof envs);

config = envs[env];
export default {
  ...config,
};
