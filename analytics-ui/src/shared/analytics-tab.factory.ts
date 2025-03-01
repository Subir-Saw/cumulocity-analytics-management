/*
 * Copyright (c) 2022 Software AG, Darmstadt, Germany and/or Software AG USA Inc., Reston, VA, USA,
 * and/or its subsidiaries and/or its affiliates and/or their licensors.
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @authors Christof Strack
 */
import { Injectable } from "@angular/core";
import { TabFactory, Tab } from "@c8y/ngx-components";
import { Router } from "@angular/router";
@Injectable()
export class AnalyticsTabFactory implements TabFactory {
  constructor(public router: Router) {}

  async get() {
    // console.log(
    //   "AnalyticsTabFactory",
    //   this.router.url,
    //   this.router.url.match(/sag-ps-pkg-analytics-extension/g)
    // );
    // console.log("AnalyticsTabFactory", this.router.config);

    const tabs: Tab[] = [];
    if (this.router.url.match(/sag-ps-pkg-analytics-extension/g)) {
      tabs.push({
        path: "sag-ps-pkg-analytics-extension/manage",
        priority: 940,
        label: "Manage Extensions",
        icon: "plugin",
        orientation: "horizontal",
      } as Tab);
      tabs.push({
        path: "sag-ps-pkg-analytics-extension/list",
        priority: 920,
        label: "Installed Blocks",
        icon: "flow-chart",
        orientation: "horizontal",
      } as Tab);
      tabs.push({
        path: "sag-ps-pkg-analytics-extension/sample",
        priority: 900,
        label: "Sample Repositories",
        icon: "test",
        orientation: "horizontal",
      } as Tab);
    }
    return tabs;
  }
}
