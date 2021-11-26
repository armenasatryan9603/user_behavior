import './Switch.css';

const Switch = ({ onClick, checked }) => {
    return (
        <label class="switch">
            <input onClick={onClick} checked={checked} type="checkbox" />
            <span class="slider"></span>
        </label>
    );
};

export default Switch;