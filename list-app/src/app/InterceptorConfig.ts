import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class InterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Intercepted IN: ", req);
        let modefiedReq= req.clone({headers: req.headers.append('Key','custom-key')});
        console.log("Intercepted OUT: ", modefiedReq);
        return next.handle(modefiedReq);
    } 
}