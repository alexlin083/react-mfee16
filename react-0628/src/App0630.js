import React, { useState } from 'react';
import MyRadioBox from './components/0630/MyRadioBox';
import MyCheckbox from './components/0630/MyCheckbox';

function App0630() {
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');
  const [selectedOption, setSelectOption] = useState('');
  // radio
  const [gender, setGender] = useState('');
  const genderList = ['男', '女', '未定'];
  // radio
  const [degree, setDegree] = useState('');
  const degreeList = ['大學', '碩士', '博士'];
  // checkbox 單一勾選(核取方塊)
  const [agree, setAgree] = useState(false);
  // checkbox 多個勾選(核取方塊)
  const [likeList, setLikeList] = useState([]);
  const likeTypes = ['芒果', '西瓜', '芭樂', '香蕉'];

  return (
    <>
      <h1>可控表單元素</h1>
      <section id="input-text">
        <h3>文字輸入框</h3>
        <input
          type="text"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
      </section>
      <section id="textarea">
        <h3>文字區域</h3>
        <textarea
          value={textArea}
          onChange={(event) => {
            setTextArea(event.target.value);
          }}
        />
      </section>
      <section id="select">
        <h3>下拉選單</h3>
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectOption(e.target.value);
          }}
        >
          <option value="0">請選擇</option>
          <option value="1">雞腿</option>
          <option value="2">滷肉</option>
          <option value="3">排骨</option>
        </select>
      </section>
      <section id="radio">
        <h3>選項按鈕</h3>
        <h5>性別</h5>
        {genderList.map((v, i) => {
          return (
            <MyRadioBox
              key={i}
              value={v}
              checkedValue={gender}
              setCheckedValue={setGender}
            />
          );
        })}
        <hr />
        <h5>學歷</h5>
        {degreeList.map((v, i) => {
          return (
            <MyRadioBox
              key={i}
              value={v}
              checkedValue={degree}
              setCheckedValue={setDegree}
            />
          );
        })}
      </section>
      <section id="checkbox">
        <h3>核取方塊</h3>
        <h5>單一勾選</h5>
        <input
          type="checkbox"
          checked={agree}
          onChange={(event) => {
            setAgree(event.target.checked);
          }}
        />
        <label>我同意網站會員註冊相關規定</label>
        <hr />

        <h5>
          <b> 多個勾選連動其它子節點</b>
        </h5>
        {likeTypes.map((v, i) => {
          return (
            <MyCheckbox
              key={i}
              value={v}
              checkedValueList={likeList}
              setCheckedValueList={setLikeList}
            />
          );
        })}

        <h5>多個勾選連動其它子節點</h5>
        <input
          type="checkbox"
          value="芒果"
          checked={likeList.includes('芒果')}
          onChange={(event) => {
            const value = event.target.value;

            // 如果有包含這個值，就要移出陣列
            if (likeList.includes(value)) {
              //1. 先拷貝
              //2. 在拷貝陣列上修改
              const newLikeList = likeList.filter((v, i) => {
                return v !== value;
              });
              //3. 設定回陣列
              setLikeList(newLikeList);
            }

            // 如果沒包含這個值，就要加入陣列
            if (!likeList.includes(value)) {
              setLikeList([...likeList, value]);
            }
          }}
        />
        <label>芒果</label>
        <input
          type="checkbox"
          value="西瓜"
          checked={likeList.includes('西瓜')}
          onChange={(event) => {
            const value = event.target.value;

            // 如果有包含這個值，就要移出陣列
            if (likeList.includes(value)) {
              //1. 先拷貝
              //2. 在拷貝陣列上修改
              const newLikeList = likeList.filter((v, i) => {
                return v !== value;
              });
              //3. 設定回陣列
              setLikeList(newLikeList);
            }

            // 如果沒包含這個值，就要加入陣列
            if (!likeList.includes(value)) {
              setLikeList([...likeList, value]);
            }
          }}
        />
        <label>西瓜</label>
        <input
          type="checkbox"
          value="芭樂"
          checked={likeList.includes('芭樂')}
          onChange={(event) => {
            const value = event.target.value;

            // 如果有包含這個值，就要移出陣列
            if (likeList.includes(value)) {
              //1. 先拷貝
              //2. 在拷貝陣列上修改
              const newLikeList = likeList.filter((v, i) => {
                return v !== value;
              });
              //3. 設定回陣列
              setLikeList(newLikeList);
            }

            // 如果沒包含這個值，就要加入陣列
            if (!likeList.includes(value)) {
              setLikeList([...likeList, value]);
            }
          }}
        />
        <label>芭樂</label>
      </section>
    </>
  );
}

export default App0630;
