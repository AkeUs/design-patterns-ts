import { Configuration } from './Configuration';
import { expect } from 'chai';
import 'mocha';

const config: Configuration = Configuration.getInstance();

describe('Singleton', () => {

    describe('Configuration Class', () => {

        it('object should be not null', () => {
            expect(config !== null).to.equal(true);
        });

        it('objects should be equals', () => {
            const config2: Configuration = Configuration.getInstance();
            expect(config === config2).to.equal(true);
        });

        it('environment property should be develop', () => {
            expect(config.environment === 'develop').to.equal(true);
        });

    });

});
