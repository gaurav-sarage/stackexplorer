import { categoryData as catData7 } from '@/data/ai-ml-development';
import { categoryData as catData3 } from '@/data/cross-platform-development';
import { categoryData as catData4 } from '@/data/desktop-development';
import { categoryData as catData5 } from '@/data/game-development';
import { categoryData as catData2 } from '@/data/mobile-development';
import { categoryData as catData1 } from '@/data/web-development';
import { Category } from '@/types';

export function getCategories(): any[] {
  const data = {
    catData1,
    catData2,
    catData3,
    catData4,
    catData5,
    catData7,
  };
  const output = Object.values(data);
  return output;
}
