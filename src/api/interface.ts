import { TokenMetadataResponse } from "alchemy-sdk";

interface IGenericResponse<T> {
  data: T;
  error: string;
  success: boolean;
}

export interface INumberResponse extends IGenericResponse<number> {}

export interface IGetTokenMetadataResponse
  extends IGenericResponse<TokenMetadataResponse> {}

export interface IERCxToken {
  address: string;
  decimals: string;
  icon?: string;
  name: string;
  symbol: string;
  type: string;
}

export interface IERCxTokenResponse extends IGenericResponse<IERCxToken[]> {}
