import { IFirstLevelMenu } from "@/Interfaces/menu.interface";
import { TopLevelCategory } from "@/Interfaces/page.interface";

import CoursesSvg from './icons/Courses.svg';
import BooksSvg from './icons/Books.svg';
import ServicesSvg from './icons/Services.svg';
import ProductsSvg from './icons/Products.svg';

export const firstLevelMenu: IFirstLevelMenu[] = [
    { route: 'courses', name: 'Courses', id: TopLevelCategory.Courses, icon: <CoursesSvg/> },
    { route: 'services', name: 'Services', id: TopLevelCategory.Services, icon: <ServicesSvg/> },
    { route: 'books', name: 'Books', id: TopLevelCategory.Books, icon: <BooksSvg/> },
    { route: 'products', name: 'Products', id: TopLevelCategory.Products, icon: <ProductsSvg/> }
];
