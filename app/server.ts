import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { join } from 'node:path';
import bootstrap from './src/main.server';

export function app(server: any): express.Express {
  const distFolder = join(process.cwd(), './build/browser');
  const indexHtml = join(distFolder, 'index.html');
  const commonEngine = new CommonEngine();
  server.set('view engine', 'html');
  server.set('views', distFolder);
  server.get('*', (req: any, res: any, next: any) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: distFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });
  return server;
}

export default bootstrap;