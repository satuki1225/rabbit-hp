export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}
