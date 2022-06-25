import { Button } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { Menu } from "@arco-design/web-react";
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Bussearch from "./Page/bussearch";
import Home from "./Home";
import Test from "./Page/test";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function App() {
  function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  }
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },[]);

  return (
    <div className="menu-demo">
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        onClickMenuItem={(e) => console.log(e)}
      >
        <MenuItem key="0" style={{ padding: 0, marginRight: 38 }} disabled>
          <div
            style={{
              width: 80,
              height: " ",
              borderRadius: 2,
              background: "var(--color-fill-3)",
              cursor: "text",
            }}
          />
        </MenuItem>
        <MenuItem key="1">首頁</MenuItem>
        <MenuItem key="2">公車路線查詢</MenuItem>
        <MenuItem key="3">Cloud Service</MenuItem>
        <MenuItem key="4">Cooperation</MenuItem>
      </Menu>
      <Routes style={{ height: "100%" }}>
        <Route path="/etraffic" element={<Home />} />
        <Route path="/bussearch" element={<Bussearch />} />
        <Route path="/test" element={<Test />} />

      </Routes>
    </div>
  );
}

export default App;
