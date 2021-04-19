export class AppConfigService {
  constructor(public env, public port, public database, public migrationRun) {}
  get isProduction() {
    return this.env === "production";
  }
}
