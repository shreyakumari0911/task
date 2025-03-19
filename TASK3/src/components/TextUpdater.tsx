import { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Text Updater</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="mt-4 p-3 bg-gray-100 rounded-md">
        <p className="font-medium">Preview:</p>
        <p className="mt-1">{text || 'Text will appear here...'}</p>
      </div>
    </div>
  );
};

export default TextUpdater; 