import * as fs from 'fs';
import * as dotenv from 'dotenv';
export const defaultEnv = dotenv.parse(fs.readFileSync('.development.env'));
