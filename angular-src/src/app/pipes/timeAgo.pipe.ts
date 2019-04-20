import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgo implements PipeTransform {
    transform(date: Date): string {
        let createdAt = new Date(date).getDay();
        let today = new Date().getDay();
        let timeAgo = today - createdAt;
        if (timeAgo >= 7) {
            let weeksAgo = Math.floor(timeAgo / 7);
            return `${weeksAgo}w`
        }
        if (timeAgo == 0) {
            let createdAt = new Date(date).getHours();
            let today = new Date().getHours();
            let timeAgo = today - createdAt;
            if (timeAgo == 0) {
                let createdAt = new Date(date).getMinutes();
                let today = new Date().getMinutes();
                let timeAgo = today - createdAt;
                return `${timeAgo}m`
            }
            return `${timeAgo}h`
        }
        return `${timeAgo}d`
    }
}