import { env, base58, context, u128, PersistentMap, ContractPromise, ContractPromiseBatch, logging } from 'near-sdk-as'

type AccountId = string
type PublicKey = string
type Base58PublicKey = string
type Balance = u128

export class Player {
    account:AccountId;
    role:string;
}

export class CooperativeBatch {
    recipient:AccountId;
    batchNumber:string;
    quantity:u128;
    type:string;
    document:string
}

export class UnionBatch {
    recipient:AccountId;
    batchNumber:string;
    quantity:u128;
    type:string;
    document:string;
    collectionCentre:string;
}

export class RetailerBatch {
    recipient:AccountId;
    batchNumber:string;
    quantity:u128;
    type:string;
    document:string;
    collectionCentre:string;
}



