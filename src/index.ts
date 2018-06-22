import * as fs from 'fs';
import { consoleLogFix } from './console-log-fix';

const inputFile = process.argv[2];
console.log('Processing', inputFile);
const output = consoleLogFix(fs.readFileSync(inputFile, 'utf-8'));
fs.writeFileSync(inputFile, output);
