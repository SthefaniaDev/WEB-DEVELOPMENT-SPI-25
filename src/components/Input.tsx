type InputSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function input({ value, onChange, placeholder }: InputSearchProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Digite para buscar..."}
      style={{ //estilização
        padding: '8px 12px',
        fontSize: '16px',
        width: '300px',
        marginBottom: '20px',
      }}
    />
  );
}
