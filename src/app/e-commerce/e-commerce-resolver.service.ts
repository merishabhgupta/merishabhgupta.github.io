import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ECommerceService } from "./e-commerce.service";

@Injectable({
    providedIn: 'root'
})
export class ECommerceResolverService implements Resolve<any> {
    constructor(
        private ecommService: ECommerceService
    ) {}

    resolve() {
        return this.ecommService.fetchData();
    }
}