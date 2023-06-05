import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  money: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  abbreviation: Scalars['String']['output'];
  client_contact: Scalars['String']['output'];
  /** An object relationship */
  contract?: Maybe<Contracts>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  abbreviation?: InputMaybe<String_Comparison_Exp>;
  client_contact?: InputMaybe<String_Comparison_Exp>;
  contract?: InputMaybe<Contracts_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "abbreviation" */
  AccountsAbbreviationKey = 'accounts_abbreviation_key',
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  client_contact?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Contracts_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  abbreviation?: Maybe<Scalars['String']['output']>;
  client_contact?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  abbreviation?: Maybe<Scalars['String']['output']>;
  client_contact?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  abbreviation?: InputMaybe<Order_By>;
  client_contact?: InputMaybe<Order_By>;
  contract?: InputMaybe<Contracts_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  ClientContact = 'client_contact',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  client_contact?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  client_contact?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  Abbreviation = 'abbreviation',
  /** column name */
  ClientContact = 'client_contact',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "allocations" */
export type Allocations = {
  __typename?: 'allocations';
  active: Scalars['Boolean']['output'];
  contract_id: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  currency: Currencies;
  end_date?: Maybe<Scalars['date']['output']>;
  hourly_override?: Maybe<Scalars['money']['output']>;
  id: Scalars['Int']['output'];
  individual_contributor: Scalars['Boolean']['output'];
  monthly_allocation: Scalars['numeric']['output'];
  rate: Scalars['money']['output'];
  rate_currency: Scalars['String']['output'];
  resource_id: Scalars['Int']['output'];
  start_date?: Maybe<Scalars['date']['output']>;
  task: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "allocations" */
export type Allocations_Aggregate = {
  __typename?: 'allocations_aggregate';
  aggregate?: Maybe<Allocations_Aggregate_Fields>;
  nodes: Array<Allocations>;
};

export type Allocations_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Allocations_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Allocations_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Allocations_Aggregate_Bool_Exp_Count>;
};

export type Allocations_Aggregate_Bool_Exp_Bool_And = {
  arguments: Allocations_Select_Column_Allocations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Allocations_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Allocations_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Allocations_Select_Column_Allocations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Allocations_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Allocations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Allocations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Allocations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "allocations" */
export type Allocations_Aggregate_Fields = {
  __typename?: 'allocations_aggregate_fields';
  avg?: Maybe<Allocations_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Allocations_Max_Fields>;
  min?: Maybe<Allocations_Min_Fields>;
  stddev?: Maybe<Allocations_Stddev_Fields>;
  stddev_pop?: Maybe<Allocations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Allocations_Stddev_Samp_Fields>;
  sum?: Maybe<Allocations_Sum_Fields>;
  var_pop?: Maybe<Allocations_Var_Pop_Fields>;
  var_samp?: Maybe<Allocations_Var_Samp_Fields>;
  variance?: Maybe<Allocations_Variance_Fields>;
};


/** aggregate fields of "allocations" */
export type Allocations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Allocations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "allocations" */
export type Allocations_Aggregate_Order_By = {
  avg?: InputMaybe<Allocations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Allocations_Max_Order_By>;
  min?: InputMaybe<Allocations_Min_Order_By>;
  stddev?: InputMaybe<Allocations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Allocations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Allocations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Allocations_Sum_Order_By>;
  var_pop?: InputMaybe<Allocations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Allocations_Var_Samp_Order_By>;
  variance?: InputMaybe<Allocations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "allocations" */
export type Allocations_Arr_Rel_Insert_Input = {
  data: Array<Allocations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Allocations_On_Conflict>;
};

/** aggregate avg on columns */
export type Allocations_Avg_Fields = {
  __typename?: 'allocations_avg_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  hourly_override?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  monthly_allocation?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  resource_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "allocations" */
export type Allocations_Avg_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "allocations". All fields are combined with a logical 'AND'. */
export type Allocations_Bool_Exp = {
  _and?: InputMaybe<Array<Allocations_Bool_Exp>>;
  _not?: InputMaybe<Allocations_Bool_Exp>;
  _or?: InputMaybe<Array<Allocations_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  contract_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<Currencies_Bool_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  hourly_override?: InputMaybe<Money_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  individual_contributor?: InputMaybe<Boolean_Comparison_Exp>;
  monthly_allocation?: InputMaybe<Numeric_Comparison_Exp>;
  rate?: InputMaybe<Money_Comparison_Exp>;
  rate_currency?: InputMaybe<String_Comparison_Exp>;
  resource_id?: InputMaybe<Int_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  task?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "allocations" */
export enum Allocations_Constraint {
  /** unique or primary key constraint on columns "id" */
  AllocationsPkey = 'allocations_pkey'
}

/** input type for incrementing numeric columns in table "allocations" */
export type Allocations_Inc_Input = {
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  hourly_override?: InputMaybe<Scalars['money']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  monthly_allocation?: InputMaybe<Scalars['numeric']['input']>;
  rate?: InputMaybe<Scalars['money']['input']>;
  resource_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "allocations" */
export type Allocations_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Currencies_Obj_Rel_Insert_Input>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  hourly_override?: InputMaybe<Scalars['money']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  individual_contributor?: InputMaybe<Scalars['Boolean']['input']>;
  monthly_allocation?: InputMaybe<Scalars['numeric']['input']>;
  rate?: InputMaybe<Scalars['money']['input']>;
  rate_currency?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  task?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Allocations_Max_Fields = {
  __typename?: 'allocations_max_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  hourly_override?: Maybe<Scalars['money']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  monthly_allocation?: Maybe<Scalars['numeric']['output']>;
  rate?: Maybe<Scalars['money']['output']>;
  rate_currency?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  task?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "allocations" */
export type Allocations_Max_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  rate_currency?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  task?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Allocations_Min_Fields = {
  __typename?: 'allocations_min_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  hourly_override?: Maybe<Scalars['money']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  monthly_allocation?: Maybe<Scalars['numeric']['output']>;
  rate?: Maybe<Scalars['money']['output']>;
  rate_currency?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  task?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "allocations" */
export type Allocations_Min_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  rate_currency?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  task?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "allocations" */
export type Allocations_Mutation_Response = {
  __typename?: 'allocations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Allocations>;
};

/** on_conflict condition type for table "allocations" */
export type Allocations_On_Conflict = {
  constraint: Allocations_Constraint;
  update_columns?: Array<Allocations_Update_Column>;
  where?: InputMaybe<Allocations_Bool_Exp>;
};

/** Ordering options when selecting data from "allocations". */
export type Allocations_Order_By = {
  active?: InputMaybe<Order_By>;
  contract_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Currencies_Order_By>;
  end_date?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  individual_contributor?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  rate_currency?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  task?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: allocations */
export type Allocations_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "allocations" */
export enum Allocations_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  HourlyOverride = 'hourly_override',
  /** column name */
  Id = 'id',
  /** column name */
  IndividualContributor = 'individual_contributor',
  /** column name */
  MonthlyAllocation = 'monthly_allocation',
  /** column name */
  Rate = 'rate',
  /** column name */
  RateCurrency = 'rate_currency',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Task = 'task',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "allocations_aggregate_bool_exp_bool_and_arguments_columns" columns of table "allocations" */
export enum Allocations_Select_Column_Allocations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  IndividualContributor = 'individual_contributor'
}

/** select "allocations_aggregate_bool_exp_bool_or_arguments_columns" columns of table "allocations" */
export enum Allocations_Select_Column_Allocations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  IndividualContributor = 'individual_contributor'
}

/** input type for updating data in table "allocations" */
export type Allocations_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  hourly_override?: InputMaybe<Scalars['money']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  individual_contributor?: InputMaybe<Scalars['Boolean']['input']>;
  monthly_allocation?: InputMaybe<Scalars['numeric']['input']>;
  rate?: InputMaybe<Scalars['money']['input']>;
  rate_currency?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  task?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Allocations_Stddev_Fields = {
  __typename?: 'allocations_stddev_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  hourly_override?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  monthly_allocation?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  resource_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "allocations" */
export type Allocations_Stddev_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Allocations_Stddev_Pop_Fields = {
  __typename?: 'allocations_stddev_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  hourly_override?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  monthly_allocation?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  resource_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "allocations" */
export type Allocations_Stddev_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Allocations_Stddev_Samp_Fields = {
  __typename?: 'allocations_stddev_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  hourly_override?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  monthly_allocation?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  resource_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "allocations" */
export type Allocations_Stddev_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "allocations" */
export type Allocations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Allocations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Allocations_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  contract_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  hourly_override?: InputMaybe<Scalars['money']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  individual_contributor?: InputMaybe<Scalars['Boolean']['input']>;
  monthly_allocation?: InputMaybe<Scalars['numeric']['input']>;
  rate?: InputMaybe<Scalars['money']['input']>;
  rate_currency?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  task?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Allocations_Sum_Fields = {
  __typename?: 'allocations_sum_fields';
  contract_id?: Maybe<Scalars['Int']['output']>;
  hourly_override?: Maybe<Scalars['money']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  monthly_allocation?: Maybe<Scalars['numeric']['output']>;
  rate?: Maybe<Scalars['money']['output']>;
  resource_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "allocations" */
export type Allocations_Sum_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
};

/** update columns of table "allocations" */
export enum Allocations_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ContractId = 'contract_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  HourlyOverride = 'hourly_override',
  /** column name */
  Id = 'id',
  /** column name */
  IndividualContributor = 'individual_contributor',
  /** column name */
  MonthlyAllocation = 'monthly_allocation',
  /** column name */
  Rate = 'rate',
  /** column name */
  RateCurrency = 'rate_currency',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Task = 'task',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Allocations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Allocations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Allocations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Allocations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Allocations_Var_Pop_Fields = {
  __typename?: 'allocations_var_pop_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  hourly_override?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  monthly_allocation?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  resource_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "allocations" */
export type Allocations_Var_Pop_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Allocations_Var_Samp_Fields = {
  __typename?: 'allocations_var_samp_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  hourly_override?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  monthly_allocation?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  resource_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "allocations" */
export type Allocations_Var_Samp_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Allocations_Variance_Fields = {
  __typename?: 'allocations_variance_fields';
  contract_id?: Maybe<Scalars['Float']['output']>;
  hourly_override?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  monthly_allocation?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  resource_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "allocations" */
export type Allocations_Variance_Order_By = {
  contract_id?: InputMaybe<Order_By>;
  hourly_override?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monthly_allocation?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "contract_statusses" */
export type Contract_Statusses = {
  __typename?: 'contract_statusses';
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  contracts: Array<Contracts>;
  /** An aggregate relationship */
  contracts_aggregate: Contracts_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "contract_statusses" */
export type Contract_StatussesContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


/** columns and relationships of "contract_statusses" */
export type Contract_StatussesContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** aggregated selection of "contract_statusses" */
export type Contract_Statusses_Aggregate = {
  __typename?: 'contract_statusses_aggregate';
  aggregate?: Maybe<Contract_Statusses_Aggregate_Fields>;
  nodes: Array<Contract_Statusses>;
};

/** aggregate fields of "contract_statusses" */
export type Contract_Statusses_Aggregate_Fields = {
  __typename?: 'contract_statusses_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Contract_Statusses_Max_Fields>;
  min?: Maybe<Contract_Statusses_Min_Fields>;
};


/** aggregate fields of "contract_statusses" */
export type Contract_Statusses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contract_Statusses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "contract_statusses". All fields are combined with a logical 'AND'. */
export type Contract_Statusses_Bool_Exp = {
  _and?: InputMaybe<Array<Contract_Statusses_Bool_Exp>>;
  _not?: InputMaybe<Contract_Statusses_Bool_Exp>;
  _or?: InputMaybe<Array<Contract_Statusses_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  contracts?: InputMaybe<Contracts_Bool_Exp>;
  contracts_aggregate?: InputMaybe<Contracts_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "contract_statusses" */
export enum Contract_Statusses_Constraint {
  /** unique or primary key constraint on columns "value" */
  ContractStatussesPkey = 'contract_statusses_pkey'
}

export enum Contract_Statusses_Enum {
  Active = 'Active',
  Closed = 'Closed',
  Maintenance = 'Maintenance',
  New = 'New',
  Paused = 'Paused'
}

/** Boolean expression to compare columns of type "contract_statusses_enum". All fields are combined with logical 'AND'. */
export type Contract_Statusses_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Contract_Statusses_Enum>;
  _in?: InputMaybe<Array<Contract_Statusses_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Contract_Statusses_Enum>;
  _nin?: InputMaybe<Array<Contract_Statusses_Enum>>;
};

/** input type for inserting data into table "contract_statusses" */
export type Contract_Statusses_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  contracts?: InputMaybe<Contracts_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Contract_Statusses_Max_Fields = {
  __typename?: 'contract_statusses_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Contract_Statusses_Min_Fields = {
  __typename?: 'contract_statusses_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "contract_statusses" */
export type Contract_Statusses_Mutation_Response = {
  __typename?: 'contract_statusses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Contract_Statusses>;
};

/** input type for inserting object relation for remote table "contract_statusses" */
export type Contract_Statusses_Obj_Rel_Insert_Input = {
  data: Contract_Statusses_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Contract_Statusses_On_Conflict>;
};

/** on_conflict condition type for table "contract_statusses" */
export type Contract_Statusses_On_Conflict = {
  constraint: Contract_Statusses_Constraint;
  update_columns?: Array<Contract_Statusses_Update_Column>;
  where?: InputMaybe<Contract_Statusses_Bool_Exp>;
};

/** Ordering options when selecting data from "contract_statusses". */
export type Contract_Statusses_Order_By = {
  comment?: InputMaybe<Order_By>;
  contracts_aggregate?: InputMaybe<Contracts_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contract_statusses */
export type Contract_Statusses_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "contract_statusses" */
export enum Contract_Statusses_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "contract_statusses" */
export type Contract_Statusses_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "contract_statusses" */
export type Contract_Statusses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contract_Statusses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contract_Statusses_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "contract_statusses" */
export enum Contract_Statusses_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Contract_Statusses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contract_Statusses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contract_Statusses_Bool_Exp;
};

/** columns and relationships of "contracts" */
export type Contracts = {
  __typename?: 'contracts';
  /** An object relationship */
  account: Accounts;
  account_id: Scalars['Int']['output'];
  budget: Scalars['numeric']['output'];
  /** An object relationship */
  contract_statuss: Contract_Statusses;
  created_at: Scalars['timestamptz']['output'];
  currency: Scalars['String']['output'];
  /** An object relationship */
  currencyByCurrency: Currencies;
  description?: Maybe<Scalars['String']['output']>;
  effective_start?: Maybe<Scalars['date']['output']>;
  id: Scalars['Int']['output'];
  isMRR: Scalars['Boolean']['output'];
  projected_end?: Maybe<Scalars['date']['output']>;
  sow: Scalars['String']['output'];
  status: Contract_Statusses_Enum;
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "contracts" */
export type Contracts_Aggregate = {
  __typename?: 'contracts_aggregate';
  aggregate?: Maybe<Contracts_Aggregate_Fields>;
  nodes: Array<Contracts>;
};

export type Contracts_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Contracts_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Contracts_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Contracts_Aggregate_Bool_Exp_Count>;
};

export type Contracts_Aggregate_Bool_Exp_Bool_And = {
  arguments: Contracts_Select_Column_Contracts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Contracts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Contracts_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Contracts_Select_Column_Contracts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Contracts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Contracts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Contracts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "contracts" */
export type Contracts_Aggregate_Fields = {
  __typename?: 'contracts_aggregate_fields';
  avg?: Maybe<Contracts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Contracts_Max_Fields>;
  min?: Maybe<Contracts_Min_Fields>;
  stddev?: Maybe<Contracts_Stddev_Fields>;
  stddev_pop?: Maybe<Contracts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contracts_Stddev_Samp_Fields>;
  sum?: Maybe<Contracts_Sum_Fields>;
  var_pop?: Maybe<Contracts_Var_Pop_Fields>;
  var_samp?: Maybe<Contracts_Var_Samp_Fields>;
  variance?: Maybe<Contracts_Variance_Fields>;
};


/** aggregate fields of "contracts" */
export type Contracts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contracts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "contracts" */
export type Contracts_Aggregate_Order_By = {
  avg?: InputMaybe<Contracts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contracts_Max_Order_By>;
  min?: InputMaybe<Contracts_Min_Order_By>;
  stddev?: InputMaybe<Contracts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Contracts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Contracts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Contracts_Sum_Order_By>;
  var_pop?: InputMaybe<Contracts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Contracts_Var_Samp_Order_By>;
  variance?: InputMaybe<Contracts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "contracts" */
export type Contracts_Arr_Rel_Insert_Input = {
  data: Array<Contracts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};

/** aggregate avg on columns */
export type Contracts_Avg_Fields = {
  __typename?: 'contracts_avg_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "contracts" */
export type Contracts_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contracts". All fields are combined with a logical 'AND'. */
export type Contracts_Bool_Exp = {
  _and?: InputMaybe<Array<Contracts_Bool_Exp>>;
  _not?: InputMaybe<Contracts_Bool_Exp>;
  _or?: InputMaybe<Array<Contracts_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  account_id?: InputMaybe<Int_Comparison_Exp>;
  budget?: InputMaybe<Numeric_Comparison_Exp>;
  contract_statuss?: InputMaybe<Contract_Statusses_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  currencyByCurrency?: InputMaybe<Currencies_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  effective_start?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isMRR?: InputMaybe<Boolean_Comparison_Exp>;
  projected_end?: InputMaybe<Date_Comparison_Exp>;
  sow?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<Contract_Statusses_Enum_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "contracts" */
export enum Contracts_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContractsPkey = 'contracts_pkey',
  /** unique or primary key constraint on columns "sow" */
  ContractsSowKey = 'contracts_sow_key'
}

/** input type for incrementing numeric columns in table "contracts" */
export type Contracts_Inc_Input = {
  account_id?: InputMaybe<Scalars['Int']['input']>;
  budget?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "contracts" */
export type Contracts_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['Int']['input']>;
  budget?: InputMaybe<Scalars['numeric']['input']>;
  contract_statuss?: InputMaybe<Contract_Statusses_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  currencyByCurrency?: InputMaybe<Currencies_Obj_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  effective_start?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isMRR?: InputMaybe<Scalars['Boolean']['input']>;
  projected_end?: InputMaybe<Scalars['date']['input']>;
  sow?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Contract_Statusses_Enum>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Contracts_Max_Fields = {
  __typename?: 'contracts_max_fields';
  account_id?: Maybe<Scalars['Int']['output']>;
  budget?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  effective_start?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  projected_end?: Maybe<Scalars['date']['output']>;
  sow?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "contracts" */
export type Contracts_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  effective_start?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  projected_end?: InputMaybe<Order_By>;
  sow?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contracts_Min_Fields = {
  __typename?: 'contracts_min_fields';
  account_id?: Maybe<Scalars['Int']['output']>;
  budget?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  effective_start?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  projected_end?: Maybe<Scalars['date']['output']>;
  sow?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "contracts" */
export type Contracts_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  effective_start?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  projected_end?: InputMaybe<Order_By>;
  sow?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contracts" */
export type Contracts_Mutation_Response = {
  __typename?: 'contracts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Contracts>;
};

/** input type for inserting object relation for remote table "contracts" */
export type Contracts_Obj_Rel_Insert_Input = {
  data: Contracts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};

/** on_conflict condition type for table "contracts" */
export type Contracts_On_Conflict = {
  constraint: Contracts_Constraint;
  update_columns?: Array<Contracts_Update_Column>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** Ordering options when selecting data from "contracts". */
export type Contracts_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  contract_statuss?: InputMaybe<Contract_Statusses_Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  currencyByCurrency?: InputMaybe<Currencies_Order_By>;
  description?: InputMaybe<Order_By>;
  effective_start?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isMRR?: InputMaybe<Order_By>;
  projected_end?: InputMaybe<Order_By>;
  sow?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contracts */
export type Contracts_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "contracts" */
export enum Contracts_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Budget = 'budget',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  EffectiveStart = 'effective_start',
  /** column name */
  Id = 'id',
  /** column name */
  IsMrr = 'isMRR',
  /** column name */
  ProjectedEnd = 'projected_end',
  /** column name */
  Sow = 'sow',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "contracts_aggregate_bool_exp_bool_and_arguments_columns" columns of table "contracts" */
export enum Contracts_Select_Column_Contracts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsMrr = 'isMRR'
}

/** select "contracts_aggregate_bool_exp_bool_or_arguments_columns" columns of table "contracts" */
export enum Contracts_Select_Column_Contracts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsMrr = 'isMRR'
}

/** input type for updating data in table "contracts" */
export type Contracts_Set_Input = {
  account_id?: InputMaybe<Scalars['Int']['input']>;
  budget?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  effective_start?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isMRR?: InputMaybe<Scalars['Boolean']['input']>;
  projected_end?: InputMaybe<Scalars['date']['input']>;
  sow?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Contract_Statusses_Enum>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Contracts_Stddev_Fields = {
  __typename?: 'contracts_stddev_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "contracts" */
export type Contracts_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contracts_Stddev_Pop_Fields = {
  __typename?: 'contracts_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "contracts" */
export type Contracts_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contracts_Stddev_Samp_Fields = {
  __typename?: 'contracts_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "contracts" */
export type Contracts_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "contracts" */
export type Contracts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contracts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contracts_Stream_Cursor_Value_Input = {
  account_id?: InputMaybe<Scalars['Int']['input']>;
  budget?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  effective_start?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  isMRR?: InputMaybe<Scalars['Boolean']['input']>;
  projected_end?: InputMaybe<Scalars['date']['input']>;
  sow?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Contract_Statusses_Enum>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Contracts_Sum_Fields = {
  __typename?: 'contracts_sum_fields';
  account_id?: Maybe<Scalars['Int']['output']>;
  budget?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "contracts" */
export type Contracts_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "contracts" */
export enum Contracts_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Budget = 'budget',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  EffectiveStart = 'effective_start',
  /** column name */
  Id = 'id',
  /** column name */
  IsMrr = 'isMRR',
  /** column name */
  ProjectedEnd = 'projected_end',
  /** column name */
  Sow = 'sow',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Contracts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Contracts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contracts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contracts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Contracts_Var_Pop_Fields = {
  __typename?: 'contracts_var_pop_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "contracts" */
export type Contracts_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contracts_Var_Samp_Fields = {
  __typename?: 'contracts_var_samp_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "contracts" */
export type Contracts_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Contracts_Variance_Fields = {
  __typename?: 'contracts_variance_fields';
  account_id?: Maybe<Scalars['Float']['output']>;
  budget?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "contracts" */
export type Contracts_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  budget?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "currencies" */
export type Currencies = {
  __typename?: 'currencies';
  /** An array relationship */
  allocations: Array<Allocations>;
  /** An aggregate relationship */
  allocations_aggregate: Allocations_Aggregate;
  code: Scalars['String']['output'];
  /** An array relationship */
  contracts: Array<Contracts>;
  /** An aggregate relationship */
  contracts_aggregate: Contracts_Aggregate;
  name: Scalars['String']['output'];
};


/** columns and relationships of "currencies" */
export type CurrenciesAllocationsArgs = {
  distinct_on?: InputMaybe<Array<Allocations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allocations_Order_By>>;
  where?: InputMaybe<Allocations_Bool_Exp>;
};


/** columns and relationships of "currencies" */
export type CurrenciesAllocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allocations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allocations_Order_By>>;
  where?: InputMaybe<Allocations_Bool_Exp>;
};


/** columns and relationships of "currencies" */
export type CurrenciesContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


/** columns and relationships of "currencies" */
export type CurrenciesContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};

/** aggregated selection of "currencies" */
export type Currencies_Aggregate = {
  __typename?: 'currencies_aggregate';
  aggregate?: Maybe<Currencies_Aggregate_Fields>;
  nodes: Array<Currencies>;
};

/** aggregate fields of "currencies" */
export type Currencies_Aggregate_Fields = {
  __typename?: 'currencies_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Currencies_Max_Fields>;
  min?: Maybe<Currencies_Min_Fields>;
};


/** aggregate fields of "currencies" */
export type Currencies_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Currencies_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "currencies". All fields are combined with a logical 'AND'. */
export type Currencies_Bool_Exp = {
  _and?: InputMaybe<Array<Currencies_Bool_Exp>>;
  _not?: InputMaybe<Currencies_Bool_Exp>;
  _or?: InputMaybe<Array<Currencies_Bool_Exp>>;
  allocations?: InputMaybe<Allocations_Bool_Exp>;
  allocations_aggregate?: InputMaybe<Allocations_Aggregate_Bool_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  contracts?: InputMaybe<Contracts_Bool_Exp>;
  contracts_aggregate?: InputMaybe<Contracts_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "currencies" */
export enum Currencies_Constraint {
  /** unique or primary key constraint on columns "code" */
  CurrenciesPkey = 'currencies_pkey'
}

/** input type for inserting data into table "currencies" */
export type Currencies_Insert_Input = {
  allocations?: InputMaybe<Allocations_Arr_Rel_Insert_Input>;
  code?: InputMaybe<Scalars['String']['input']>;
  contracts?: InputMaybe<Contracts_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Currencies_Max_Fields = {
  __typename?: 'currencies_max_fields';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Currencies_Min_Fields = {
  __typename?: 'currencies_min_fields';
  code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "currencies" */
export type Currencies_Mutation_Response = {
  __typename?: 'currencies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Currencies>;
};

/** input type for inserting object relation for remote table "currencies" */
export type Currencies_Obj_Rel_Insert_Input = {
  data: Currencies_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Currencies_On_Conflict>;
};

/** on_conflict condition type for table "currencies" */
export type Currencies_On_Conflict = {
  constraint: Currencies_Constraint;
  update_columns?: Array<Currencies_Update_Column>;
  where?: InputMaybe<Currencies_Bool_Exp>;
};

/** Ordering options when selecting data from "currencies". */
export type Currencies_Order_By = {
  allocations_aggregate?: InputMaybe<Allocations_Aggregate_Order_By>;
  code?: InputMaybe<Order_By>;
  contracts_aggregate?: InputMaybe<Contracts_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: currencies */
export type Currencies_Pk_Columns_Input = {
  code: Scalars['String']['input'];
};

/** select columns of table "currencies" */
export enum Currencies_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "currencies" */
export type Currencies_Set_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "currencies" */
export type Currencies_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Currencies_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Currencies_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "currencies" */
export enum Currencies_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Name = 'name'
}

export type Currencies_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Currencies_Set_Input>;
  /** filter the rows which have to be updated */
  where: Currencies_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']['input']>;
  _gt?: InputMaybe<Scalars['money']['input']>;
  _gte?: InputMaybe<Scalars['money']['input']>;
  _in?: InputMaybe<Array<Scalars['money']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['money']['input']>;
  _lte?: InputMaybe<Scalars['money']['input']>;
  _neq?: InputMaybe<Scalars['money']['input']>;
  _nin?: InputMaybe<Array<Scalars['money']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "allocations" */
  delete_allocations?: Maybe<Allocations_Mutation_Response>;
  /** delete single row from the table: "allocations" */
  delete_allocations_by_pk?: Maybe<Allocations>;
  /** delete data from the table: "contract_statusses" */
  delete_contract_statusses?: Maybe<Contract_Statusses_Mutation_Response>;
  /** delete single row from the table: "contract_statusses" */
  delete_contract_statusses_by_pk?: Maybe<Contract_Statusses>;
  /** delete data from the table: "contracts" */
  delete_contracts?: Maybe<Contracts_Mutation_Response>;
  /** delete single row from the table: "contracts" */
  delete_contracts_by_pk?: Maybe<Contracts>;
  /** delete data from the table: "currencies" */
  delete_currencies?: Maybe<Currencies_Mutation_Response>;
  /** delete single row from the table: "currencies" */
  delete_currencies_by_pk?: Maybe<Currencies>;
  /** delete data from the table: "rate_types" */
  delete_rate_types?: Maybe<Rate_Types_Mutation_Response>;
  /** delete single row from the table: "rate_types" */
  delete_rate_types_by_pk?: Maybe<Rate_Types>;
  /** delete data from the table: "resources" */
  delete_resources?: Maybe<Resources_Mutation_Response>;
  /** delete single row from the table: "resources" */
  delete_resources_by_pk?: Maybe<Resources>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "allocations" */
  insert_allocations?: Maybe<Allocations_Mutation_Response>;
  /** insert a single row into the table: "allocations" */
  insert_allocations_one?: Maybe<Allocations>;
  /** insert data into the table: "contract_statusses" */
  insert_contract_statusses?: Maybe<Contract_Statusses_Mutation_Response>;
  /** insert a single row into the table: "contract_statusses" */
  insert_contract_statusses_one?: Maybe<Contract_Statusses>;
  /** insert data into the table: "contracts" */
  insert_contracts?: Maybe<Contracts_Mutation_Response>;
  /** insert a single row into the table: "contracts" */
  insert_contracts_one?: Maybe<Contracts>;
  /** insert data into the table: "currencies" */
  insert_currencies?: Maybe<Currencies_Mutation_Response>;
  /** insert a single row into the table: "currencies" */
  insert_currencies_one?: Maybe<Currencies>;
  /** insert data into the table: "rate_types" */
  insert_rate_types?: Maybe<Rate_Types_Mutation_Response>;
  /** insert a single row into the table: "rate_types" */
  insert_rate_types_one?: Maybe<Rate_Types>;
  /** insert data into the table: "resources" */
  insert_resources?: Maybe<Resources_Mutation_Response>;
  /** insert a single row into the table: "resources" */
  insert_resources_one?: Maybe<Resources>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "allocations" */
  update_allocations?: Maybe<Allocations_Mutation_Response>;
  /** update single row of the table: "allocations" */
  update_allocations_by_pk?: Maybe<Allocations>;
  /** update multiples rows of table: "allocations" */
  update_allocations_many?: Maybe<Array<Maybe<Allocations_Mutation_Response>>>;
  /** update data of the table: "contract_statusses" */
  update_contract_statusses?: Maybe<Contract_Statusses_Mutation_Response>;
  /** update single row of the table: "contract_statusses" */
  update_contract_statusses_by_pk?: Maybe<Contract_Statusses>;
  /** update multiples rows of table: "contract_statusses" */
  update_contract_statusses_many?: Maybe<Array<Maybe<Contract_Statusses_Mutation_Response>>>;
  /** update data of the table: "contracts" */
  update_contracts?: Maybe<Contracts_Mutation_Response>;
  /** update single row of the table: "contracts" */
  update_contracts_by_pk?: Maybe<Contracts>;
  /** update multiples rows of table: "contracts" */
  update_contracts_many?: Maybe<Array<Maybe<Contracts_Mutation_Response>>>;
  /** update data of the table: "currencies" */
  update_currencies?: Maybe<Currencies_Mutation_Response>;
  /** update single row of the table: "currencies" */
  update_currencies_by_pk?: Maybe<Currencies>;
  /** update multiples rows of table: "currencies" */
  update_currencies_many?: Maybe<Array<Maybe<Currencies_Mutation_Response>>>;
  /** update data of the table: "rate_types" */
  update_rate_types?: Maybe<Rate_Types_Mutation_Response>;
  /** update single row of the table: "rate_types" */
  update_rate_types_by_pk?: Maybe<Rate_Types>;
  /** update multiples rows of table: "rate_types" */
  update_rate_types_many?: Maybe<Array<Maybe<Rate_Types_Mutation_Response>>>;
  /** update data of the table: "resources" */
  update_resources?: Maybe<Resources_Mutation_Response>;
  /** update single row of the table: "resources" */
  update_resources_by_pk?: Maybe<Resources>;
  /** update multiples rows of table: "resources" */
  update_resources_many?: Maybe<Array<Maybe<Resources_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AllocationsArgs = {
  where: Allocations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Allocations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Contract_StatussesArgs = {
  where: Contract_Statusses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contract_Statusses_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ContractsArgs = {
  where: Contracts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contracts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CurrenciesArgs = {
  where: Currencies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Currencies_By_PkArgs = {
  code: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Rate_TypesArgs = {
  where: Rate_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rate_Types_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ResourcesArgs = {
  where: Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resources_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AllocationsArgs = {
  objects: Array<Allocations_Insert_Input>;
  on_conflict?: InputMaybe<Allocations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Allocations_OneArgs = {
  object: Allocations_Insert_Input;
  on_conflict?: InputMaybe<Allocations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contract_StatussesArgs = {
  objects: Array<Contract_Statusses_Insert_Input>;
  on_conflict?: InputMaybe<Contract_Statusses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contract_Statusses_OneArgs = {
  object: Contract_Statusses_Insert_Input;
  on_conflict?: InputMaybe<Contract_Statusses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContractsArgs = {
  objects: Array<Contracts_Insert_Input>;
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contracts_OneArgs = {
  object: Contracts_Insert_Input;
  on_conflict?: InputMaybe<Contracts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CurrenciesArgs = {
  objects: Array<Currencies_Insert_Input>;
  on_conflict?: InputMaybe<Currencies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Currencies_OneArgs = {
  object: Currencies_Insert_Input;
  on_conflict?: InputMaybe<Currencies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_TypesArgs = {
  objects: Array<Rate_Types_Insert_Input>;
  on_conflict?: InputMaybe<Rate_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rate_Types_OneArgs = {
  object: Rate_Types_Insert_Input;
  on_conflict?: InputMaybe<Rate_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ResourcesArgs = {
  objects: Array<Resources_Insert_Input>;
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resources_OneArgs = {
  object: Resources_Insert_Input;
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AllocationsArgs = {
  _inc?: InputMaybe<Allocations_Inc_Input>;
  _set?: InputMaybe<Allocations_Set_Input>;
  where: Allocations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Allocations_By_PkArgs = {
  _inc?: InputMaybe<Allocations_Inc_Input>;
  _set?: InputMaybe<Allocations_Set_Input>;
  pk_columns: Allocations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Allocations_ManyArgs = {
  updates: Array<Allocations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Contract_StatussesArgs = {
  _set?: InputMaybe<Contract_Statusses_Set_Input>;
  where: Contract_Statusses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contract_Statusses_By_PkArgs = {
  _set?: InputMaybe<Contract_Statusses_Set_Input>;
  pk_columns: Contract_Statusses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contract_Statusses_ManyArgs = {
  updates: Array<Contract_Statusses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ContractsArgs = {
  _inc?: InputMaybe<Contracts_Inc_Input>;
  _set?: InputMaybe<Contracts_Set_Input>;
  where: Contracts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contracts_By_PkArgs = {
  _inc?: InputMaybe<Contracts_Inc_Input>;
  _set?: InputMaybe<Contracts_Set_Input>;
  pk_columns: Contracts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contracts_ManyArgs = {
  updates: Array<Contracts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CurrenciesArgs = {
  _set?: InputMaybe<Currencies_Set_Input>;
  where: Currencies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Currencies_By_PkArgs = {
  _set?: InputMaybe<Currencies_Set_Input>;
  pk_columns: Currencies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Currencies_ManyArgs = {
  updates: Array<Currencies_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_TypesArgs = {
  _set?: InputMaybe<Rate_Types_Set_Input>;
  where: Rate_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Types_By_PkArgs = {
  _set?: InputMaybe<Rate_Types_Set_Input>;
  pk_columns: Rate_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rate_Types_ManyArgs = {
  updates: Array<Rate_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ResourcesArgs = {
  _inc?: InputMaybe<Resources_Inc_Input>;
  _set?: InputMaybe<Resources_Set_Input>;
  where: Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resources_By_PkArgs = {
  _inc?: InputMaybe<Resources_Inc_Input>;
  _set?: InputMaybe<Resources_Set_Input>;
  pk_columns: Resources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resources_ManyArgs = {
  updates: Array<Resources_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** An array relationship */
  allocations: Array<Allocations>;
  /** An aggregate relationship */
  allocations_aggregate: Allocations_Aggregate;
  /** fetch data from the table: "allocations" using primary key columns */
  allocations_by_pk?: Maybe<Allocations>;
  /** fetch data from the table: "contract_statusses" */
  contract_statusses: Array<Contract_Statusses>;
  /** fetch aggregated fields from the table: "contract_statusses" */
  contract_statusses_aggregate: Contract_Statusses_Aggregate;
  /** fetch data from the table: "contract_statusses" using primary key columns */
  contract_statusses_by_pk?: Maybe<Contract_Statusses>;
  /** An array relationship */
  contracts: Array<Contracts>;
  /** An aggregate relationship */
  contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "contracts" using primary key columns */
  contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table: "currencies" */
  currencies: Array<Currencies>;
  /** fetch aggregated fields from the table: "currencies" */
  currencies_aggregate: Currencies_Aggregate;
  /** fetch data from the table: "currencies" using primary key columns */
  currencies_by_pk?: Maybe<Currencies>;
  /** fetch data from the table: "rate_types" */
  rate_types: Array<Rate_Types>;
  /** fetch aggregated fields from the table: "rate_types" */
  rate_types_aggregate: Rate_Types_Aggregate;
  /** fetch data from the table: "rate_types" using primary key columns */
  rate_types_by_pk?: Maybe<Rate_Types>;
  /** An array relationship */
  resources: Array<Resources>;
  /** An aggregate relationship */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootAllocationsArgs = {
  distinct_on?: InputMaybe<Array<Allocations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allocations_Order_By>>;
  where?: InputMaybe<Allocations_Bool_Exp>;
};


export type Query_RootAllocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allocations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allocations_Order_By>>;
  where?: InputMaybe<Allocations_Bool_Exp>;
};


export type Query_RootAllocations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootContract_StatussesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Statusses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Statusses_Order_By>>;
  where?: InputMaybe<Contract_Statusses_Bool_Exp>;
};


export type Query_RootContract_Statusses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Statusses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Statusses_Order_By>>;
  where?: InputMaybe<Contract_Statusses_Bool_Exp>;
};


export type Query_RootContract_Statusses_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Query_RootContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Query_RootContracts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Currencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currencies_Order_By>>;
  where?: InputMaybe<Currencies_Bool_Exp>;
};


export type Query_RootCurrencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Currencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currencies_Order_By>>;
  where?: InputMaybe<Currencies_Bool_Exp>;
};


export type Query_RootCurrencies_By_PkArgs = {
  code: Scalars['String']['input'];
};


export type Query_RootRate_TypesArgs = {
  distinct_on?: InputMaybe<Array<Rate_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Types_Order_By>>;
  where?: InputMaybe<Rate_Types_Bool_Exp>;
};


export type Query_RootRate_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Types_Order_By>>;
  where?: InputMaybe<Rate_Types_Bool_Exp>;
};


export type Query_RootRate_Types_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Query_RootResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Query_RootResources_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "rate_types" */
export type Rate_Types = {
  __typename?: 'rate_types';
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  resources: Array<Resources>;
  /** An aggregate relationship */
  resources_aggregate: Resources_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "rate_types" */
export type Rate_TypesResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


/** columns and relationships of "rate_types" */
export type Rate_TypesResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** aggregated selection of "rate_types" */
export type Rate_Types_Aggregate = {
  __typename?: 'rate_types_aggregate';
  aggregate?: Maybe<Rate_Types_Aggregate_Fields>;
  nodes: Array<Rate_Types>;
};

/** aggregate fields of "rate_types" */
export type Rate_Types_Aggregate_Fields = {
  __typename?: 'rate_types_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Rate_Types_Max_Fields>;
  min?: Maybe<Rate_Types_Min_Fields>;
};


/** aggregate fields of "rate_types" */
export type Rate_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rate_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "rate_types". All fields are combined with a logical 'AND'. */
export type Rate_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Rate_Types_Bool_Exp>>;
  _not?: InputMaybe<Rate_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Rate_Types_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  resources?: InputMaybe<Resources_Bool_Exp>;
  resources_aggregate?: InputMaybe<Resources_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rate_types" */
export enum Rate_Types_Constraint {
  /** unique or primary key constraint on columns "value" */
  RateTypesPkey = 'rate_types_pkey'
}

export enum Rate_Types_Enum {
  Hourly = 'Hourly',
  Monthly = 'Monthly',
  Yearly = 'Yearly'
}

/** Boolean expression to compare columns of type "rate_types_enum". All fields are combined with logical 'AND'. */
export type Rate_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Rate_Types_Enum>;
  _in?: InputMaybe<Array<Rate_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Rate_Types_Enum>;
  _nin?: InputMaybe<Array<Rate_Types_Enum>>;
};

/** input type for inserting data into table "rate_types" */
export type Rate_Types_Insert_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  resources?: InputMaybe<Resources_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Rate_Types_Max_Fields = {
  __typename?: 'rate_types_max_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Rate_Types_Min_Fields = {
  __typename?: 'rate_types_min_fields';
  comment?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "rate_types" */
export type Rate_Types_Mutation_Response = {
  __typename?: 'rate_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Rate_Types>;
};

/** input type for inserting object relation for remote table "rate_types" */
export type Rate_Types_Obj_Rel_Insert_Input = {
  data: Rate_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rate_Types_On_Conflict>;
};

/** on_conflict condition type for table "rate_types" */
export type Rate_Types_On_Conflict = {
  constraint: Rate_Types_Constraint;
  update_columns?: Array<Rate_Types_Update_Column>;
  where?: InputMaybe<Rate_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "rate_types". */
export type Rate_Types_Order_By = {
  comment?: InputMaybe<Order_By>;
  resources_aggregate?: InputMaybe<Resources_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rate_types */
export type Rate_Types_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "rate_types" */
export enum Rate_Types_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "rate_types" */
export type Rate_Types_Set_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "rate_types" */
export type Rate_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rate_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Rate_Types_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "rate_types" */
export enum Rate_Types_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Rate_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Rate_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Rate_Types_Bool_Exp;
};

/** columns and relationships of "resources" */
export type Resources = {
  __typename?: 'resources';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  initials: Scalars['String']['output'];
  isLeadership: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  rate: Scalars['String']['output'];
  /** An object relationship */
  rateTypeByRateType: Rate_Types;
  rate_type: Rate_Types_Enum;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "resources" */
export type Resources_Aggregate = {
  __typename?: 'resources_aggregate';
  aggregate?: Maybe<Resources_Aggregate_Fields>;
  nodes: Array<Resources>;
};

export type Resources_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Resources_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Resources_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Resources_Aggregate_Bool_Exp_Count>;
};

export type Resources_Aggregate_Bool_Exp_Bool_And = {
  arguments: Resources_Select_Column_Resources_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Resources_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Resources_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Resources_Select_Column_Resources_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Resources_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Resources_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Resources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Resources_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "resources" */
export type Resources_Aggregate_Fields = {
  __typename?: 'resources_aggregate_fields';
  avg?: Maybe<Resources_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Resources_Max_Fields>;
  min?: Maybe<Resources_Min_Fields>;
  stddev?: Maybe<Resources_Stddev_Fields>;
  stddev_pop?: Maybe<Resources_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Resources_Stddev_Samp_Fields>;
  sum?: Maybe<Resources_Sum_Fields>;
  var_pop?: Maybe<Resources_Var_Pop_Fields>;
  var_samp?: Maybe<Resources_Var_Samp_Fields>;
  variance?: Maybe<Resources_Variance_Fields>;
};


/** aggregate fields of "resources" */
export type Resources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "resources" */
export type Resources_Aggregate_Order_By = {
  avg?: InputMaybe<Resources_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Resources_Max_Order_By>;
  min?: InputMaybe<Resources_Min_Order_By>;
  stddev?: InputMaybe<Resources_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Resources_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Resources_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Resources_Sum_Order_By>;
  var_pop?: InputMaybe<Resources_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Resources_Var_Samp_Order_By>;
  variance?: InputMaybe<Resources_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "resources" */
export type Resources_Arr_Rel_Insert_Input = {
  data: Array<Resources_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};

/** aggregate avg on columns */
export type Resources_Avg_Fields = {
  __typename?: 'resources_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "resources" */
export type Resources_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "resources". All fields are combined with a logical 'AND'. */
export type Resources_Bool_Exp = {
  _and?: InputMaybe<Array<Resources_Bool_Exp>>;
  _not?: InputMaybe<Resources_Bool_Exp>;
  _or?: InputMaybe<Array<Resources_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  initials?: InputMaybe<String_Comparison_Exp>;
  isLeadership?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  rate?: InputMaybe<String_Comparison_Exp>;
  rateTypeByRateType?: InputMaybe<Rate_Types_Bool_Exp>;
  rate_type?: InputMaybe<Rate_Types_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "resources" */
export enum Resources_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResourcesPkey = 'resources_pkey'
}

/** input type for incrementing numeric columns in table "resources" */
export type Resources_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "resources" */
export type Resources_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  initials?: InputMaybe<Scalars['String']['input']>;
  isLeadership?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['String']['input']>;
  rateTypeByRateType?: InputMaybe<Rate_Types_Obj_Rel_Insert_Input>;
  rate_type?: InputMaybe<Rate_Types_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Resources_Max_Fields = {
  __typename?: 'resources_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initials?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "resources" */
export type Resources_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initials?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Resources_Min_Fields = {
  __typename?: 'resources_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  initials?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "resources" */
export type Resources_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initials?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "resources" */
export type Resources_Mutation_Response = {
  __typename?: 'resources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Resources>;
};

/** on_conflict condition type for table "resources" */
export type Resources_On_Conflict = {
  constraint: Resources_Constraint;
  update_columns?: Array<Resources_Update_Column>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** Ordering options when selecting data from "resources". */
export type Resources_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  initials?: InputMaybe<Order_By>;
  isLeadership?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  rate?: InputMaybe<Order_By>;
  rateTypeByRateType?: InputMaybe<Rate_Types_Order_By>;
  rate_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: resources */
export type Resources_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "resources" */
export enum Resources_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Initials = 'initials',
  /** column name */
  IsLeadership = 'isLeadership',
  /** column name */
  Name = 'name',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Rate = 'rate',
  /** column name */
  RateType = 'rate_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "resources_aggregate_bool_exp_bool_and_arguments_columns" columns of table "resources" */
export enum Resources_Select_Column_Resources_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsLeadership = 'isLeadership'
}

/** select "resources_aggregate_bool_exp_bool_or_arguments_columns" columns of table "resources" */
export enum Resources_Select_Column_Resources_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsLeadership = 'isLeadership'
}

/** input type for updating data in table "resources" */
export type Resources_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  initials?: InputMaybe<Scalars['String']['input']>;
  isLeadership?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['String']['input']>;
  rate_type?: InputMaybe<Rate_Types_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Resources_Stddev_Fields = {
  __typename?: 'resources_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "resources" */
export type Resources_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Resources_Stddev_Pop_Fields = {
  __typename?: 'resources_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "resources" */
export type Resources_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Resources_Stddev_Samp_Fields = {
  __typename?: 'resources_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "resources" */
export type Resources_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "resources" */
export type Resources_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resources_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resources_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  initials?: InputMaybe<Scalars['String']['input']>;
  isLeadership?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['String']['input']>;
  rate_type?: InputMaybe<Rate_Types_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Resources_Sum_Fields = {
  __typename?: 'resources_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "resources" */
export type Resources_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "resources" */
export enum Resources_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Initials = 'initials',
  /** column name */
  IsLeadership = 'isLeadership',
  /** column name */
  Name = 'name',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Rate = 'rate',
  /** column name */
  RateType = 'rate_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Resources_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Resources_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resources_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resources_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Resources_Var_Pop_Fields = {
  __typename?: 'resources_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "resources" */
export type Resources_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Resources_Var_Samp_Fields = {
  __typename?: 'resources_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "resources" */
export type Resources_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Resources_Variance_Fields = {
  __typename?: 'resources_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "resources" */
export type Resources_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** An array relationship */
  allocations: Array<Allocations>;
  /** An aggregate relationship */
  allocations_aggregate: Allocations_Aggregate;
  /** fetch data from the table: "allocations" using primary key columns */
  allocations_by_pk?: Maybe<Allocations>;
  /** fetch data from the table in a streaming manner: "allocations" */
  allocations_stream: Array<Allocations>;
  /** fetch data from the table: "contract_statusses" */
  contract_statusses: Array<Contract_Statusses>;
  /** fetch aggregated fields from the table: "contract_statusses" */
  contract_statusses_aggregate: Contract_Statusses_Aggregate;
  /** fetch data from the table: "contract_statusses" using primary key columns */
  contract_statusses_by_pk?: Maybe<Contract_Statusses>;
  /** fetch data from the table in a streaming manner: "contract_statusses" */
  contract_statusses_stream: Array<Contract_Statusses>;
  /** An array relationship */
  contracts: Array<Contracts>;
  /** An aggregate relationship */
  contracts_aggregate: Contracts_Aggregate;
  /** fetch data from the table: "contracts" using primary key columns */
  contracts_by_pk?: Maybe<Contracts>;
  /** fetch data from the table in a streaming manner: "contracts" */
  contracts_stream: Array<Contracts>;
  /** fetch data from the table: "currencies" */
  currencies: Array<Currencies>;
  /** fetch aggregated fields from the table: "currencies" */
  currencies_aggregate: Currencies_Aggregate;
  /** fetch data from the table: "currencies" using primary key columns */
  currencies_by_pk?: Maybe<Currencies>;
  /** fetch data from the table in a streaming manner: "currencies" */
  currencies_stream: Array<Currencies>;
  /** fetch data from the table: "rate_types" */
  rate_types: Array<Rate_Types>;
  /** fetch aggregated fields from the table: "rate_types" */
  rate_types_aggregate: Rate_Types_Aggregate;
  /** fetch data from the table: "rate_types" using primary key columns */
  rate_types_by_pk?: Maybe<Rate_Types>;
  /** fetch data from the table in a streaming manner: "rate_types" */
  rate_types_stream: Array<Rate_Types>;
  /** An array relationship */
  resources: Array<Resources>;
  /** An aggregate relationship */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
  /** fetch data from the table in a streaming manner: "resources" */
  resources_stream: Array<Resources>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAllocationsArgs = {
  distinct_on?: InputMaybe<Array<Allocations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allocations_Order_By>>;
  where?: InputMaybe<Allocations_Bool_Exp>;
};


export type Subscription_RootAllocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Allocations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Allocations_Order_By>>;
  where?: InputMaybe<Allocations_Bool_Exp>;
};


export type Subscription_RootAllocations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAllocations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Allocations_Stream_Cursor_Input>>;
  where?: InputMaybe<Allocations_Bool_Exp>;
};


export type Subscription_RootContract_StatussesArgs = {
  distinct_on?: InputMaybe<Array<Contract_Statusses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Statusses_Order_By>>;
  where?: InputMaybe<Contract_Statusses_Bool_Exp>;
};


export type Subscription_RootContract_Statusses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contract_Statusses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contract_Statusses_Order_By>>;
  where?: InputMaybe<Contract_Statusses_Bool_Exp>;
};


export type Subscription_RootContract_Statusses_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootContract_Statusses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contract_Statusses_Stream_Cursor_Input>>;
  where?: InputMaybe<Contract_Statusses_Bool_Exp>;
};


export type Subscription_RootContractsArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contracts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Contracts_Order_By>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootContracts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootContracts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Contracts_Stream_Cursor_Input>>;
  where?: InputMaybe<Contracts_Bool_Exp>;
};


export type Subscription_RootCurrenciesArgs = {
  distinct_on?: InputMaybe<Array<Currencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currencies_Order_By>>;
  where?: InputMaybe<Currencies_Bool_Exp>;
};


export type Subscription_RootCurrencies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Currencies_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Currencies_Order_By>>;
  where?: InputMaybe<Currencies_Bool_Exp>;
};


export type Subscription_RootCurrencies_By_PkArgs = {
  code: Scalars['String']['input'];
};


export type Subscription_RootCurrencies_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Currencies_Stream_Cursor_Input>>;
  where?: InputMaybe<Currencies_Bool_Exp>;
};


export type Subscription_RootRate_TypesArgs = {
  distinct_on?: InputMaybe<Array<Rate_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Types_Order_By>>;
  where?: InputMaybe<Rate_Types_Bool_Exp>;
};


export type Subscription_RootRate_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rate_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Rate_Types_Order_By>>;
  where?: InputMaybe<Rate_Types_Bool_Exp>;
};


export type Subscription_RootRate_Types_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootRate_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Rate_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Rate_Types_Bool_Exp>;
};


export type Subscription_RootResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootResources_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootResources_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Resources_Stream_Cursor_Input>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type AccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountsQuery = { __typename?: 'query_root', accounts: Array<{ __typename?: 'accounts', id: number }> };


export const AccountsDocument = gql`
    query Accounts {
  accounts {
    id
  }
}
    `;

/**
 * __useAccountsQuery__
 *
 * To run a query within a React component, call `useAccountsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAccountsQuery(baseOptions?: Apollo.QueryHookOptions<AccountsQuery, AccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
      }
export function useAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountsQuery, AccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountsQuery, AccountsQueryVariables>(AccountsDocument, options);
        }
export type AccountsQueryHookResult = ReturnType<typeof useAccountsQuery>;
export type AccountsLazyQueryHookResult = ReturnType<typeof useAccountsLazyQuery>;
export type AccountsQueryResult = Apollo.QueryResult<AccountsQuery, AccountsQueryVariables>;