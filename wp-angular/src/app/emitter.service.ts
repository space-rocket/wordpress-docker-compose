/* * * ./app/emitter.service.ts * * */
// Credit to https://gist.github.com/sasxa
// https://scotch.io/tutorials/angular-2-http-requests-with-observables
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EmitterService {
    // Event store
    private static _emitters: { [ID: string]: EventEmitter<any> } = {};
    // Set a new event in the store with a given ID
    // as key
    static get(ID: string): EventEmitter<any> {
        if (!this._emitters[ID]) 
            this._emitters[ID] = new EventEmitter();
        return this._emitters[ID];
    }
}