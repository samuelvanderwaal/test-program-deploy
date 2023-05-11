/* eslint-disable import/no-extraneous-dependencies */
import { createUmi as basecreateUmi } from '@metaplex-foundation/umi-bundle-tests';
import { program } from '../src';

export const createUmi = async () => (await basecreateUmi()).use(program());
