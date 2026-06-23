import React from 'react'
import BackgroundScene from '@/components/ui/aurora-section-hero'
import './index.css'

const App: React.FC = () => {
  return (
    <>
      <BackgroundScene beamCount={60} />

      <div className="content-wrapper">
        <header className="main-header">
          <div className="logo">DATASCAPE</div>
          <nav>
            <a href="#">Solutions</a>
            <a href="#">Platform</a>
            <a href="#">Company</a>
            <a href="#">Contact</a>
          </nav>
        </header>

        <main className="hero-section">
          <h1>The Future of Data</h1>
          <p>
            Unlock unparalleled insights and drive innovation with our next-generation
            data intelligence platform.
          </p>
          <button className="cta-button">Request a Demo</button>
        </main>
      </div>
    </>
  )
}

export default App
