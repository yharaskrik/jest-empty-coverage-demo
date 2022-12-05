import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  collectCoverage: true,
  collectCoverageFrom: ['**/src/lib/**/*.ts']
};
