import React from 'react'
import { Button } from '../ui/button'
import { Settings } from 'lucide-react'

export const SettingsPanel = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Settings</h2>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-4">
        {/* Model Selection */}
        <div>
          <label className="block text-sm font-medium mb-1">Model</label>
          <select className="w-full rounded-md border p-2">
            <option value="gpt-4">GPT-4</option>
            <option value="gpt-3.5">GPT-3.5</option>
            <option value="claude">Claude</option>
          </select>
        </div>

        {/* API Configuration */}
        <div>
          <label className="block text-sm font-medium mb-1">API Key</label>
          <input
            type="password"
            className="w-full rounded-md border p-2"
            placeholder="Enter API key"
          />
        </div>
      </div>
    </div>
  )
}
