import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgo implements PipeTransform {
    transform(date: Date): string {
        let createdAt = new Date(date).getUTCDay();
        let today = new Date().getUTCDay();
        let timeAgo = today - createdAt;

        if (timeAgo >= 7) {
            let weeksAgo = Math.floor(timeAgo / 7);
            return `${weeksAgo}w`
        }
        if (timeAgo <= 0) {
            let createdAt = new Date(date).getUTCHours();
            let today = new Date().getUTCHours();
            let timeAgo = today - createdAt;
            console.log(timeAgo)
            if (timeAgo <= 0) {
                let createdAt = new Date(date).getUTCMinutes();
                let today = new Date().getUTCMinutes();
                let timeAgo = today - createdAt;
                return `${timeAgo}m`
            }
            return `${timeAgo}h`
        }
        return `${timeAgo}d`
    }
}