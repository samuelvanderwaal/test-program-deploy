import { UmiPlugin } from '@metaplex-foundation/umi';
import { createMyProgramProgram } from './generated';

export const program = (): UmiPlugin => ({
  install(umi) {
    umi.programs.add(createMyProgramProgram(), false);
  },
});
