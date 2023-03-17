import { SERVERLESS } from './constants';

export const appendStage = (name: string) => `${name}-${SERVERLESS.Stage}`;
