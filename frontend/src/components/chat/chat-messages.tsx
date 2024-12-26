import { Message } from '@/types/chat';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessagesProps {
  messages: Message[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="flex-1 overflow-y-auto space-y-4 p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={cn(
            'flex items-start gap-3 max-w-[80%]',
            message.role === 'user' && 'ml-auto flex-row-reverse'
          )}
        >
          <div className={cn(
            'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border shadow',
            message.role === 'assistant' ? 'bg-primary text-primary-foreground' : 'bg-muted'
          )}>
            {message.role === 'assistant' ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
          </div>
          <div className={cn(
            'rounded-lg px-4 py-2 shadow-sm',
            message.role === 'assistant' ? 'bg-muted' : 'bg-primary text-primary-foreground'
          )}>
            <p className="text-sm">{message.content}</p>
            <time className="text-[10px] text-muted-foreground mt-1 block">
              {new Date(message.timestamp).toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}
            </time>
          </div>
        </div>
      ))}
    </div>
  );
}