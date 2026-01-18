interface TemplateSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TemplateSelect({ value, onChange }: TemplateSelectProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-300 mb-1">
        Template
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <option value="">Select a template...</option>
        <option value="job_application">Job Application</option>
        <option value="follow_up">Follow Up</option>
        <option value="cold_outreach">Cold Outreach</option>
        <option value="custom">Custom</option>
      </select>
    </div>
  );
}
