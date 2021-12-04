import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './../_models/user.model';
import {NavItem} from './../_models/nav-item'

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
private loggedInUser = new BehaviorSubject<string>('');
private navItems = new BehaviorSubject<NavItem[]>(undefined);
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  get loggedInUserName() {
    return this.loggedInUser.asObservable(); // {2}
  }

  get userNavItems(){
      return this.navItems.asObservable(); 

  }
  constructor(
    private router: Router
  ) {}

  login(user: User){
    if (user.userName !== '' && user.password !== '' ) { // {3}
      this.loggedIn.next(true);
      this.navItems.next(this.getNavItems(user.userName));  
      this.loggedInUser.next(user.userName);
      this.router.navigate(['/']);
      //window.location.reload();
    }
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  getNavItems(user:string): NavItem[]{
    let userNav : NavItem[];

    userNav = [
        {
          displayName: 'Departures',
          iconName: 'flight_takeoff',
          route: 'devfestfl',
          children: [
            {
              displayName: 'Speakers',
              iconName: 'group',
              route: 'devfestfl/speakers',
              children: [
                {
                  displayName: 'Michael Prentice',
                  iconName: 'person',
                  route: 'devfestfl/speakers/michael-prentice',
                  children: [
                    {
                      displayName: 'Create Enterprise UIs',
                      iconName: 'star_rate',
                      route: 'devfestfl/speakers/michael-prentice/material-design'
                    }
                  ]
                },
                {
                  displayName: 'Stephen Fluin',
                  iconName: 'person',
                  route: 'devfestfl/speakers/stephen-fluin',
                  children: [
                    {
                      displayName: 'What\'s up with the Web?',
                      iconName: 'star_rate',
                      route: 'devfestfl/speakers/stephen-fluin/what-up-web'
                    }
                  ]
                },
                {
                  displayName: 'Mike Brocchi',
                  iconName: 'person',
                  route: 'devfestfl/speakers/mike-brocchi',
                  children: [
                    {
                      displayName: 'My ally, the CLI',
                      iconName: 'star_rate',
                      route: 'devfestfl/speakers/mike-brocchi/my-ally-cli'
                    },
                    {
                      displayName: 'Become an Angular Tailor',
                      iconName: 'star_rate',
                      route: 'devfestfl/speakers/mike-brocchi/become-angular-tailor'
                    }
                  ]
                }
              ]
            },
            {
              displayName: 'Sessions',
              iconName: 'speaker_notes',
              route: 'devfestfl/sessions',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'devfestfl/sessions/material-design'
                },
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'devfestfl/sessions/what-up-web'
                },
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'devfestfl/sessions/my-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'devfestfl/sessions/become-angular-tailor'
                }
              ]
            },
            {
              displayName: 'Feedback',
              iconName: 'feedback',
              route: 'devfestfl/feedback'
            }
          ]
        },
        {
          displayName: 'Disney',
          iconName: 'videocam',
          route: 'disney',
          children: [
            {
              displayName: 'Speakers',
              iconName: 'group',
              route: 'disney/speakers',
              children: [
                {
                  displayName: 'Michael Prentice',
                  iconName: 'person',
                  route: 'disney/speakers/michael-prentice',
                  children: [
                    {
                      displayName: 'Create Enterprise UIs',
                      iconName: 'star_rate',
                      route: 'disney/speakers/michael-prentice/material-design'
                    }
                  ]
                },
                {
                  displayName: 'Stephen Fluin',
                  iconName: 'person',
                  route: 'disney/speakers/stephen-fluin',
                  children: [
                    {
                      displayName: 'What\'s up with the Web?',
                      iconName: 'star_rate',
                      route: 'disney/speakers/stephen-fluin/what-up-web'
                    }
                  ]
                },
                {
                  displayName: 'Mike Brocchi',
                  iconName: 'person',
                  route: 'disney/speakers/mike-brocchi',
                  children: [
                    {
                      displayName: 'My ally, the CLI',
                      iconName: 'star_rate',
                      route: 'disney/speakers/mike-brocchi/my-ally-cli'
                    },
                    {
                      displayName: 'Become an Angular Tailor',
                      iconName: 'star_rate',
                      route: 'disney/speakers/mike-brocchi/become-angular-tailor'
                    }
                  ]
                }
              ]
            },
            {
              displayName: 'Sessions',
              iconName: 'speaker_notes',
              route: 'disney/sessions',
              children: [
                {
                  displayName: 'Create Enterprise UIs',
                  iconName: 'star_rate',
                  route: 'disney/sessions/material-design'
                },
                {
                  displayName: 'What\'s up with the Web?',
                  iconName: 'star_rate',
                  route: 'disney/sessionswhat-up-web'
                },
                {
                  displayName: 'My ally, the CLI',
                  iconName: 'star_rate',
                  route: 'disney/sessionsmy-ally-cli'
                },
                {
                  displayName: 'Become an Angular Tailor',
                  iconName: 'star_rate',
                  route: 'disney/sessionsbecome-angular-tailor'
                }
              ]
            },
            {
              displayName: 'Feedback',
              iconName: 'feedback',
              route: 'disney/feedback'
            }
          ]
        }
    
    
          
        ,
      ];
    



    return userNav;
  }
}