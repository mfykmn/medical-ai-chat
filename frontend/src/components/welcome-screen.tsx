'use client';

import { Heart, MessageSquarePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="max-w-lg w-full p-8 space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">AIメディカル相談</h1>
          <p className="text-gray-600">
            AIを活用した医療相談サービスへようこそ。症状についてお気軽にご相談ください。
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
          <p>
            ※このサービスは医療アドバイスの参考としてご利用ください。
            緊急を要する場合や重症と思われる場合は、直ちに医療機関を受診してください。
          </p>
        </div>

        <Button
          onClick={onStart}
          size="lg"
          className="w-full"
        >
          <MessageSquarePlus className="mr-2 h-5 w-5" />
          相談を始める
        </Button>
      </Card>
    </div>
  );
}