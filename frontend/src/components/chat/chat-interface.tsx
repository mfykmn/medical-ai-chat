'use client';

import { useState } from 'react';
import { ChatHeader } from './chat-header';
import { ChatMessages } from './chat-messages';
import { ChatInput } from './chat-input';
import { QuickSymptoms } from './quick-symptoms';
import { SummaryDialog } from './summary-dialog';
import { Message } from '@/types/chat';

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: 'こんにちは！AIメディカルアシスタントです。症状についてお話しください。症状の評価をお手伝いさせていただきます。',
  timestamp: new Date().toISOString(),
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [showSummary, setShowSummary] = useState(false);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
  };

  const handleCreateSummary = () => {
    setShowSummary(true);
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <ChatHeader onCreateSummary={handleCreateSummary} onReset={handleReset} />
      <ChatMessages messages={messages} />
      <QuickSymptoms onSelect={handleSendMessage} />
      <ChatInput onSend={handleSendMessage} />
      <SummaryDialog 
        open={showSummary}
        onOpenChange={setShowSummary}
        messages={messages}
      />
    </div>
  );
}