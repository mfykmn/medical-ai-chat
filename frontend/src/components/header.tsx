import { Heart } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-primary hover:opacity-80">
          <Heart className="w-6 h-6" />
          <span className="font-semibold text-lg">AIメディカル相談</span>
        </Link>
      </div>
    </header>
  );
}