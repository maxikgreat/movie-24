const { defaults } = require('jest-config');const { pathsToModuleNameMapper } = require('ts-jest/utils');const { compilerOptions: { paths } } = require('./paths.json');module.exports = {  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],  testMatch: ['**/?(*.)+(test).ts?(x)'],  roots: ['<rootDir>'],  modulePaths: ['<rootDir>'],  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>' })};