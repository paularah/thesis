/*
 * This is an example of an AssemblyScript smart contract with two simple,
 * symmetric functions:
 *
 * 1. setGreeting: accepts a greeting, such as "howdy", and records it for the
 *    user (account_id) who sent the request
 * 2. getGreeting: accepts an account_id and returns the greeting saved for it,
 *    defaulting to "Hello"
 *
 * Learn more about writing NEAR smart contracts with AssemblyScript:
 * https://docs.near.org/docs/develop/contracts/as/intro
 *
 */


import { Context, logging, storage, PersistentMap } from 'near-sdk-as'


let players = new PersistentMap<string, string>("players");

//contract to keep track of account id of and roles

export function createPlayer(accountId:string, role:string):void {
    players.set(accountId, role)
    logging.log("created" + role + "with account id: " + accountId)
} 

export function createCooperativeBatch():void {


}

export function createUnion():void {

}

export function createRetailBatch():void{

}


export function getPlayerRole(accountId:string):string | null {
    return players.get(accountId)
}

export function getProvenance():void{
    
}

