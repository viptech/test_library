import React from "react";
import Button from 'antd/lib/button';

import 'antd/lib/button/style/index.css'

export interface ButtonProps {
  label: string;
}

const MyButton = (props: ButtonProps) => {
  return <Button>{props.label}</Button>;
};

export default MyButton;
