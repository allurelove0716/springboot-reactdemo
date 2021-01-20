// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/Program Files/workspace/reactdemo/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('D:/Program Files/workspace/reactdemo/src/layouts').default,
    "routes": [
      {
        "path": "/myTabs",
        "component": require('D:/Program Files/workspace/reactdemo/src/pages/myTabs').default,
        "exact": true
      },
      {
        "path": "/user",
        "routes": [
          {
            "path": "/user/list",
            "component": require('D:/Program Files/workspace/reactdemo/src/pages/user/UserList').default,
            "exact": true
          },
          {
            "path": "/user/add",
            "component": require('D:/Program Files/workspace/reactdemo/src/pages/user/UserAdd').default,
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
