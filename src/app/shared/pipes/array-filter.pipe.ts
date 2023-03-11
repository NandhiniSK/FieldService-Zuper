import { KeyValue } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({name: 'arrayFilter'})
export class ArrayFilterPipe implements PipeTransform {  
    
    transform(items: any[], filterVal: any) : any[]{  
        filterVal = filterVal.toLowerCase();
        if (!items || !filterVal) {  
            return items;  
        }  
        return items.filter(x=> x.toLowerCase().includes(filterVal));
    }  
    
} 


