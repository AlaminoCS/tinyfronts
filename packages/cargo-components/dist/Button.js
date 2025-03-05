import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ label, onClick }) => {
    return (_jsx("button", Object.assign({ onClick: onClick }, { children: label })));
};
export default Button;
