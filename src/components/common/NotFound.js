import React, { Component } from 'react'
import { Badge } from 'reactstrap';


export default class NotFound extends Component {
    notFound() {
        return (
          <div>
            <br />
            <br />
            <h3>
              <Badge style={{ color: "#2942B1" }} color="none" pill>
                Page Not Found
              </Badge>
            </h3>{" "}
            <div align="center">
              <img
                style={{ opacity: 0.3 }}
                alt="not found"
                src="https://64.media.tumblr.com/2dc890c7037656cf864d517a2c339e14/96d36ccd518edab7-bc/s540x810/56c16e23d406ff558624f4c82b0ee57ae23ac596.png"
                width="300"
              />
            </div>
          </div>
        );
      }

    render() {
        return (
            <div>
                {this.notFound()}
            </div>
        )
    }
}
