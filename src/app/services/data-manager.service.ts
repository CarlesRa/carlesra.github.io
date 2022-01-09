import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  getHomeChips(): string[] {
    return [
      'Java', 'JavaScript', 'TypeScript', 'Spring', 'Angular', 'NestJS', 'MySQL', 'MongoDB', 'Linux', 'Git', 'Git Flow',
      'Android', 'Ionic', 'Angular Material', 'Selenium', 'HTML5', 'CSS3', 'GitHub', 'BitBucket'
    ];
  }
}
