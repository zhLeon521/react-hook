/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-07-18 23:53:33
 * @LastEditTime: 2021-07-19 00:14:38
 * @FilePath: \zhLeon_Frontend\react-hook\src\CComponent.js
 */

import React from 'react';

class CComponent extends React.Component {
    state = {
        message: "Class Component",
        time: new Date().toString()
    };

    componentDidMount() {
        console.log("I am from Did Mount!")
        this.interval = setInterval(this.showDate, 1000)
    }

    componentDidUpdate() {
        console.log("I am from UpDate!");
    }

    componentWillUnmount() {
        console.log("I am Unmount!")
        clearInterval(this.interval)
    }


    showDate = () => {
        this.setState({ time: new Date().toString() })
    }




    render() {
        return (
            <div>
                {this.state.message}
                <div>
                    {this.state.time}
                </div>
            </div>
        )
    }


}

export default CComponent;
