type CustomEnvVars = 'REACT_APP_BASE_URL';

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
