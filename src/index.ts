import { client, v2 } from "@datadog/datadog-api-client";
import type { DDTransportOptions } from "./process-logs";
import { dataDogTransportFactory } from "./process-logs";

export function dataDogTransport(options: DDTransportOptions) {
  options.service = options.service ?? 'Electron';
  const configuration = client.createConfiguration(options.ddClientConf);
  configuration.setServerVariables(options?.ddServerConf || {});
  const apiInstance = new v2.LogsApi(configuration);

  return dataDogTransportFactory(options, apiInstance);
};
