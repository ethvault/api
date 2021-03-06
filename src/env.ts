/**
 * Return an environment string or the default value if specified
 * @param name name of the environment string
 * @param defaultValue default value to return if not specified
 */
function getEnvString(name: string, defaultValue?: string): string {
  const val = process.env[ name ];

  if (typeof val === 'undefined') {
    if (defaultValue) {
      return defaultValue;
    } else {
      throw new Error(`Expected environment variable ${name} was not present.`);
    }
  }

  return val;
}

/**
 * A class that has utility methods for each environment variable that is exposed in this environment
 */
export default class EnvironmentVariables {
  static get tokenAudience(): string {
    return getEnvString('TOKEN_AUDIENCE');
  }

  static get tokenIssuer(): string {
    return getEnvString('TOKEN_ISSUER');
  }

  static get logLevel(): string {
    return getEnvString('LOG_LEVEL');
  }

  static get usersTable(): string {
    return getEnvString('USERS_TABLE');
  }

  static get keysBucket(): string {
    return getEnvString('KEYS_BUCKET_NAME');
  }

  static get ensRegistrarQueueUrl(): string {
    return getEnvString('ENS_REGISTRAR_QUEUE_URL');
  }
}
