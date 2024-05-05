import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs/internal/Observable";



export class UniqueEmailValidator{
    static uniqueEmail(control : AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
        let registeredEmails = [ 'manoj.patil.144@gmail.com', 'prashant.b@gmail.com' ];
        return new Promise((resolve)=>{
            setTimeout(() => {
                if(registeredEmails.includes(control.value)){
                    resolve({uniqueEmail : true})
                }else{
                    resolve(null)
                }
            }, 5000);
        })
    }
} 