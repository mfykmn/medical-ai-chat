'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Message } from "@/types/chat";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SummaryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  messages: Message[];
}

export function SummaryDialog({ open, onOpenChange, messages }: SummaryDialogProps) {
  const userMessages = messages.filter(m => m.role === 'user');
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>相談内容のサマリー</DialogTitle>
          <DialogDescription>
            これまでの相談内容をまとめました
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] mt-4">
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">報告された症状</h3>
              <ul className="list-disc list-inside space-y-1">
                {userMessages.map((message, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {message.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}