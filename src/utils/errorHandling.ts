import {ErrorResponse} from '@rtk-query/graphql-request-base-query/dist/GraphqlBaseQueryTypes';

export const isProviderConnexionError = (err: ErrorResponse) => {
  return err.message.includes('403');
};
