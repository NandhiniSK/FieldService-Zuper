import { KeyValue } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core'; 
import { Customer } from '../model/customer.model';

@Pipe({name: 'customer'})
export class CustomerFilterPipe implements PipeTransform {  
    
    transform(items: Customer[], selectedName: string,selectedLocation:string, selectedGender:string) : any[]{  
        if (!items || (!selectedName && !selectedLocation && !selectedGender)) {  
            return items;  
        }  
        if(selectedName && selectedLocation && selectedGender) 
            return items.filter(x=> x.name == selectedName && x.location == selectedLocation && x.gender == selectedGender);
        if(selectedName && !selectedLocation && !selectedGender) 
            return items.filter(x=> x.name == selectedName);
        if(!selectedName && selectedLocation && !selectedGender) 
            return items.filter(x=> x.location == selectedLocation);
        if(!selectedName && !selectedLocation && selectedGender) 
            return items.filter(x=> x.gender == selectedGender);
        if(selectedName && selectedLocation && !selectedGender) 
            return items.filter(x=> x.name == selectedName && x.location == selectedLocation);
        if(selectedName && !selectedLocation && selectedGender) 
            return items.filter(x=> x.name == selectedName && x.gender == selectedGender);
        if(!selectedName && selectedLocation && selectedGender) 
            return items.filter(x=> x.location == selectedLocation && x.gender == selectedGender);
        return items;
    }  
} 


