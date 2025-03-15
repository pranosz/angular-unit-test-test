import { Injectable } from "@angular/core";
import { ParentService } from "./parent-service";

@Injectable({providedIn:'root'})
export class ChildService {

    constructor(private readonly parentService: ParentService){}

    addMethod(x:number, y:number): number {
        const result = x + y;
        this.parentService.multiplyMethod(x, y);
        return result;
    }
}