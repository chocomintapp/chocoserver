export class AppConfigService {
  constructor(public env, public port, public database) {}
  get isProduction() {
    return this.env === "production";
  }
}
