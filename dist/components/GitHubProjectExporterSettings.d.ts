/// <reference types="react" />
import 'bootstrap/dist/css/bootstrap.css';
import { DivProps } from 'react-html-props';
export declare const LOCAL_STORAGE_KEY_PREFIX = "github-projectv2-csv-exporter";
export declare const EXPORTER_ACCESS_TOKEN_KEY = "token";
export declare const EXPORTER_LOGIN_KEY = "login";
export declare const EXPORTER_IS_ORG_KEY = "is-org";
export declare const EXPORTER_INCLUDE_ISSUES_KEY = "include-issues";
export declare const EXPORTER_INCLUDE_PULL_REQUESTS_KEY = "include-pull-requests";
export declare const EXPORTER_INCLUDE_DRAFT_ISSUES_KEY = "include-draft-issues";
export declare const EXPORTER_INCLUDE_CLOSED_ITEMS_KEY = "include-closed-items";
export declare const EXPORTER_REMOVE_STATUS_EMOJIS_KEY = "remove-status-emojis";
export declare const EXPORTER_REMOVE_TITLE_EMOJIS_KEY = "remove-title-emojis";
export declare const EXPORTER_KNOWN_COLUMNS_KEY = "known-columns";
export declare const EXPORTER_KNOWN_COLUMNS_DEFAULT = "Todo,In Progress,Done";
export declare const EXPORTER_COLUMN_FILTER_ENABLED_KEY = "column-filter-enabled";
export declare const EXPORTER_COLUMN_FILTER_TEXT_KEY = "column-filter-text";
export declare const settingsPath = "/github-projectv2-csv-exporter/?path=/story/tools-github-project-exporter--settings";
export interface GitHubExporterSettingsProps extends DivProps {
}
/**
 * Settings for the GitHub project exporter.
 */
export declare const GitHubExporterSettings: ({ ...props }: GitHubExporterSettingsProps) => JSX.Element;
