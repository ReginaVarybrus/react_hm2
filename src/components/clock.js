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

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState.date.toLocaleTimeString());
        return nextState.date.getSeconds() % 2 ? false : true;
    }

    render () {
        return (
            <>
              <p>{this.props.children}</p>
              <img src={this.props.src} className="App-logo" alt="logo"></img>
              <p>{this.state.date.getUTCDate()}/{this.state.date.getUTCMonth()}/{this.state.date.getUTCFullYear()}</p>
              <p>{this.state.date.toLocaleTimeString()}</p> 
            </>
        )
    }
}

// Добавте классовый компонент, принемающий пропсы. В пропсу поместите путь к картинке и ее название. 
// Сам компонент (классовый) отображает картинку (второй раз) и текущую дату и время, время обновляется каждую секунду, 
// грубо говоря как часы. Помните о жизненных циклах классового компонента при создании часов.

// передавайте время в дочерний компонент как пропсы, компонент тоже классовый. 
