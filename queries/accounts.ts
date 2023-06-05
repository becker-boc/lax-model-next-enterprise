import { gql } from "@apollo/client";

export const accounts_query = gql`query Accounts {
    accounts {
      id
    }
  }`;