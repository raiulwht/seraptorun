import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
                Authorization: "APIKEY 5ks9718kj1bt1eg"
            }
        });
        return next.handle(req);
    }
}