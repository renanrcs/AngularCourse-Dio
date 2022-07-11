import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit{

    courses : Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                code: 'XPS-8796',
                price: 99.99,
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 2, 2019'
            },

            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                code: 'LKL-1094',
                price: 45.99,
                duration: 80,
                rating: 4,
                releaseDate: 'Octuber, 16, 2022'
            }
        ]
    }

}