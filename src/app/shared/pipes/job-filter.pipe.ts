import { KeyValue } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';  
import { FilterType } from '../constant/app.const';
import { Job } from '../model/job.model';
  
@Pipe({name: 'jobFilter'})

export class JobPipe implements PipeTransform {  
    transform(items: Job[], filterType: string, filterVal: string): any[] {  
        if (!items || !filterVal) {  
            return items;  
        }  
        if(filterType == FilterType.Status)
            return items.filter(x=> x.status == filterVal); 
        else if(filterType == FilterType.Person)
            return items.filter(x=> x.assigned_to.findIndex(y=> y == filterVal) > -1); 
        else if(filterType == FilterType.Location)
            return items.filter(x=> x.location == filterVal);
        return items;
    }  
} 