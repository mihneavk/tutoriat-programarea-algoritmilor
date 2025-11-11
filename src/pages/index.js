import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout
      title="Tutoriat Programarea Algoritmilor"
      description="Materiale, PDF-uri și resurse pentru Programarea Algoritmilor"
    >
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            color: 'var(--ifm-heading-color)',
          }}
        >
          Tutoriat Programarea Algoritmilor
        </h1>

        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--ifm-color-emphasis-700)',
            marginBottom: '3rem',
          }}
        >
          Materiale și resurse pentru aprofundarea algoritmicii
        </p>

        {/* Card Materiale */}
        <div
          style={{
            background: 'var(--ifm-background-surface-color)',
            border: '1px solid var(--ifm-color-emphasis-200)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            width: '100%',
            maxWidth: '500px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            marginBottom: '2rem',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
          }}
        >
          <h2 style={{ marginBottom: '1rem' }}>📘 Materiale</h2>
          <a
            href={useBaseUrl('materiale/tutoriat1.pdf')}
            target="_blank"
            className="button button--primary"
            style={{ textDecoration: 'none', fontWeight: 'bold' }}
          >
            Deschide Tutoriatul 1
          </a>
		  <a
            href={useBaseUrl('materiale/tutoriat3.pdf')}
            target="_blank"
            className="button button--primary"
            style={{ textDecoration: 'none', fontWeight: 'bold' }}
          >
            Deschide Tutoriatul 3
          </a>
        </div>

        {/* Card Resurse */}
        <div
          style={{
            background: 'var(--ifm-background-surface-color)',
            border: '1px solid var(--ifm-color-emphasis-200)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            width: '100%',
            maxWidth: '500px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)';
          }}
        >
          {/* Am schimbat titlul și emoji-ul */}
          <h2 style={{ marginBottom: '1.5rem' }}>📚 Resurse</h2>
          
          {/* Am adăugat un container pentru butoane */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href="https://github.com/DariusBuhai/FMI-Unibuc/tree/main/Year%20I/Semester%201/PA"
              target="_blank"
              className="button button--secondary" // Buton stil secundar
              style={{ textDecoration: 'none', fontWeight: 'bold' }}
            >
              Materiale clasă
            </a>
            <a
              href="https://github.com/andrachiritoiu/Tutoriat-Proramarea-Algoritmilor/tree/main"
              target="_blank"
              className="button button--secondary" // Buton stil secundar
              style={{ textDecoration: 'none', fontWeight: 'bold' }}
            >
              Materiale tutoriat
            </a>
          </div>
        </div>

        {/* Footer cu link GitHub */}
        <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-400)' }}>
          © 2025 Gyorgy Mihnea –{' '}
          <a
            href="https://github.com/Mihnea17turbo"
            target="_blank"
            style={{ color: 'var(--ifm-link-color)', textDecoration: 'underline' }}
          >
            GitHub
          </a>
        </footer>
      </main>
    </Layout>
  );
}