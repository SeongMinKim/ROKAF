import React from 'react';

const MyName = ({ name }) => {
  return <div>제 이름은 {name} 입니다.</div>;
};

MyName.defaultProps = {
  name: ' min '
};

export default MyName;
