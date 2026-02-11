import type { Casing } from '../string';
/**
 * The bitcoin address families.
 */
export declare enum BitcoinAddressFamily {
    Legacy = "legacy",
    Segwit = "segwit",
    Bech32 = "bech32",
    Taproot = "taproot"
}
/**
 * The bitcoin address families.
 */
export type BitcoinAddressFamilyType = `${BitcoinAddressFamily}`;
/**
 * The different bitcoin networks.
 */
export declare enum BitcoinNetwork {
    Mainnet = "mainnet",
    Testnet = "testnet"
}
/**
 * The different bitcoin networks.
 */
export type BitcoinNetworkType = `${BitcoinNetwork}`;
type BitcoinAddressOptions = {
    prefix: Record<BitcoinNetworkType, string>;
    length: {
        min: number;
        max: number;
    };
    casing: Casing;
    exclude: string;
};
export declare const BitcoinAddressSpecs: Record<BitcoinAddressFamilyType, BitcoinAddressOptions>;
export {};
