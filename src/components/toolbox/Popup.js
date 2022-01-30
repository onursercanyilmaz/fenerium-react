
import React from "react";
import {PopoverBody, PopoverHeader,Popover, UncontrolledPopover, Button } from "reactstrap";
const Popup = ({ name, label, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div>
    <div>
  <Button
    id="Popover1"
    type="button"
  >
    Launch Popover
  </Button>
  <Popover
    flip
    target="Popover1"
    toggle={function noRefCheck(){}}
  >
    <PopoverHeader>
      Popover Title
    </PopoverHeader>
    <PopoverBody>
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
    </PopoverBody>
  </Popover>
</div>
    </div>
  )
};

export default Popup;



