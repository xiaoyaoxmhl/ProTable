import React from 'react';
import PropTypes from 'prop-types';
import {Input, Button} from 'antd';

export default class demo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ""
        }
    }

    btnClick = () => {
        console.log("搜索内容是：" + this.state.value);
    }
    handleInputChange = (e) => {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <div>
                <Input placeholder="请输入关键字" onChange={this.handleInputChange} value={this.state.value}/>
                <Button onClick={this.btnClick}>搜索</Button>
            </div>
        );
    }
}

demo.propTypes = {};
demo.defaultProps = {}