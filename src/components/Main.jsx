import React from "react";
import "../css/contentStyle.css"

class Main extends React.Component{
    render() {
        return(
            <div>

                <div className="App-container">
                    <h2>
                        Today's Task
                    </h2>
                </div>
                <div className="App-Todo-List">
                    <div className="App-Task">
                        <input type="checkbox"/> First Task
                        <p>
                            Read about the ReactJs
                        </p>
                    </div>
                    <div className="App-Task">
                        <input type="checkbox"/> Second Task
                        <p>
                            Practise About Yesterday's Chapter.
                        </p>
                    </div>
                    <div className="App-Task">
                        <input type="checkbox"/> Third Task
                        <p>
                            Check the bug and make the code changes.
                        </p>
                    </div>
                    <div className="App-Task">
                        <input type="checkbox"/> Forth Task
                        <p>
                            Work on the Todo App - 1
                        </p>
                    </div>
                    <div className="App-Task">
                        <input type="checkbox"/> Fifth Task
                        <p>
                            Push the code changes as Open source.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}
export default Main;