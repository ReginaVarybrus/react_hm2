import React from 'react';

export class MyClock extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
    tick() {
        this.setState({
          date: new Date()
        });
      }

    render () {
        return (
            <>
              <p>{this.props.name}</p>
              <img src={this.props.src}></img>
              <p>Today is {this.state.date.getUTCDate()}/{this.state.date.getUTCMonth()}/{this.state.date.getUTCFullYear()}</p>

              <CheckClock>
                {this.state.date}
              </CheckClock>
            </>
        )
    }
}

export class CheckClock extends React.Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.children.toLocaleTimeString());
        return nextProps.children.getSeconds() % 2 ? false : true;
    }

    render () {
        return (
            <>
              <p>Time is {this.props.children.toLocaleTimeString()}</p> 
            </>
        )
    }
}

