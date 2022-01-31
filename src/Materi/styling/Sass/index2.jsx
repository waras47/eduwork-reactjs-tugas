import React from "react";
import './index2.scss';
import Title from './title';

 export default class Sass extends React.Component {
    render (){
        return (
            <div>
                <Title />
                <h3 className="title">Class MERN</h3>
              <button className="btn btn-danger">Go Eduwork</button>
            </div>
        )
    }
}