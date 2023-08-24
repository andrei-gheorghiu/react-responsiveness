import * as React from 'react'
import './App.css'
import { useResponsiveness, ResponsivenessProvider } from '../lib'

const WithResponsiveness = () => (
  <ResponsivenessProvider>
    <App />
  </ResponsivenessProvider>
)
function App() {
  const { currentInterval, isMin, matches } = useResponsiveness()
  return (
    <div className="App">
      {isMin('lg') && <Sidebar />}
      <TestComponent />
      <div>
        {matches.sm.max && (
          <h4>
            I&apos;m rendered on <code>sm</code> and below
          </h4>
        )}
        {matches.md.only && (
          <h4>
            I&apos;m only rendered on <code>md</code>
          </h4>
        )}
        {matches.lg.min && (
          <h4>
            I&apos;m rendered on <code>lg</code> and above
          </h4>
        )}

        <h4>
          Current:
          <code>{currentInterval}</code>
        </h4>
      </div>
    </div>
  )
}

function TestComponent() {
  const { matches } = useResponsiveness()
  return <pre>{JSON.stringify(matches, null, 2)}</pre>
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h4>Sidebar</h4>
      <p>
        Visible on: <code>isMin(&apos;lg&apos;)</code>
      </p>
    </div>
  )
}

export default WithResponsiveness
