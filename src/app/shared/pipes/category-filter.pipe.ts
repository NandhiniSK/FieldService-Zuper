import { KeyValue } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({name: 'category'})
export class CatergoryPipe implements PipeTransform {  
    transform(items: any[], filter: string): any[] {  
        if (!items || !filter) {  
            return items;  
        }  
        return items.filter(x=> x.key == filter); 
    }  
} 