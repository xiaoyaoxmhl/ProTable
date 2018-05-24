
//树形结构 动态加载数据
onLoadData = (treeNode) => {
    console.log(treeNode);
    let {key, children} = treeNode.props.dataRef;
    return new Promise((resolve) => {
        const treeData = JSON.parse(JSON.stringify(this.state.treeData));

        if (treeNode.props.children) {
            resolve();
            return;
        }
        systemComDepartList({parentDepartId: treeNode.props.dataRef.key}).then(
            ({data}) => {
                treeNode.props.dataRef.children = changeObj(data);
                this.setState({
                    treeData: [...this.state.treeData],
                }, () => {
                    console.log(this.state.treeData);
                });
                resolve();
            },
            (err) => {
                console.log(err);
                resolve();
            }
        );
    });
}