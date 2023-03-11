import { KeyValue } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({name: 'sort'})

export class SortPipe implements PipeTransform {  
    transform(items: any[], sortOrder: string, indexName: string): any[] {  
        if (!items || !sortOrder || !indexName) {  
            return items;  
        }  
        
        return items;
    }  
} 