interface FloatingButtonProps {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
  bgColor: string;
}

const FloatingBtn: React.FC<FloatingButtonProps> = ({
  label,
  icon,
  isActive,
  onClick,
  bgColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 p-2 rounded-full font-semibold shadow-lg transition-colors duration-300 ${bgColor}`}
    >
      <img src={icon} alt={label} className="w-5 h-5" />
      <span className={isActive ? "text-white" : "text-black"}>{label}</span>
    </button>
  );
};

export default FloatingBtn;
