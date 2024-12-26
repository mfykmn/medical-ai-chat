'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { DiseaseDialog } from './disease-dialog';

const MOCK_DISEASES = [
  {
    name: '風邪',
    probability: 75,
    description: '一般的なウイルス性の上気道感染症です。通常は1週間程度で自然に治癒します。',
    symptoms: [
      '咳や喉の痛み',
      '鼻水や鼻づまり',
      '発熱',
      '全身の倦怠感'
    ],
    recommendations: [
      '十分な休息を取る',
      '水分を多めに摂取する',
      '必要に応じて市販の感冒薬を使用する',
      '症状が悪化する場合は医療機関を受診する'
    ]
  },
  {
    name: '季節性アレルギー',
    probability: 60,
    description: '花粉やハウスダストなどのアレルゲンに対する過敏反応です。',
    symptoms: [
      'くしゃみ',
      '鼻水',
      '目のかゆみ',
      '喉の違和感'
    ],
    recommendations: [
      'マスクの着用',
      '帰宅時の衣服の花粉除去',
      '抗アレルギー薬の使用を検討',
      '症状が重い場合は専門医に相談'
    ]
  }
];

export function DiseaseList() {
  const [selectedDisease, setSelectedDisease] = useState<typeof MOCK_DISEASES[0] | null>(null);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">考えられる病名</h2>
      <div className="space-y-3">
        {MOCK_DISEASES.map((disease) => (
          <button
            key={disease.name}
            className="w-full p-3 rounded-lg border hover:bg-muted/50 transition-colors text-left"
            onClick={() => setSelectedDisease(disease)}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{disease.name}</span>
              <span className="text-sm text-muted-foreground">{disease.probability}%</span>
            </div>
            <Progress value={disease.probability} className="h-2" />
            <div className="flex items-center justify-end mt-2 text-sm text-muted-foreground">
              <span>詳細を見る</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </button>
        ))}
      </div>

      <DiseaseDialog
        disease={selectedDisease}
        open={selectedDisease !== null}
        onOpenChange={(open) => !open && setSelectedDisease(null)}
      />
    </div>
  );
}