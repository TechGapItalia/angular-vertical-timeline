import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from './app/app.module.ngfactory';

import '../lib/vertical-timeline.css';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
