import { ChatInterface } from './components/chat/chat-interface'
import { SettingsPanel } from './components/settings/settings-panel'

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          <ChatInterface />
        </div>
        <aside className="w-80 border-l bg-white">
          <SettingsPanel />
        </aside>
      </div>
    </div>
  )
}

export default App
