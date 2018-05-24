import React from 'react';
import PropTypes from 'prop-types';


export default class Parent extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    btnClick = () =>{
     this.searchTree.onChange();  //调用子组件的onChange方法
    }
    render() {
        return (
            <div>
                <Button onCick={this.btnClick}></Button>
                {/*
                ref通过设定一个回调函数，实现如下效果：
                这里的 child 表示子组件的实例，
                使用this.searchTree = child，表示把父组件的searchTree 属性指向子组件实例
                */}
                <Children
                    ref={(child) => {
                        this.searchTree = child;
                    }}
                />
            </div>
        );
    }
}

