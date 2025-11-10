
import fs from 'fs';

const threshold = Number(process.env.COVERAGE_THRESHOLD || '90'); 
const path = './coverage/coverage-summary.json';
if (!fs.existsSync(path)) {
  console.error('coverage-summary.json not found. Run jest --coverage first.');
  process.exit(2);
}
const summary = JSON.parse(fs.readFileSync(path, 'utf8'));
const { total } = summary;
const metrics = ['statements', 'branches', 'functions', 'lines'];

let failed = false;
for (const m of metrics) {
  const pct = total[m].pct; 
  console.log(`${m}: ${pct}% (required: ${threshold}%)`);
  if (pct < threshold) {
    failed = true;
  }
}
if (failed) {
  console.error(`Coverage check failed. Required: ${threshold}%`);
  process.exit(1);
}
console.log('Coverage threshold met.');
process.exit(0);
