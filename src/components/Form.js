// import React, { useState } from "react";

const Form = ({ setHapList }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    let title = event.target[0].value;
    let content = event.target[1].value;

    setHapList({
      title: title,
      content: content,
    });

    event.target[0].value = "";
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
