import { consoleLogFix } from './console-log-fix';

describe('console-log-fix', () => {
    it('should replace console.log with myAwesomeService', () => {
        const input = `
            class MyComponent {
                ngOnInit() {
                    this.foo();
                    console.log('Wow Hi AngularUp');
                    console
                        ./*comment*/log('two');
                }
            }
        `
        expect(consoleLogFix(input)).toContain(`
            class MyComponent {
                ngOnInit() {
                    this.foo();
                    this.awesomeLoggingService.logInfo('Wow Hi AngularUp');
                    this.awesomeLoggingService.logInfo('two');
                }
            }`
        );
    });
});