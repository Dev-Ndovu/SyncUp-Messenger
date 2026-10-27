// SyncUp Dynamic Theme & 25 Bubble Styles Engine

export interface ThemeConfig {
  name: string;
  backgroundChatList: string; // Background color/pattern style for Chat List
  backgroundInbox: string;     // Different background for Chat Inbox
  primaryAccent: string;
  secondaryAccent: string;
  textColor: string;
  subTextColor: string;
  headerBackground: string;
}

export const THEMES: Record<string, ThemeConfig> = {
  'Cyberpunk Neon': {
    name: 'Cyberpunk Neon',
    backgroundChatList: '#05050a',
    backgroundInbox: '#0a0a14',
    primaryAccent: '#00f2fe',
    secondaryAccent: '#ff007f',
    textColor: '#ffffff',
    subTextColor: '#8a8ab0',
    headerBackground: '#0d0d1a',
  },
  'Midnight Glass': {
    name: 'Midnight Glass',
    backgroundChatList: '#0b132b',
    backgroundInbox: '#1c2541',
    primaryAccent: '#48cae4',
    secondaryAccent: '#90e0ef',
    textColor: '#ffffff',
    subTextColor: '#adb5bd',
    headerBackground: '#131b31',
  },
  'AMOLED Pure': {
    name: 'AMOLED Pure',
    backgroundChatList: '#000000',
    backgroundInbox: '#050505',
    primaryAccent: '#ffffff',
    secondaryAccent: '#3b82f6',
    textColor: '#ffffff',
    subTextColor: '#71717a',
    headerBackground: '#000000',
  },
  'Sunset Aurora': {
    name: 'Sunset Aurora',
    backgroundChatList: '#2e1065',
    backgroundInbox: '#3b0764',
    primaryAccent: '#f43f5e',
    secondaryAccent: '#fb923c',
    textColor: '#ffffff',
    subTextColor: '#d8b4fe',
    headerBackground: '#26084e',
  },
  'Matrix Code': {
    name: 'Matrix Code',
    backgroundChatList: '#021508',
    backgroundInbox: '#03240d',
    primaryAccent: '#22c55e',
    secondaryAccent: '#10b981',
    textColor: '#e2f8eb',
    subTextColor: '#6ee7b7',
    headerBackground: '#011c0a',
  },
  'Pastel Dream': {
    name: 'Pastel Dream',
    backgroundChatList: '#fdf2f8',
    backgroundInbox: '#fae8ff',
    primaryAccent: '#ec4899',
    secondaryAccent: '#8b5cf6',
    textColor: '#1f2937',
    subTextColor: '#6b7280',
    headerBackground: '#fce7f3',
  },
  'Emerald Luxury': {
    name: 'Emerald Luxury',
    backgroundChatList: '#022c22',
    backgroundInbox: '#064e3b',
    primaryAccent: '#fbbf24',
    secondaryAccent: '#34d399',
    textColor: '#ffffff',
    subTextColor: '#a7f3d0',
    headerBackground: '#02231b',
  },
  'Retro Vaporwave': {
    name: 'Retro Vaporwave',
    backgroundChatList: '#311042',
    backgroundInbox: '#42165c',
    primaryAccent: '#ff71ce',
    secondaryAccent: '#01cdfe',
    textColor: '#ffffff',
    subTextColor: '#b967ff',
    headerBackground: '#280c36',
  },
  'Tokyo Night': {
    name: 'Tokyo Night',
    backgroundChatList: '#1a1b26',
    backgroundInbox: '#24283b',
    primaryAccent: '#7aa2f7',
    secondaryAccent: '#bb9af7',
    textColor: '#c0caf5',
    subTextColor: '#565f89',
    headerBackground: '#16161e',
  },
  'Clean Minimalist': {
    name: 'Clean Minimalist',
    backgroundChatList: '#f8fafc',
    backgroundInbox: '#ffffff',
    primaryAccent: '#2563eb',
    secondaryAccent: '#60a5fa',
    textColor: '#0f172a',
    subTextColor: '#64748b',
    headerBackground: '#f1f5f9',
  },
};

// 25 Custom Message Bubble Styles Definition
export const BUBBLE_STYLES = [
  'Modern Glossy',
  'Frosted Glass',
  'Neon Cyber Glow',
  'Sharp Tech',
  'Classic Rounded',
  'Comic Book Pop',
  'Gradient Pulse',
  'Minimal Line',
  'Chalk Slate',
  'Carbon Fiber',
  'Soft Clay',
  'Retro 8-Bit',
  'Liquid Mercury',
  'Parchment Gold',
  'Holographic',
  'Minimal Pill',
  'Origami Fold',
  'Shadow Depth',
  'Outline Glow',
  'Pastel Velvet',
  'Terminal Code',
  'Luxury Silk',
  'Watercolor',
  'Sticker Outline',
  'Compact Square',
];
