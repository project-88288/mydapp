import type { Env } from "@terra-money/terrain";
import { MydappClient } from './clients/MydappClient';

export class Lib extends MydappClient {
  env: Env;

  constructor(env: Env) {
    super(env.client, env.defaultWallet, env.refs['mydapp'].contractAddresses.default);
    this.env = env;
  }
};

export default Lib;
