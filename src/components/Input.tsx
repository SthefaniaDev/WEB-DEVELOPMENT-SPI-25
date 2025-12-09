import './Input.css'
type InputSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function Input({ value, onChange, placeholder }: InputSearchProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Digite para buscar..."}
      style={{ //estilização
        padding: '10px',
        fontSize: '16px',
        width: '300px',
        marginBottom: '20px',
        
      }}
    />
  );
}
