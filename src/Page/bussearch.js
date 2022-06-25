import { Button } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import React, { useState, useEffect } from "react";
import { Grid } from "@arco-design/web-react";
import $ from "jquery";
import {
  List,
  Avatar,
  Select,
  Message,
  Space,
  Input,
} from "@arco-design/web-react";
import axios from "axios";

const Option = Select.Option;

const Row = Grid.Row;
const Col = Grid.Col;

function Bussearch() {
  useEffect(() => {}, []);
  const options = [
    "公路客運",
    "台北市",
    "新北市",
    "桃園市",
    "新竹市",
    "宜蘭縣",
  ];

  return (
    <div style={{ width: "100%" }}>
      <Select
        showSearch
        mode="multiple"
        options={options}
        defaultValue={options}
        placeholder="篩選地區"
      />
      <Input allowClear placeholder="請輸入路線編號" />
      
      <List
        dataSource={new Array(1).fill({
          title: "9001",
          description: "臺北市東南區─國道3號─桃園市中壢區",
        })}
        render={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
      ,
    </div>
  );
}

export default Bussearch;
