import config from './Files/config.json';

export class Configuration {
    private static instance: Configuration;
    private readonly _environment: string;
    private readonly _connection: string;

    private constructor() {
        this._environment = config.environment;
        this._connection = config.connectionString;
    }

    public static getInstance(): Configuration {
        if (!this.instance) {
            this.instance = new Configuration();
        }
        return this.instance;
    }

    get environment(): string {
        return this._environment;
    }

    get connection(): string {
        return this._connection;
    }
}
