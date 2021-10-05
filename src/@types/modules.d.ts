type CustomEnvVars =
  | 'REACT_APP_BASE_URL'
  | 'REACT_APP_VALID_USERNAME'
  | 'REACT_APP_VALID_PASSWORD';

type FeatureFlagsEnvVars = 'REACT_APP_MSW_ENABLED';

type ExtendedProcessEnv = {
  [key in CustomEnvVars]: string;
};

type ExtendedBooleansProcessEnv = {
  [key in FeatureFlagsEnvVars]: 'true' | 'false';
};

type MergedExtendedProcessEnv = ExtendedProcessEnv & ExtendedBooleansProcessEnv;

declare namespace NodeJS {
  export interface ProcessEnv extends MergedExtendedProcessEnv {}
}
