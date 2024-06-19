import React, { useState, useEffect } from "react";
import TopScroll from "./TopScroll";
import "./List.css";

export default function Expo() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="block-logo">
            <div>
            <h2>جامعة سعيدة الدكتور مولاي الطاهر</h2>
            <h2>قسم الفنون</h2>
            <h2>السنة الجامعية: 2023-2024</h2>

            </div>

          <img className="logo-saida" src="/logo_saida.png" alt="logo-saida" />
          </div>

          <section className="list-expo">
            <h3 className="m-title">
              قائمة أعمال الطلبة الخاصة بالمناقشة (الأفلام)
            </h3>
            <div className="cont-expo">
              {data &&
                data.length > 0 &&
                data.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="rank"> {item.id} </div>
                    <div className="cont-names">
                      <div className="c-name">
                        <p className="f-name">
                          {item.firstName ? item.firstName : "لم يحدد بعد"}
                        </p>
                        <p className="t-name"> الأستاذ: {item.titleName} </p>
                        <a
                          className="z-name"
                          href={item.urlThese}
                          target="_blank"
                          rel="noreferrer"
                        >
                          تحميل المذكرة
                        </a>
                      </div>
                      <div className="link">
                        <a
                          href={item.urlPeice}
                          target="_blank"
                          rel="noreferrer"
                        >
                          رابط المشاهدة والتحميل
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </main>
      <TopScroll />
    </>
  );
}
