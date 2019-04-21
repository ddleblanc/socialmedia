import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgo implements PipeTransform {
    transform(likes: []): boolean {

        return true;
    }
}