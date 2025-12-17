import React from 'react';
import { useLocation } from '@docusaurus/router';
import { authClient } from '../lib/auth-client';
// We use Docusaurus standard "Admonition" styles for a pro look
import Admonition from '@theme/Admonition'; 

export default function UrduTranslationButton() {
  const { data: session } = authClient.useSession();
  const location = useLocation();
  const isUrdu = location.pathname.startsWith('/ur/');

  // Logic to toggle URL
  const handleTranslate = () => {
    const currentPath = location.pathname;
    if (isUrdu) {
      window.location.href = currentPath.replace('/ur/', '/');
    } else {
      window.location.href = '/ur' + currentPath;
    }
  };

  // 1. HIDDEN if not logged in (Strict Requirement)
  if (!session) {
    return null;
  }

  // 2. The "Pro" UI Component
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Admonition 
        type="tip" 
        icon="🌐" 
        title={isUrdu ? "English Version Available" : "Urdu Translation Available (Bonus)"}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ margin: 0 }}>
            {isUrdu 
              ? "You are reading the Urdu translation. Switch back to English?" 
              : "As a logged-in user, you can read this chapter in Urdu."}
          </p>
          <button
            onClick={handleTranslate}
            className="button button--primary button--sm"
            style={{ marginLeft: '1rem', whiteSpace: 'nowrap' }}
          >
            {isUrdu ? '🇺🇸 Switch to English' : '🇵🇰 Translate to Urdu'}
          </button>
        </div>
      </Admonition>
    </div>
  );
}