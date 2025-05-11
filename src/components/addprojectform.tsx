import { languages } from "@/util/languages";
import { useState } from "react";
import { montserrat } from "@/util/font";

// Form input types
type InputProps = {
    id: string;
    name: string;
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    min?: string;
    max?: string;
    type?: string;
    className?: string;
};

type CheckboxProps = {
    id: string;
    name: string;
    label: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// Reusable form field components
const FormInput = ({ id, name, label, value, onChange, required, min, max, type = "text", className = "" }: InputProps) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-light tracking-tighter mb-1">{label}</label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            min={min}
            max={max}
            className={`w-full px-3 py-2 bg-transparent border rounded-md dark:border-[#1f1d1d] border-[#d0d0d0] focus:outline-none focus:ring-1 focus:dark:ring-[#495057] focus:ring-[#808080] ${className}`}
            required={required}
        />
    </div>
);

const FormTextarea = ({ id, name, label, value, onChange, required }: InputProps) => (
    <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-light tracking-tighter mb-1">{label}</label>
        <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            rows={3}
            className={`w-full px-3 py-2 bg-transparent border rounded-md dark:border-[#1f1d1d] border-[#d0d0d0] focus:outline-none focus:ring-1 focus:dark:ring-[#495057] focus:ring-[#808080] text-sm font-normal ${montserrat.className}`}
            required={required}
        />
    </div>
);

const FormCheckbox = ({ id, name, label, checked, onChange }: CheckboxProps) => (
    <div className="mb-6">
        <div className="flex items-center">
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                className="h-4 w-4 border-[#d0d0d0] dark:border-[#1f1d1d] rounded bg-transparent"
            />
            <label htmlFor={id} className="ml-2 block text-sm font-light tracking-tighter">
                {label}
            </label>
        </div>
    </div>
);

const LanguageSelector = ({ value, onChange }: {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) => (
    <div className="mb-4">
        <label htmlFor="language" className="block text-sm font-light tracking-tighter mb-1">Language</label>
        <select
            id="language"
            name="language"
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 bg-transparent border rounded-md dark:border-[#1f1d1d] border-[#d0d0d0] focus:outline-none focus:ring-1 focus:dark:ring-[#495057] focus:ring-[#808080]"
            required
        >
            <option value="">Select a language</option>
            {Object.keys(languages).map(lang => (
                <option key={lang} value={lang} className="flex items-center">
                    <div className="flex items-center">
                        <span
                            className="inline-block w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: languages[lang] }}
                        ></span>
                        {lang}
                    </div>
                </option>
            ))}
        </select>
        {value && (
            <div className="flex items-center mt-2">
                <div
                    className="w-3 h-3 rounded-full mr-1"
                    style={{ background: languages[value], border: `solid 3px ${languages[value]}` }}
                />
                <p className='font-light text-sm tracking-tighter'>{value}</p>
            </div>
        )}
    </div>
);

const SubmitButton = () => (
    <div className="flex justify-end">
        <button
            type="submit"
            className="px-4 py-2 rounded-md cursor-pointer select-none dark:ring-[#1f1d1d] dark:hover:ring-[#495057] ring-[#d0d0d0] hover:ring-[#808080] ring-1 font-light text-sm tracking-tighter transition-colors duration-200"
        >
            Add Project
        </button>
    </div>
);

export default function AddProjectForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        language: '',
        hoursSpent: 0,
        rating: 0,
        link: '',
        hidden: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: val
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto mt-2 p-6 rounded-xl dark:ring-[#1f1d1d]
            dark:hover:ring-[#495057] ring-[#d0d0d0] hover:ring-[#808080] cursor-pointer select-none
            dark:text-gray-300 backdrop-blur-sm bg-opacity-5 bg-gradient-to-br from-gray-50 to-gray-100
            dark:from-[#151515] dark:to-[#0a0908]"
        >
            <FormInput
                id="name"
                name="name"
                label="Project Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <FormTextarea
                id="description"
                name="description"
                label="Description"
                value={formData.description}
                onChange={handleChange}
                required
            />

            <LanguageSelector value={formData.language} onChange={handleChange} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormInput
                    id="hoursSpent"
                    name="hoursSpent"
                    label="Hours Spent"
                    value={formData.hoursSpent}
                    onChange={handleChange}
                    type="number"
                    min="0"
                />

                <FormInput
                    id="rating"
                    name="rating"
                    label="Rating (1-10)"
                    value={formData.rating}
                    onChange={handleChange}
                    type="number"
                    min="1"
                    max="10"
                />
            </div>

            <FormInput
                id="link"
                name="link"
                label="Project Link"
                value={formData.link}
                onChange={handleChange}
                type="url"
            />

            <FormCheckbox
                id="hidden"
                name="hidden"
                label="Hide this project"
                checked={formData.hidden}
                onChange={handleChange}
            />

            <SubmitButton />
        </form>
    );
}
