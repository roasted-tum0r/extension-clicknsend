interface Props {
  value: string;
  onChange: (v: string) => void;
}

export function TextArea({ value, onChange }: Props) {
  return (
    <textarea value={value} onChange={(e) => onChange(e.target.value)} />
  );
}
