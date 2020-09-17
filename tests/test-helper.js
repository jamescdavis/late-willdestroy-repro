import Application from 'late-willdestroy-repro/app';
import config from 'late-willdestroy-repro/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
