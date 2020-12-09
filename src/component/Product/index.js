import React from 'react'

export default class Product extends React.Component {
    componentDidMount () {
        this.props.fetchProduct()
    }
    render () {
        let { ProductData } = this.props;
        let { isFerching, data = [], err } = ProductData;
        if (isFerching) {
            return (
                <fieldset>
                    <legend>Product</legend>
                    <h1>正在获取数据......</h1>
                </fieldset>
            )
        } else if (!isFerching && data.length) {
            return (
                <fieldset>
                    <legend>Product</legend>
                    <ul>
                        {data.map(item => {
                            return (
                                <li key={item.id}>
                                    商品名：
                                    <span>{item.title}</span>
                                    价格：
                                    <span>{item.price}</span>
                                    库存：
                                    <span>{item.inventory}</span>
                                </li>
                            )
                        })}
                    </ul>
                </fieldset>
            )
        } else if (!isFerching && err) {
            return(
                <fieldset>
                    <legend>Product</legend>
                    <h1>获取数据失败</h1>
                </fieldset>
            )
        }
    }
}