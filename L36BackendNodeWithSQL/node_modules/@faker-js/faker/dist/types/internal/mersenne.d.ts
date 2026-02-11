import type { Randomizer } from '../randomizer';
/**
 * Generates a MersenneTwister19937 randomizer with 32 bits of precision.
 * This is the default randomizer used by faker prior to v9.0.
 */
export declare function generateMersenne32Randomizer(): Randomizer;
/**
 * Generates a MersenneTwister19937 randomizer with 53 bits of precision.
 * This is the default randomizer used by faker starting with v9.0.
 */
export declare function generateMersenne53Randomizer(): Randomizer;
