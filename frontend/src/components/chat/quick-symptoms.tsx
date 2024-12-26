'use client';

import { Button } from '@/components/ui/button';

interface QuickSymptomsProps {
  onSelect: (symptom: string) => void;
}

const SYMPTOMS = ['頭痛', '発熱', '咳', '疲労感', '吐き気'];

export function QuickSymptoms({ onSelect }: QuickSymptomsProps) {
  return (
    <div className="p-4 border-t flex gap-2 flex-wrap">
      {SYMPTOMS.map((symptom) => (
        <Button
          key={symptom}
          variant="outline"
          size="sm"
          onClick={() => onSelect(symptom)}
        >
          {symptom}
        </Button>
      ))}
    </div>
  );
}