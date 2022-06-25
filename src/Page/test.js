import { Button } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { Menu } from "@arco-design/web-react";
import React, { useState, useEffect } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

function Test() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAjbP82pZy4spl8vdE6SW60gAENgIC-e9g",
      authDomain: "my-project-1526521730197.firebaseapp.com",
      databaseURL:
        "https://my-project-1526521730197-default-rtdb.firebaseio.com",
      projectId: "my-project-1526521730197",
      storageBucket: "my-project-1526521730197.appspot.com",
      messagingSenderId: "331509629310",
      appId: "1:331509629310:web:e9e2429eb06a0127c3332f",
    };
    const app = initializeApp(firebaseConfig);

  }, []);

  return <div className="menu-demo">123</div>;
}

export default Test;
