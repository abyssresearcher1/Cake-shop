import React, { useState } from "react";
import { Button, Drawer } from "antd";

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement=""
        onClose={onClose}
        open={open}
      ></Drawer>
    </>
  );
};
export default App;
