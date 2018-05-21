import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  constructor() { }

  transform(value: any, query: string, arr: any, searchFor: string): any {
    if (value === null)
      return null;
    else {
      return query ? arr.reduce((prev, next) => {
        if(searchFor === 'users'){
          if (next.name.includes(query)) { prev.push(next); }
        }
        else if (searchFor === 'event') {
          if (next.name.includes(query)) { prev.push(next); }
        }
        else if (next.name.includes(query)
          || next.id.includes(query)
          || next.address.includes(query)
          || next.phone.includes(query)
          || next.homePhone.includes(query)
          || next.email.includes(query)
          || next.job.includes(query)) { prev.push(next); }
        if (searchFor == 'volunteer') {
          if (next.telePhone.includes(query)
            || next.volunteerType.includes(query)) { prev.push(next); }
        }
        if (searchFor == 'donor') {
          if (next.donorType.includes(query)) { prev.push(next); }
        }

        return prev;
      }, []) : value;
    }


  }


}
