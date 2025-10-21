// Tipos para a aplicação New World Music Tracker

export interface Song {
  id: string;
  image?: string;
  instruments: Instrument[];
}

export interface Instrument {
  name: string;
  image: string;
  parts: string[];
}

export interface CollectedData {
  [songId: string]: {
    [instrumentName: string]: {
      [partName: string]: boolean;
    };
  };
}

export interface Translations {
  ui: {
    title: string;
    subtitle: string;
    partsCollected: string;
    completeInstruments: string;
    completeSongs: string;
    resetProgress: string;
    exportProgress: string;
    importProgress: string;
    resetConfirm: string;
    resetSuccess: string;
    exportSuccess: string;
    importConfirm: string;
    importSuccess: string;
    importError: string;
    noCompleteSongs?: string;
  };
  songs?: { [songId: string]: string };
  instruments?: { [instrumentName: string]: string };
  parts?: { [partName: string]: string };
}

export interface ExportData {
  version: string;
  exportDate: string;
  language: string;
  appName: string;
  progress: CollectedData;
}

export type SupportedLanguage = 'pt' | 'en' | 'es';

export interface LanguageMap {
  [key: string]: SupportedLanguage;
}
