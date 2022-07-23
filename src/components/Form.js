// import React, { useState } from "react";

const Form = ({ onAddHap }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const hap = {
      // 새로운 hap 데이터 만들기
      title: event.target[0].value,
      content: event.target[1].value,
      date: new Date().toLocaleDateString(), //
    };

    onAddHap(hap); //hap을 App 컴포넌트로 보내줌
    event.target[0].value = ""; // 인풋 비워줌
    event.target[1].value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          name="title"
          placeholder="행복에 이름을 붙여주세요"
          required
        />
      </div>
      <div>
        <label htmlFor="content">내용</label>
        <textarea
          name="content"
          placeholder="행복을 담아주세요"
          required
        ></textarea>
      </div>
      <div>
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default Form;
