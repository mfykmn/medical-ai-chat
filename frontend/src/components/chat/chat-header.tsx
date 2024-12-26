'use client';

import { useState } from 'react';
import { FileText, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResetDialog } from './reset-dialog';

interface ChatHeaderProps {
  onCreateSummary: () => void;
  onReset: () => void;
}

export function ChatHeader({ onCreateSummary, onReset }: ChatHeaderProps) {
  const [showResetDialog, setShowResetDialog] = useState(false);

  const handleReset = () => {
    onReset();
    setShowResetDialog(false);
  };

  return (
    <>
      <div className="p-4 border-b flex justify-between items-center bg-white">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowResetDialog(true)}
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          onClick={onCreateSummary}
          className="flex items-center gap-2"
        >
          <FileText className="h-4 w-4" />
          サマリー作成
        </Button>
      </div>

      <ResetDialog
        open={showResetDialog}
        onOpenChange={setShowResetDialog}
        onConfirm={handleReset}
      />
    </>
  );
}