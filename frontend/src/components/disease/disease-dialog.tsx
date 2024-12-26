'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

interface Disease {
  name: string;
  probability: number;
  description: string;
  symptoms: string[];
  recommendations: string[];
}

interface DiseaseDialogProps {
  disease: Disease | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DiseaseDialog({ disease, open, onOpenChange }: DiseaseDialogProps) {
  if (!disease) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center justify-between">
            {disease.name}
            <span className="text-sm text-muted-foreground">
              可能性: {disease.probability}%
            </span>
          </DialogTitle>
        </DialogHeader>
        <Progress value={disease.probability} className="h-2 mt-2" />
        
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold mb-2">概要</h3>
            <p className="text-sm text-muted-foreground">{disease.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">主な症状</h3>
            <ul className="list-disc list-inside space-y-1">
              {disease.symptoms.map((symptom, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">推奨される対応</h3>
            <ul className="list-disc list-inside space-y-1">
              {disease.recommendations.map((rec, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}