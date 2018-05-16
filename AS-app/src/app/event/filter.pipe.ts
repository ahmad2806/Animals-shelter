import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  constructor() { }

  transform(value: any, query: string,arr: any): any {
    if(value === null)
        return null;
    else{
      return query ? arr.reduce((prev, next) => {
        if (next.name.includes(query)) { prev.push(next); }
        return prev;
      }, []) : value;
    }
      
      
    }
    

}
