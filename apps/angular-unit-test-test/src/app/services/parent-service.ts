import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class ParentService {
    
    multiplyMethod(x:number, y:number): number {
        const result = x * y;
        return result;
    }
}