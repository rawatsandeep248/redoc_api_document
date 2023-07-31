import * as React from 'react';
import { render } from 'react-dom';
import type { RedocRawOptions } from '../../src/services/RedocNormalizedOptions';
import RedocStandalone from './hot';

const big = window.location.search.indexOf('big') > -1;
const swagger = window.location.search.indexOf('swagger') > -1;

const userUrl = window.location.search.match(/url=(.*)$/);

const specUrl =
  (userUrl && userUrl[1]) || (swagger ? 'swagger.yaml' : big ? 'big-openapi.json' : 'openapi.yaml');

const options: RedocRawOptions = { nativeScrollbars: false, maxDisplayedEnumValues: 3 };
console.log("=-==========================================", specUrl, window.location)
render(<RedocStandalone specUrl={'call-ai.json'} options={options} />, document.getElementById('example'));

document.getElementById("one")?.addEventListener("click", () => {
  console.log("+=================loadddddd called");
  render(<RedocStandalone specUrl={'user-management.json'} options={options} />, document.getElementById('example'));
  console.log("+=================user management loaded");

});
