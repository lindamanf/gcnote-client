import React from 'react';

function Calendar() {
  return (
    <div>aaa</div>
  );
}

export default Calendar;

class DoubleButton extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  public handleItemClick(event: SyntheticEvent<any>, name: string): void {
    if (name === 'sign-in') {
      ApiCalendar.handleAuthClick();
    } else if (name === 'sign-out') {
      ApiCalendar.handleSignoutClick();
    }
  }

  render(): ReactNode {
    return (
          <button
              onClick={(e) => this.handleItemClick(e, 'sign-in')}
          >
        sign-in
          </button>
          <button
              onClick={(e) => this.handleItemClick(e, 'sign-out')}
          >
        sign-out
          </button>
    );
  }
}
