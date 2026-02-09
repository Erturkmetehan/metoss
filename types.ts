export interface City {
  id: string;
  name: string;
  country: 'Bulgaria' | 'Turkey';
  population?: string; // Optional because GeoJSON might not have it
  shortDesc?: string;
  region?: string;
  plateCode?: string; // License plate code (e.g., 34, 06)
  coordinates?: { lat: number; lng: number }; // Optional for polygon based
  details?: {
    cuisine: string;
    climate: string;
    places: string[];
    funFact: string;
  };
}