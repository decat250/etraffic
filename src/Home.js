import { Button } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import React, { useState, useEffect } from "react";
import { Grid } from "@arco-design/web-react";
import $ from "jquery";
import { List, Avatar, Select, Message, Space } from "@arco-design/web-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const citydata = [
  {
    CityID: "A",
    CityName: "公路客運",
    CityCode: "InterCityBus",
    City: "InterCityBus",
    CountyID: "A",
    Version: "22.02.1",
  },
  {
    CityID: "A",
    CityName: "臺北市",
    CityCode: "TPE",
    City: "Taipei",
    CountyID: "A",
    Version: "22.02.1",
  },
  {
    CityID: "B",
    CityName: "臺中市",
    CityCode: "TXG",
    City: "Taichung",
    CountyID: "B",
    Version: "22.02.1",
  },
  {
    CityID: "C",
    CityName: "基隆市",
    CityCode: "KEE",
    City: "Keelung",
    CountyID: "C",
    Version: "22.02.1",
  },
  {
    CityID: "D",
    CityName: "臺南市",
    CityCode: "TNN",
    City: "Tainan",
    CountyID: "D",
    Version: "22.02.1",
  },
  {
    CityID: "E",
    CityName: "高雄市",
    CityCode: "KHH",
    City: "Kaohsiung",
    CountyID: "E",
    Version: "22.02.1",
  },
  {
    CityID: "F",
    CityName: "新北市",
    CityCode: "NWT",
    City: "NewTaipei",
    CountyID: "F",
    Version: "22.02.1",
  },
  {
    CityID: "G",
    CityName: "宜蘭縣",
    CityCode: "ILA",
    City: "YilanCounty",
    CountyID: "G",
    Version: "22.02.1",
  },
  {
    CityID: "H",
    CityName: "桃園市",
    CityCode: "TAO",
    City: "Taoyuan",
    CountyID: "H",
    Version: "22.02.1",
  },
  {
    CityID: "I",
    CityName: "嘉義市",
    CityCode: "CYI",
    City: "Chiayi",
    CountyID: "I",
    Version: "22.02.1",
  },
  {
    CityID: "J",
    CityName: "新竹縣",
    CityCode: "HSQ",
    City: "HsinchuCounty",
    CountyID: "J",
    Version: "22.02.1",
  },
  {
    CityID: "K",
    CityName: "苗栗縣",
    CityCode: "MIA",
    City: "MiaoliCounty",
    CountyID: "K",
    Version: "22.02.1",
  },
  {
    CityID: "M",
    CityName: "南投縣",
    CityCode: "NAN",
    City: "NantouCounty",
    CountyID: "M",
    Version: "22.02.1",
  },
  {
    CityID: "N",
    CityName: "彰化縣",
    CityCode: "CHA",
    City: "ChanghuaCounty",
    CountyID: "N",
    Version: "22.02.1",
  },
  {
    CityID: "O",
    CityName: "新竹市",
    CityCode: "HSZ",
    City: "Hsinchu",
    CountyID: "O",
    Version: "22.02.1",
  },
  {
    CityID: "P",
    CityName: "雲林縣",
    CityCode: "YUN",
    City: "YunlinCounty",
    CountyID: "P",
    Version: "22.02.1",
  },
  {
    CityID: "Q",
    CityName: "嘉義縣",
    CityCode: "CYQ",
    City: "ChiayiCounty",
    CountyID: "Q",
    Version: "22.02.1",
  },
  {
    CityID: "T",
    CityName: "屏東縣",
    CityCode: "PIF",
    City: "PingtungCounty",
    CountyID: "T",
    Version: "22.02.1",
  },
  {
    CityID: "U",
    CityName: "花蓮縣",
    CityCode: "HUA",
    City: "HualienCounty",
    CountyID: "U",
    Version: "22.02.1",
  },
  {
    CityID: "V",
    CityName: "臺東縣",
    CityCode: "TTT",
    City: "TaitungCounty",
    CountyID: "V",
    Version: "22.02.1",
  },
  {
    CityID: "W",
    CityName: "金門縣",
    CityCode: "KIN",
    City: "KinmenCounty",
    CountyID: "W",
    Version: "22.02.1",
  },
  {
    CityID: "X",
    CityName: "澎湖縣",
    CityCode: "PEN",
    City: "PenghuCounty",
    CountyID: "X",
    Version: "22.02.1",
  },
  {
    CityID: "Z",
    CityName: "連江縣",
    CityCode: "LIE",
    City: "LienchiangCounty",
    CountyID: "Z",
    Version: "22.02.1",
  },
];
const Option = Select.Option;

const Row = Grid.Row;
const Col = Grid.Col;
const btn = {
  border: "none" /* Remove borders */,
  fontSize: "20px" /* Set a font size */,
  height: "200px",
  width: "90%",
};

function Home() {
  let navigate = useNavigate();

  const [options, setoptions] = useState([]);
  const [news, setnews] = useState([
    {
      title: "",
      description: "",
    },
  ]);

  useEffect(() => {
    var data = [];
    for (var i = 0; i < citydata.length; i++) {
      data.push(citydata[i].CityName);
    }
    setoptions(data);
  }, []);

  const getnews = (url) => {
    const parameter = {
      grant_type: "client_credentials",
      client_id: "XXXXXXXXXX-XXXXXXXX-XXXX-XXXX",
      client_secret: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    };

    $.ajax({
      type: "GET",
      url: url,
      crossDomain: true,
      dataType: "JSON",
      data: parameter,
      async: false,
      success: function (data) {
        setnews(data);
        console.log(data);
      },
      error: function (xhr, textStatus, thrownError) {},
    });
  };
  return (
    <div style={{ width: "100%" }}>
      <Row>
        <Col xs={24} lg={6}>
          <Button
            className="btn"
            style={btn}
            onClick={(e) => navigate("/bussearch")}
          >
            <i className="fa fa-home"></i>
            <br></br> 公車路線查詢
          </Button>
        </Col>
        <Col xs={24} lg={6}>
          <Button className="btn" style={btn}>
            <i className="fa fa-home"></i>
            <br></br> 最近站牌
          </Button>
        </Col>
        <Col xs={24} lg={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Select
              showSearch="true"
              placeholder="Please select"
              style={{ width: 154 }}
              onChange={(value, option) => {
                if (option._index == 0) {
                  getnews(
                    "https://tdx.transportdata.tw/api/basic/v2/Bus/News/InterCity?%24top=30&%24format=JSON"
                  );
                } else {
                  getnews(
                    "https://tdx.transportdata.tw/api/basic/v2/Bus/News/City/" +
                      citydata[option._index].City +
                      "?%24top=30&%24format=JSON"
                  );
                }
              }}
            >
              {options.map((option, index) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </div>
          <List
            dataSource={news}
            render={(item, index) => (
              <List.Item
                key={index}
                onClick={(e) => window.open(news[index].NewsURL)}
              >
                <List.Item.Meta
                  title={item.Title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
