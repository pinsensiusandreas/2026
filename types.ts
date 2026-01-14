
export enum WishStyle {
  MOTIVATIONAL = 'Motivasional',
  POETIC = 'Puitis',
  CHEERFUL = 'Ceria',
  FUTURE_FOCUSED = 'Fokus Masa Depan'
}

export interface Wish {
  id: string;
  text: string;
  style: WishStyle;
  imageUrl?: string;
  videoUrl?: string;
  createdAt: string;
  isPublic: boolean;
  year: number;
  reflection?: string;
}

export interface UserReadingData {
  fullName: string;
  birthDate: string; // YYYY-MM-DD
  focusArea: 'Karier' | 'Cinta' | 'Keuangan' | 'Kesehatan' | 'Kehidupan Umum';
  lifeGoals?: string;
}

export interface ReadingResult {
  title: string;
  message: string;
  shio: string;
  nameMeaning: string;
  motivation: string;
}
