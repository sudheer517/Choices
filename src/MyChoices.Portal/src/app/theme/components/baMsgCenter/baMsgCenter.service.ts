import {Injectable} from '@angular/core'

@Injectable()
export class BaMsgCenterService {

  private _notifications = [
    {
      name: 'Ashwini',
      text: 'Ashwini posted a new article.',
      time: '1 min ago'
    },
    {
      name: 'Sareen',
      text: 'Sareen changed his contact information.',
      time: '2 hrs ago'
    },
    {
      image: 'assets/img/shopping-cart.svg',
      text: 'You purchased Quantium t-shirt.',
      time: '5 hrs ago'
    },
    {
      name: 'Roger',
      text: 'Roger replied to your comment.',
      time: '1 day ago'
    },
    {
      name: 'Rakesh',
      text: 'Today is Rakesh\'s birthday.',
      time: '2 days ago'
    },
    {
      image: 'assets/img/comments.svg',
      text: 'New comments on your post.',
      time: '3 days ago'
    },
    {
      name: 'Samyuktha',
      text: 'Samyuktha invited you to join the event.',
      time: '1 week ago'
    }
  ];

  private _messages = [
    {
          name: 'Rakesh',
      text: 'Got the my choices demo running',
      time: '1 min ago'
    },
    {
      name: 'Kannan',
      text: 'What is the status of CheckOut sprint 80',
      time: '2 hrs ago'
    },
    {
      name: 'Roger',
      text: 'Need to host mychoices website',
      time: '10 hrs ago'
    },
    {
      name: 'Ashwini',
      text: 'angular 2 demo finished',
      time: '1 day ago'
    },
    {
      name: 'Reddy',
      text: 'Document db is set up',
      time: '1 day ago'
    },
    {
      name: 'Kannan',
      text: 'Need some support to wrap the tech share sessions',
      time: '2 days ago'
    },
    {
      name: 'Reddy',
      text: 'Pricing central KT finished',
      time: '1 week ago'
    }
  ];

  public getMessages():Array<Object> {
    return this._messages;
  }

  public getNotifications():Array<Object> {
    return this._notifications;
  }
}
