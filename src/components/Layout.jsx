import React from 'react';
import { BookOpen, Search, Layers, Settings, HelpCircle, ChevronLeft } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="app-container" style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      {/* Sidebar */}
      <aside className="sidebar" style={{ 
        width: 'var(--sidebar-width)', 
        background: 'var(--bg-secondary)',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 10
      }}>
        <div className="sidebar-header" style={{ 
          padding: '24px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          borderBottom: '1px solid var(--border)' 
        }}>
          <div style={{ 
            background: 'var(--accent)', 
            padding: '8px', 
            borderRadius: '8px',
            boxShadow: '0 0 20px var(--accent-glow)'
          }}>
            <BookOpen size={20} color="white" />
          </div>
          <span style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '-0.03em' }}>
            Scholar<span style={{ color: 'var(--accent)' }}>AI</span>
          </span>
        </div>

        <nav className="sidebar-nav" style={{ padding: '16px', flex: 1 }}>
          <div className="nav-section">
            <p style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px', paddingLeft: '8px', fontWeight: 600 }}>Library</p>
            <NavItem icon={<Search size={18} />} label="Explore" active />
            <NavItem icon={<Layers size={18} />} label="Cross-Reference" />
          </div>
        </nav>

        <div className="sidebar-footer" style={{ padding: '16px', borderTop: '1px solid var(--border)' }}>
          <NavItem icon={<Settings size={18} />} label="Settings" />
          <NavItem icon={<HelpCircle size={18} />} label="Need Help?" />
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)', overflow: 'hidden' }}>
        <header style={{ 
          height: 'var(--header-height)', 
          borderBottom: '1px solid var(--border)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '0 24px',
          background: 'rgba(10, 10, 12, 0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 5
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text-secondary)' }}>Research Assistant</h2>
          </div>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ 
              background: 'var(--bg-tertiary)', 
              padding: '6px 12px', 
              borderRadius: '20px', 
              fontSize: '12px',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--success)' }}></span>
              Model: GPT-4o Optimized
            </div>
          </div>
        </header>

        <div className="content-area" style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          {children}
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }) => (
  <button style={{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 12px',
    borderRadius: '8px',
    background: active ? 'var(--glass)' : 'transparent',
    color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
    marginBottom: '4px',
    fontSize: '14px',
    fontWeight: active ? 500 : 400
  }}>
    <span style={{ color: active ? 'var(--accent)' : 'inherit' }}>{icon}</span>
    {label}
  </button>
);

export default Layout;
