import { InjectorInstance } from '../app.module';
import { SharedService } from '../shared/services/shared.service';

export const LocalStorage = window.localStorage;
export const SessionStorage = window.sessionStorage;
export const SERVER_API_URL = 'http://localhost:4000/';

export const ABBREVIATIONS = [
    {
        'abbr':'Art., arts.', 'fullForm':'Article, articles'
    },{
        'abbr':'Cl., cls.', 'fullForm':'Clause, clauses'
    },{
        'abbr':'C.O.', 'fullForm':'Constitution Order'
    },{
        'abbr':'Ins.', 'fullForm':'Inserted'
    },{
        'abbr':'P., pp.', 'fullForm':'Page, pages'
    },{
        'abbr':'Pt.', 'fullForm':'Part'
    },{
        'abbr':'Rep.', 'fullForm':'Repealed'
    },{
        'abbr':'S., ss.', 'fullForm':'Section, sections'
    },{
        'abbr':'Sch.', 'fullForm':'Schedule'
    },{
        'abbr':'Subs.', 'fullForm':'Substituted'
    },{
        'abbr':'w.e.f.', 'fullForm':'with effect from'
    },
];

export const SALUTATION_TYPES = ['Mr.', 'Miss.', 'Mrs.', 'Mx.'];

export const USER_NAVIGATION_LINKS = [
    {
        'link': 'dashboard', 'title': 'Dashboard'
    }, {
        'link': 'donations', 'title': 'My Donations'
    }, {
        'link': 'complaints-queries', 'title': 'My Complaints/Queries'
    }
];

export const RECENT_ACTIVITIES_LINKS = [
    {
        label: 'Photo Gallery',
        path: './photo-gallery',
        index: 0
    },
    {
        label: 'Video Gallery',
        path: './video-gallery',
        index: 1
    }
]

export function template(url: string): string{
    let sharedService = InjectorInstance.get<SharedService>(SharedService);
    return sharedService !== undefined ? '../'+sharedService.getLanguage+'/'+url : '../en/'+url;
}