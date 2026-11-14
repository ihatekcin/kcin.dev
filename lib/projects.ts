export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export const ALL_PROJECTS: Project[] = [
  {
    title: 'Finance Dashboard',
    category: 'Web Application',
    description:
      'Finance Dashboard to track your spendings powered by Plaid and Google Calendar APIs',
    tech: ['JavaScript', 'TypeScript', 'SCSS', 'PLpgSQL', 'CSS', 'HTML', 'Plaid API', 'Google Calendar API'],
    github: 'https://github.com/ihatekcin/finance-dashboard',
    link: 'https://github.com/ihatekcin/finance-dashboard', // fix this later
  },
  {
    title: 'Homelab',
    category: 'Homelab',
    description:
      'Personal Homelab on a Lenovo ThinkCentre M710s',
    tech: ['Proxmox VE', 'Linux', 'Windows Server', 'Docker', 'Kubernetes', 'OPNsense'],
    github: 'https://github.com/ihatekcin/homelab',
  },
  {
    title: 'Spotify Analytics & Playback Web App',
    category: 'Web Application',
    description:
      'Spotify analytics dashboard with authentication, personalized data, and in-browser playback controls',
    tech: ['JavaScript', 'PLpgSQL', 'Shell', 'Tailwind CSS', 'React', 'Next.js', 'Node.js', 'Spotify API'],
    github: 'https://github.com/ihatekcin/Spotify_local',
    link: 'https://spotify.carltechs.com/',
  },
  {
    title: 'ExoPlanets - NASA Space Apps Challenge Hackaton',
    category: 'Web Application',
    description:
      'TensorFlow exoplanet-detection model with NASA datasets ',
    tech: ['TypeScript', 'React', 'CSS', 'Python', 'Flash', 'TensorFlow', 'NASA API'],
    github: 'https://github.com/ihatekcin/ExoPlanets',
  },
  {
    title: 'Born To Be Polished',
    category: 'Website',
    description:
      'Personal website made for a friend to show off her nail designs',
    tech: ['Astro', 'CSS', 'JavaScript'],
    github: 'https://github.com/ihatekcin/borntobepolished',
    link: 'https://www.borntobepolished.com',
  },
  {
    title: 'Reaction Test',
    category: 'Website',
    description:
      'Web based reaction test',
    tech: ['HTML'],
    github: 'https://github.com/ihatekcin/reaction-test',
  },
];
