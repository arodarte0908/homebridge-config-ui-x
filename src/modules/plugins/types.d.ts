export interface HomebridgePlugin {
  name: string;
  displayName?: string;
  description?: string;
  verifiedPlugin?: boolean;
  publicPackage?: boolean;
  installedVersion?: string;
  latestVersion?: string;
  lastUpdated?: string;
  updateAvailable?: boolean;
  installPath?: string;
  globalInstall?: boolean;
  settingsSchema?: boolean;
  links?: {
    npm?: string;
    homepage?: string;
    bugs?: string;
  };
  author?: string;
  engines?: {
    homebridge?: string;
    node?: string;
  }
}

export interface IPackageJson {
  name: string;
  displayName?: string;
  version?: string;
  description?: string;
  keywords?: string[];
  homepage?: string;
  bugs?: string | { email?: string, url?: string };
  license?: string;
  author?: string | INpmPerson;
  contributors?: string[] | INpmPerson[];
  files?: string[];
  main?: string;
  bin?: string | { [key: string]: string };
  repository?: string | { type: string; url: string; };
  scripts?: { [key: string]: string };
  dependencies?: { [key: string]: string };
  devDependencies?: { [key: string]: string };
  peerDependencies?: { [key: string]: string };
  optionalDependencies?: { [key: string]: string };
  bundledDependencies?: string[];
  engines?: { [key: string]: string };
  os?: string[];
  cpu?: string[];
  preferGlobal?: boolean;
  private?: boolean;
  publishConfig?: { registry?: string };
}

export interface INpmPerson {
  name?: string;
  email?: string;
  homepage?: string;
  username?: string;
  url?: string;
}

export interface INpmSearchResultItem {
  package: {
    name: string;
    scoped: string;
    version: string;
    description: string;
    keywords: string[];
    date: string;
    links: {
      npm: string;
      homebridge?: string;
      repository?: string;
      bugs?: string;
    },
    author: INpmPerson,
    publisher: INpmPerson,
    maintainers: INpmPerson[],
  },
  flags: {
    unstable: boolean,
  },
  score: {
    final: number;
    detail: {
      quality: number;
      popularity: number;
      maintenance: number;
    }
  },
  searchScore: number;
}

export interface INpmRegistryModule {
  _id: string;
  _rev: string;
  name: string;
  'dist-tags': {
    latest: string;
    [key: string]: string;
  },
  versions: {
    [key: string]: IPackageJson;
  },
  time: {
    created: string;
    modified: string;
    [key: string]: string;
  },
  maintainers: INpmPerson[],
  description: string;
  homepage: string;
  keywords: string[];
  repository: { type: string; url: string; };
  author: INpmPerson;
  bugs: { email?: string, url?: string };
  license: string;
  readme: string;
  readmeFilename: string;
}

export interface INpmSearchResults {
  objects: INpmSearchResultItem[];
}
