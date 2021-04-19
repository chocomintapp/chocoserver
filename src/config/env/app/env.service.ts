export class AppEnvService {
  constructor(public env, public port, public database) {}
  get isProduction() {
    return this.env === "production";
  }
}
