'use client';

import { useState } from 'react';
import { WelcomeScreen } from '@/components/welcome-screen';
import { Header } from '@/components/header';
import { ChatInterface } from '@/components/chat/chat-interface';
import { DiseaseList } from '@/components/disease/disease-list';

export default function Home() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <WelcomeScreen onStart={() => setStarted(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-[1fr,320px] gap-6">
          <div className="min-h-[calc(100vh-5rem)] bg-white rounded-lg shadow-sm">
            <ChatInterface />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <DiseaseList />
          </div>
        </div>
      </main>
    </div>
  );
}