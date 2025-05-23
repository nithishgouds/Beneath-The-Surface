import React, { useState } from 'react';

function Tests() {
  const [selectedTest, setSelectedTest] = useState('test-1');
  const [darkMode, setDarkMode] = useState(true); // Toggle for light/dark mode

  const acceptableLimits = { turbidity: 1, hardness: 200, alkalinity: 200 };
  const permissibleLimits = { turbidity: 5, hardness: 600, alkalinity: 600 };

  const locations = [
    { name: "Abheri", pH: 7.27, turbidity: 0.22, hardness: 65, alkalinity: 100, acidity: 20 },
    { name: "Malhar", pH: 7.15, turbidity: 0.81, hardness: 150, alkalinity: 125, acidity: 15 },
    { name: "AB-1", pH: 7.18, turbidity: 1.05, hardness: 150, alkalinity: 150, acidity: 15 },
    { name: "Yerpedu", pH: 6.68, turbidity: 0.91, hardness: 400, alkalinity: 350, acidity: 40 },
    { name: "Pond 1", pH: 7.31, turbidity: 16.2, hardness: 152.5, alkalinity: 180, acidity: 15 },
    { name: "Bhairav", pH: 7.23, turbidity: 0.24, hardness: 65, alkalinity: 100, acidity: 15 },
    { name: "LHC", pH: 7.14, turbidity: 0.53, hardness: 150, alkalinity: 175, acidity: 20 },
    { name: "Pond 2", pH: 7.27, turbidity: 6.35, hardness: 102.5, alkalinity: 160, acidity: 15 },
    { name: "Des", pH: 7.08, turbidity: 0.8, hardness: 147.5, alkalinity: 150, acidity: 15 },
    { name: "Ground Water", pH: 7.05, turbidity: 2.82, hardness: 160, alkalinity: 200, acidity: 15 }
  ];

  const testOptions = [
    { id: 'test-1', name: 'Hardness', key: 'hardness', unit: 'mg/L as CaCO₃', description: 'Measures the concentration of dissolved calcium and magnesium in water, indicating water hardness.' },
    { id: 'test-2', name: 'pH Level', key: 'pH', unit: '', description: 'Determines the acidity or alkalinity of water, with a neutral value of 7.' },
    { id: 'test-3', name: 'Turbidity', key: 'turbidity', unit: 'NTU', description: 'Measures the cloudiness of water caused by suspended particles, indicating water clarity.' },
    { id: 'test-4', name: 'Alkalinity', key: 'alkalinity', unit: 'mg/L as CaCO₃', description: 'Indicates the ability of water to neutralize acids, helping maintain stable pH levels.' },
    { id: 'test-5', name: 'Acidity', key: 'acidity', unit: 'mg/L as CaCO₃', description: 'Measures the amount of acid present in the water, affecting corrosiveness and taste.' }
  ];

  const selectedTestObj = testOptions.find(test => test.id === selectedTest) || testOptions[0];
  const showLimits = ['hardness', 'alkalinity', 'turbidity'].includes(selectedTestObj.key);

  return (
    <div className={`min-h-[calc(100vh-4.15rem)] h-[calc(100vh-4.15rem)] flex overflow-hidden font-sans`}>
      
      {/* Left Panel */}
      <div className={`w-1/3 p-8 border-r border-gray-200 flex flex-col ${darkMode ? 'bg-gradient-to-br from-black via-gray-900 to-black' : 'bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900'}`}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-6 px-4 py-2 text-sm font-medium rounded-lg bg-white text-black hover:bg-gray-100 self-start"
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>

        <h1 className={`text-5xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-white'}`}>Tests</h1>
        
        <label htmlFor="test-type" className="block text-2xl font-medium mb-4 text-white">
          Select Test Type
        </label>
        
        {/* Stylish Dropdown */}
        <select
          id="test-type"
          value={selectedTest}
          onChange={(e) => setSelectedTest(e.target.value)}
          className="mt-1 block w-full px-4 py-2 bg-white text-gray-900 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          {testOptions.map((option) => (
            <option key={option.id} value={option.id} className="hover:bg-gray-200 transition-all">
              {option.name}
            </option>
          ))}
        </select>

        {showLimits && (
          <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20">
            <h3 className="text-lg font-semibold text-white mb-3">Parameter Limits</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-200">Acceptable Limit:</span>
                <span className="text-white font-medium">
                  {acceptableLimits[selectedTestObj.key]} {selectedTestObj.unit}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-200">Permissible Limit:</span>
                <span className="text-white font-medium">
                  {permissibleLimits[selectedTestObj.key]} {selectedTestObj.unit}
                </span>
              </div>
            </div>
          </div>
        )}
        
        <label htmlFor="description" className="block text-2xl font-medium mb-4 text-white mt-6">
          Test Description
        </label>
        <textarea
          id="description"
          value={selectedTestObj.description}
          rows={6}
          readOnly
          className="block w-full text-white rounded-md border-gray-300 bg-white bg-opacity-10 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm overflow-y-auto resize-none p-4"
        />
      </div>

      {/* Right Panel */}
      <div className={`${darkMode ? 'bg-gradient-to-br from-black via-gray-900 to-black text-white' : 'bg-gray-50 text-gray-900'} w-2/3 p-8 overflow-auto`}>
        <div className={`rounded-lg shadow-lg overflow-hidden ${darkMode ? 'bg-black bg-opacity-60' : 'bg-white'}`}>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-500'}`}>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className={darkMode ? 'divide-y divide-gray-700' : 'divide-y divide-gray-200'}>
              {locations.map((row, index) => (
                <tr key={index} className={`${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'} transition-all`}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{row.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {row[selectedTestObj.key]} {selectedTestObj.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tests;
