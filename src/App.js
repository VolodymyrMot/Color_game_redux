import React from 'react';
import {Component} from "react";
import {connect} from 'react-redux';
import './App.css';
import './index.css';

class App extends Component {
    render() {
        const Colors = this.props.colors;
        const x = this.props.search;
        if( x.length === 1){
            let index1 = document.getElementById(x[0].id);
            index1.style.opacity = 1;
        } else if(x.length >= 2) {
            function fun1() {
                let index2 = document.getElementById(x[1].id);
                index2.style.opacity = 1;
                if (x[0].name === x[1].name && x[0].id !== x[1].id) {
                    x.length = 0;
                }else if(x[0].name !== x[1].name || x[0].id === x[1].id){
                    function fun2() {
                        let index1 = document.getElementById(x[0].id);
                        index1.style.opacity = 0;
                        let index2 = document.getElementById(x[1].id);
                        index2.style.opacity = 0;
                        x.length = 0;
                    }setTimeout(fun2, 400);
                }
            }fun1();
        }


        return (
            <div className="content_list">
                {
                    Colors.map((color) => <div  className="block" key={color.id} onClick={()=> this.props.onFindColor(color)} >
                            <img id={color.id} src={color.img} alt=""/>
                        </div>
                    )
                }
            </div>
        );
    }
}


export default connect(
    state=>({
        colors: state.colors,
        search: state.search
    }),
    dispatch=>({
        onFindColor: (color)=>{
            let newBlock = {id: color.id, name: color.name};
            dispatch({type: 'FIND_COLOR', payload: newBlock});
        }
    })
)(App);