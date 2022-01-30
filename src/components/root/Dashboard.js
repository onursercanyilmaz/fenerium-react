import React, { Component } from 'react'
import Navi from '../navi/Navi'
import ProductList from './../products/ProductList';
import CategoryList from './../categories/CategoryList';
import {Row, Col} from "reactstrap";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
               
                <Row>
                    <Col xs='2'><CategoryList/></Col>
                    <Col xs='10'><ProductList/></Col>
                </Row>
            </div>
        )
    }
}
