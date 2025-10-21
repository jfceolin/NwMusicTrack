import { Song, CollectedData, Translations, ExportData, SupportedLanguage, LanguageMap } from './types';

// Variáveis globais
let songs: Song[] = [];
let collected: CollectedData = {};
let currentLanguage: SupportedLanguage = 'pt';
let translations: Translations = {
  ui: {
    title: "🎶 New World Music Tracker",
    subtitle: "Marque as partes que você coletou. Um instrumento só conta se todas as partes forem coletadas.",
    partsCollected: "Partes Coletadas:",
    completeInstruments: "Instrumentos Completos:",
    completeSongs: "Músicas Completas:",
    resetProgress: "Resetar Progresso",
    exportProgress: "Exportar Progresso",
    importProgress: "Importar Progresso",
    resetConfirm: "Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.",
    resetSuccess: "Progresso resetado com sucesso!",
    exportSuccess: "Progresso exportado com sucesso!",
    importConfirm: "Tem certeza que deseja importar este arquivo? Os dados atuais serão substituídos.",
    importSuccess: "Progresso importado com sucesso!",
    importError: "Erro ao importar arquivo. Verifique se é um arquivo JSON válido."
  }
};

// Função para carregar dados do localStorage com validação
function loadFromLocalStorage(): void {
  try {
    const storedData = localStorage.getItem('collectedData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData && typeof parsedData === 'object') {
        collected = parsedData;
      }
    }
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    collected = {};
  }
  
  try {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage && (storedLanguage === 'pt' || storedLanguage === 'en' || storedLanguage === 'es')) {
      currentLanguage = storedLanguage as SupportedLanguage;
    } else {
      currentLanguage = detectBrowserLanguage();
    }
  } catch (error) {
    console.error('Error loading language from localStorage:', error);
    currentLanguage = detectBrowserLanguage();
  }
}

// Inicializar dados
loadFromLocalStorage();

// Função para testar localStorage
function testLocalStorage(): boolean {
  try {
    const testKey = 'nw-music-test';
    const testValue = 'test-value';
    
    localStorage.setItem(testKey, testValue);
    const retrieved = localStorage.getItem(testKey);
    localStorage.removeItem(testKey);
    
    if (retrieved === testValue) {
      console.log('✅ localStorage está funcionando corretamente');
      return true;
    } else {
      console.error('❌ localStorage não está funcionando corretamente');
      return false;
    }
  } catch (error) {
    console.error('❌ Erro ao testar localStorage:', error);
    return false;
  }
}

function detectBrowserLanguage(): SupportedLanguage {
  // Obter idioma do navegador
  const navigatorWithUserLanguage = navigator as Navigator & { userLanguage?: string };
  const browserLang = navigator.language || navigatorWithUserLanguage.userLanguage || 'pt';
  
  // Mapear idiomas do navegador para nossos códigos
  const languageMap: LanguageMap = {
    'pt': 'pt',      // Português
    'pt-BR': 'pt',   // Português Brasil
    'pt-PT': 'pt',   // Português Portugal
    'en': 'en',      // Inglês
    'en-US': 'en',   // Inglês EUA
    'en-GB': 'en',   // Inglês Reino Unido
    'es': 'es',      // Espanhol
    'es-ES': 'es',   // Espanhol Espanha
    'es-MX': 'es',   // Espanhol México
    'es-AR': 'es',   // Espanhol Argentina
    'es-CO': 'es',   // Espanhol Colômbia
    'es-PE': 'es',   // Espanhol Peru
    'es-VE': 'es',   // Espanhol Venezuela
    'es-CL': 'es',   // Espanhol Chile
    'es-UY': 'es',   // Espanhol Uruguai
    'es-PY': 'es',   // Espanhol Paraguai
    'es-BO': 'es',   // Espanhol Bolívia
    'es-EC': 'es',   // Espanhol Equador
    'es-GT': 'es',   // Espanhol Guatemala
    'es-HN': 'es',   // Espanhol Honduras
    'es-SV': 'es',   // Espanhol El Salvador
    'es-NI': 'es',   // Espanhol Nicarágua
    'es-CR': 'es',   // Espanhol Costa Rica
    'es-PA': 'es',   // Espanhol Panamá
    'es-DO': 'es',   // Espanhol República Dominicana
    'es-CU': 'es',   // Espanhol Cuba
    'es-PR': 'es'    // Espanhol Porto Rico
  };
  
  // Verificar se o idioma completo está mapeado
  if (languageMap[browserLang]) {
    return languageMap[browserLang];
  }
  
  // Verificar apenas o código principal (ex: 'pt' de 'pt-BR')
  const primaryLang = browserLang.split('-')[0];
  if (languageMap[primaryLang]) {
    return languageMap[primaryLang];
  }
  
  // Fallback para português se não encontrar correspondência
  return 'pt';
}

// Função não utilizada atualmente - reservada para futuras funcionalidades
// function detectLocationLanguage(): SupportedLanguage {
//   // Tentar detectar idioma baseado na localização geográfica
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (_position) => {
//         // Aqui poderíamos usar APIs de geolocalização reversa
//         // mas por simplicidade, vamos usar apenas o idioma do navegador
//         console.log('Localização detectada, mas usando idioma do navegador');
//       },
//       (error) => {
//         console.log('Erro ao detectar localização:', error);
//       }
//     );
//   }
//   
//   // Por enquanto, retornamos o idioma detectado do navegador
//   return detectBrowserLanguage();
// }

async function loadTranslations(): Promise<void> {
  try {
    console.log('Loading translations for language:', currentLanguage);
    const response = await fetch(`data/translations/${currentLanguage}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Validar estrutura das traduções
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid translation data structure');
    }
    
    translations = data;
    console.log('Translations loaded:', translations);
    updateUITexts();
  } catch (error) {
    console.error('Error loading translations:', error);
    // Fallback to Portuguese if unable to load
    translations = {
      ui: {
        title: "New World Music Tracker",
        subtitle: "Marque as partes que você coletou. Um instrumento só conta se todas as partes forem coletadas.",
        partsCollected: "Partes Coletadas:",
        completeInstruments: "Instrumentos Completos:",
        completeSongs: "Músicas Completas:",
        resetProgress: "Resetar Progresso",
        exportProgress: "Exportar Progresso",
        importProgress: "Importar Progresso",
        resetConfirm: "Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.",
        resetSuccess: "Progresso resetado com sucesso!",
        exportSuccess: "Progresso exportado com sucesso!",
        importConfirm: "Tem certeza que deseja importar este arquivo? Os dados atuais serão substituídos.",
        importSuccess: "Progresso importado com sucesso!",
        importError: "Erro ao importar arquivo. Verifique se é um arquivo JSON válido."
      }
    };
    updateUITexts();
  }
}

function updateUITexts(): void {
  if (translations.ui) {
    const pageTitle = document.getElementById('pageTitle');
    const pageSubtitle = document.getElementById('pageSubtitle');
    const partsLabel = document.getElementById('partsLabel');
    const instrumentsLabel = document.getElementById('instrumentsLabel');
    const songsLabel = document.getElementById('songsLabel');
    const resetBtn = document.getElementById('resetBtn');
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');

    if (pageTitle) pageTitle.textContent = translations.ui.title;
    if (pageSubtitle) pageSubtitle.textContent = translations.ui.subtitle;
    if (partsLabel) partsLabel.textContent = translations.ui.partsCollected;
    if (instrumentsLabel) instrumentsLabel.textContent = translations.ui.completeInstruments;
    if (songsLabel) songsLabel.textContent = translations.ui.completeSongs;
    if (resetBtn) resetBtn.textContent = translations.ui.resetProgress;
    if (exportBtn) exportBtn.textContent = translations.ui.exportProgress;
    if (importBtn) importBtn.textContent = translations.ui.importProgress;
  }
}

async function loadSongs(): Promise<void> {
  try {
    console.log('Loading songs...');
    console.log('Current language:', currentLanguage);
    
    // Load translations first
    await loadTranslations();
    console.log('Translations loaded:', translations);
    
    // Load songs data
    console.log('Loading songs data...');
    const response = await fetch('data/songs.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Validar estrutura dos dados
    if (!data || !Array.isArray(data.songs)) {
      throw new Error('Invalid songs data structure');
    }
    
    songs = data.songs;
    console.log('Songs loaded:', songs.length);
    console.log('First song:', songs[0]);
    
    renderSongs();
    updateProgress();
    
  } catch (error) {
    console.error('Error loading songs:', error);
    const container = document.getElementById('songsContainer');
    if (container) {
      container.innerHTML = '<p>Erro ao carregar músicas. Por favor, tente novamente mais tarde.</p>';
    }
  }
}

function getSongName(songId: string): string {
  return translations.songs && translations.songs[songId] ? translations.songs[songId] : songId;
}

function getInstrumentName(instrumentName: string): string {
  return translations.instruments && translations.instruments[instrumentName] ? translations.instruments[instrumentName] : instrumentName;
}

function getPartName(partName: string): string {
  return translations.parts && translations.parts[partName] ? translations.parts[partName] : partName;
}

// Função para verificar se uma música está completa
function isSongComplete(song: Song): boolean {
  if (!song || !song.instruments || song.instruments.length === 0) {
    return false;
  }

  // Verificar se todos os instrumentos da música estão completos
  for (const instrument of song.instruments) {
    if (!isInstrumentComplete(song.id, instrument)) {
      return false;
    }
  }
  
  return true;
}

// Função para verificar se um instrumento está completo
function isInstrumentComplete(songId: string, instrument: { name: string; parts: string[] }): boolean {
  if (!instrument || !instrument.parts || instrument.parts.length === 0) {
    return false;
  }

  // Verificar se todas as partes do instrumento foram coletadas
  for (const part of instrument.parts) {
    if (!collected[songId] || !collected[songId][instrument.name] || !collected[songId][instrument.name][part]) {
      return false;
    }
  }
  
  return true;
}

function renderSongs(): void {
  const container = document.getElementById('songsContainer');
  if (!container) {
    console.error('Songs container not found');
    return;
  }

  console.log('Renderizando músicas:', songs.length, 'músicas encontradas');
  container.innerHTML = '';

  // Ordenar músicas: incompletas primeiro, completas no final
  const sortedSongs = [...songs].sort((a, b) => {
    const aComplete = isSongComplete(a);
    const bComplete = isSongComplete(b);
    
    // Se uma está completa e outra não, a incompleta vem primeiro
    if (aComplete && !bComplete) return 1;
    if (!aComplete && bComplete) return -1;
    
    // Se ambas têm o mesmo status, manter ordem original
    return 0;
  });

  sortedSongs.forEach(song => {
    const songDiv = document.createElement('div');
    const isComplete = isSongComplete(song);
    songDiv.className = `song ${isComplete ? 'song-complete' : ''}`;
    songDiv.setAttribute('data-song-id', song.id);
    songDiv.innerHTML = `
      <div class="song-header">
        ${song.image ? `<img src="images/${song.image}" alt="${getSongName(song.id)}" class="song-icon">` : ''}
        <h3>${getSongName(song.id)}</h3>
        ${isComplete ? '<span class="complete-indicator">✓</span>' : ''}
      </div>
      <div class="instruments">
        ${song.instruments.map(instrument => `
          <div class="instrument">
            <div class="instrument-header">
              <img src="images/${instrument.image}" alt="${getInstrumentName(instrument.name)}" class="instrument-icon">
              <span class="instrument-name">${getInstrumentName(instrument.name)}</span>
            </div>
            <div class="parts">
              ${instrument.parts.map(part => `
                <label class="part-checkbox">
                  <input type="checkbox" 
                         data-song="${song.id}" 
                         data-instrument="${instrument.name}" 
                         data-part="${part}"
                         ${collected[song.id] && collected[song.id][instrument.name] && collected[song.id][instrument.name][part] ? 'checked' : ''}>
                  <span>${getPartName(part)}</span>
                </label>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Add event listeners to checkboxes
    songDiv.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', handlePartToggle);
    });

    container.appendChild(songDiv);
  });
}

function handlePartToggle(event: Event): void {
  const checkbox = event.target as HTMLInputElement;
  const songId = checkbox.dataset.song;
  const instrumentName = checkbox.dataset.instrument;
  const partName = checkbox.dataset.part;

  // Validar dados
  if (!songId || !instrumentName || !partName) {
    console.error('Invalid data attributes in checkbox');
    return;
  }

  if (!collected[songId]) {
    collected[songId] = {};
  }
  if (!collected[songId][instrumentName]) {
    collected[songId][instrumentName] = {};
  }

  collected[songId][instrumentName][partName] = checkbox.checked;

  try {
    localStorage.setItem('collectedData', JSON.stringify(collected));
    updateProgress();
    
    // Auto-refresh: reorganizar músicas automaticamente
    // Verificar se a música foi completada para aplicar animação especial
    const song = songs.find(s => s.id === songId);
    if (!song) {
      console.error('Song not found:', songId);
      return;
    }
    
    const wasComplete = isSongComplete(song);
    
    // Pequeno delay para permitir que a animação visual seja percebida
    setTimeout(() => {
      const isNowComplete = isSongComplete(song);
      
      // Se a música acabou de ser completada, aplicar animação especial
      if (!wasComplete && isNowComplete) {
        // Adicionar classe temporária para animação de completude
        const songElement = document.querySelector(`[data-song-id="${songId}"]`);
        if (songElement) {
          songElement.classList.add('song-just-completed');
          setTimeout(() => {
            songElement.classList.remove('song-just-completed');
          }, 1000);
        }
      }
      
      renderSongs();
    }, 300);
    
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

function updateProgress(): void {
  let totalParts = 0;
  let collectedParts = 0;
  let completeInstruments = 0;
  let completeSongs = 0;

  songs.forEach(song => {
    let songComplete = true;
    let songInstruments = 0;
    let songCompleteInstruments = 0;

    song.instruments.forEach(instrument => {
      songInstruments++;
      let instrumentComplete = true;
      
      instrument.parts.forEach(part => {
        totalParts++;
        if (collected[song.id] && collected[song.id][instrument.name] && collected[song.id][instrument.name][part]) {
          collectedParts++;
        } else {
          instrumentComplete = false;
        }
      });

      if (instrumentComplete) {
        completeInstruments++;
        songCompleteInstruments++;
      } else {
        songComplete = false;
      }
    });

    if (songComplete && songInstruments > 0) {
      completeSongs++;
    }
  });

  const partsCount = document.getElementById('partsCount');
  const instrumentsCount = document.getElementById('instrumentsCount');
  const songsCount = document.getElementById('songsCount');

  if (partsCount) partsCount.textContent = `${collectedParts}/${totalParts}`;
  if (instrumentsCount) instrumentsCount.textContent = completeInstruments.toString();
  if (songsCount) songsCount.textContent = completeSongs.toString();
}

// Função para fazer scroll até as músicas completas
function scrollToCompleteSongs(): void {
  const completeSongs = document.querySelectorAll('.song-complete');
  if (completeSongs.length > 0) {
    // Scroll suave até a primeira música completa
    completeSongs[0].scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  } else {
    // Se não há músicas completas, mostrar mensagem
    alert(translations.ui.noCompleteSongs || 'Nenhuma música completa encontrada.');
  }
}

// Função para voltar ao topo
function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Função para controlar a visibilidade do botão de voltar ao topo
function toggleBackToTopButton(): void {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (window.scrollY > 300) {
    backToTopBtn?.classList.add('show');
  } else {
    backToTopBtn?.classList.remove('show');
  }
}

function resetProgress(): void {
  if (confirm(translations.ui.resetConfirm)) {
    try {
      collected = {};
      localStorage.removeItem('collectedData');
      renderSongs();
      updateProgress();
      alert(translations.ui.resetSuccess);
    } catch (error) {
      console.error('Error resetting progress:', error);
      alert('Erro ao resetar progresso. Tente novamente.');
    }
  }
}

function exportProgress(): void {
  try {
    // Criar objeto com metadados e dados
    const exportData: ExportData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      language: currentLanguage,
      appName: 'New World Music Tracker',
      progress: collected
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `new-world-music-progress-${new Date().toISOString().split('T')[0]}.json`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    alert(translations.ui.exportSuccess);
  } catch (error) {
    console.error('Error exporting progress:', error);
    alert('Erro ao exportar progresso. Tente novamente.');
  }
}

function importProgress(): void {
  const fileInput = document.getElementById('importFile') as HTMLInputElement;
  if (!fileInput) {
    console.error('Import file input not found');
    return;
  }
  
  fileInput.click();
}

function handleFileImport(event: Event): void {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;
  
  // Verificar se é um arquivo JSON
  if (!file.name.toLowerCase().endsWith('.json')) {
    alert(translations.ui.importError);
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target?.result as string);
      
      // Validar estrutura dos dados importados
      if (!importedData || typeof importedData !== 'object') {
        throw new Error('Invalid data structure');
      }
      
      // Extrair dados de progresso (compatibilidade com formato antigo e novo)
      let progressData: CollectedData;
      if (importedData.progress) {
        // Formato novo com metadados
        progressData = importedData.progress;
        console.log('Importing from new format:', {
          version: importedData.version,
          exportDate: importedData.exportDate,
          language: importedData.language
        });
      } else {
        // Formato antigo (dados diretos)
        progressData = importedData;
        console.log('Importing from legacy format');
      }
      
      // Validar se os dados de progresso são válidos
      if (!progressData || typeof progressData !== 'object') {
        throw new Error('Invalid progress data');
      }
      
      // Confirmar importação
      if (confirm(translations.ui.importConfirm)) {
        // Substituir dados atuais
        collected = progressData;
        
        // Salvar no localStorage
        try {
          localStorage.setItem('collectedData', JSON.stringify(collected));
          
          // Atualizar interface
          renderSongs();
          updateProgress();
          
          alert(translations.ui.importSuccess);
        } catch (error) {
          console.error('Error saving imported data:', error);
          alert('Erro ao salvar dados importados. Tente novamente.');
        }
      }
    } catch (error) {
      console.error('Error parsing imported file:', error);
      alert(translations.ui.importError);
    }
  };
  
  reader.onerror = function() {
    console.error('Error reading file');
    alert(translations.ui.importError);
  };
  
  reader.readAsText(file);
  
  // Limpar input para permitir importar o mesmo arquivo novamente
  target.value = '';
}

function changeLanguage(lang: SupportedLanguage): void {
  currentLanguage = lang;
  localStorage.setItem('selectedLanguage', lang);
  updateActiveFlag();
  loadSongs();
}

function updateActiveFlag(): void {
  // Remove active class from all flags
  document.querySelectorAll('.flag-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Add active class to current language flag
  const activeFlag = document.getElementById(`flag-${currentLanguage}`);
  if (activeFlag) {
    activeFlag.classList.add('active');
  }
}

// Language detection is now silent - no notification shown

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  // Testar localStorage
  testLocalStorage();
  
  loadSongs();
  
  // Add event listeners
  const resetBtn = document.getElementById('resetBtn');
  const exportBtn = document.getElementById('exportBtn');
  const importBtn = document.getElementById('importBtn');
  const importFile = document.getElementById('importFile');
  const songsCount = document.getElementById('songsCount');
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (resetBtn) resetBtn.addEventListener('click', resetProgress);
  if (exportBtn) exportBtn.addEventListener('click', exportProgress);
  if (importBtn) importBtn.addEventListener('click', importProgress);
  if (importFile) importFile.addEventListener('change', handleFileImport);
  
  // Event listener para scroll até músicas completas
  if (songsCount) songsCount.addEventListener('click', scrollToCompleteSongs);
  
  // Event listener para botão de voltar ao topo
  if (backToTopBtn) backToTopBtn.addEventListener('click', scrollToTop);
  
  // Event listener para controlar visibilidade do botão de voltar ao topo
  window.addEventListener('scroll', toggleBackToTopButton);
  
  // Language selector - flag buttons
  const flagButtons = document.querySelectorAll('.flag-btn');
  flagButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const lang = target.dataset.lang as SupportedLanguage;
      if (lang && (lang === 'pt' || lang === 'en' || lang === 'es')) {
        changeLanguage(lang);
      }
    });
  });
  
  // Set active flag on load
  updateActiveFlag();
});
