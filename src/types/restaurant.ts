export interface Monument {
  id: number;
  name: string;
  category: string;
  neighborhood: string;
  description: string;
  rating: number;
  difficulty: string;
  address: string;
  phone: string;
  website: string;
  mapsUrl?: string;
  hours: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
  highlights: string[];
  bestTime: string;
  ticketPrice: string;
}

export interface FilterState {
  category: string;
  neighborhood: string;
  difficulty: string;
  searchTerm: string;
}
