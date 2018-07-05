import { tsquery } from '@phenomnomnominal/tsquery';

export function consoleLogFix(src: string) {
  return tsquery.replace(src,
    'MethodDeclaration CallExpression>PropertyAccessExpression[expression.name=console][name.name=log]',
    () => 'this.awesomeLoggingService.logInfo'
  );
}
