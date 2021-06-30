import React from 'react';

function MyCheckbox(props) {
  const { value, checkedValueList, setCheckedValueList } = props;

  const handleChange = (e) => {
    const value = e.target.value;

    if (!checkedValueList.includes(value))
      return setCheckedValueList([...checkedValueList, value]);

    const newLikeList = checkedValueList.filter((v, i) => {
      return v !== value;
    });

    //3. 設定回陣列
    setCheckedValueList(newLikeList);
  };

  return (
    <>
      <input
        type="checkbox"
        value={value}
        checked={checkedValueList.includes(value)}
        onChange={handleChange}
      />
      <label>{value}</label>
    </>
  );
}

export default MyCheckbox;
