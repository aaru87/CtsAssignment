import { Pipe, PipeTransform } from '@angular/core';
import { IssuesDetails } from '../model/issues-details';

@Pipe({
  name: 'countPipe'
})
export class CountPipePipe implements PipeTransform {

  transform(issues: IssuesDetails[], searchText: number) {
    console.log("Pipe invoked"+searchText)
    return issues.filter(teacher=>teacher.count>searchText);

      
  }

}
