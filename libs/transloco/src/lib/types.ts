export type HashMap<T = any> = Record<string, T>;

export interface LoadedEvent {
  type: 'translationLoadSuccess';
  wasFailure: boolean;
  payload: {
    scope: string | null;
    langName: string;
  };
}

export interface FailedEvent {
  type: 'translationLoadFailure';
  payload: LoadedEvent['payload'];
}

export type TranslocoEvents = LoadedEvent | FailedEvent;
export type Translation = HashMap;
export type PersistStorage = Pick<
  Storage,
  'getItem' | 'setItem' | 'removeItem'
>;
export type TranslateParams = string | string[];
export type TranslateObjectParams =
  | TranslateParams
  | HashMap
  | Map<string, HashMap>;
export interface LangDefinition {
  id: string;
  label: string;
}
export type AvailableLangs = string[] | LangDefinition[];
export interface SetTranslationOptions {
  merge?: boolean;
  emitChange?: boolean;
}
export interface ProviderScope {
  scope: string;
  loader?: InlineLoader;
  alias?: string;
}
export type MaybeArray<T> = T | T[];
export type TranslocoScope = ProviderScope | string | undefined;
export type InlineLoader = HashMap<() => Promise<Translation>>;
export interface LoadOptions {
  fallbackLangs?: string[] | null;
  /** @internal */
  failedCounter?: number;
  inlineLoader?: InlineLoader;
}
